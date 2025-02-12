import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { fetchGithubActivity } from '../github_activity';
import { EventObject, fetchTokyoEvents } from '../tokyo-events';

import porcelainImg from '../../assets/matcap-porcelain-white.jpg';

// import createSpaceShip from './spaceship';
import createTimeSpheres from './time-spheres';
import createEventCubes from './event-cubes';
import { createIsocahedron } from './isocahedron';
import { createTorus, disposeTorus } from './torus';

export type ThreeJSContext = {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  animationQueue: (() => void)[]; // Assuming animationQueue is an array of functions
};

// GH username
const username = 'yannklein';

// Variable disabling/enabling raycast
let raycasterOn = false;

// Initialize ThreeJS canvas
const initThree = (name: string, htmlElement: HTMLElement): ThreeJSContext => {
  // For small screen, there is only 2 stuffs to load
  if (window.innerWidth <= 1100) {
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    if (mainContent) mainContent.classList.add('main-content-visible');
  }

  // Listen to mouse move for Raycasting
  const mouse = new THREE.Vector2();
  const onMouseMove = (event: MouseEvent) => {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  window.addEventListener('mousemove', onMouseMove, false);

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10,
  );
  camera.position.z = 1;

  const scene = new THREE.Scene();
  scene.name = name;

  const raycaster = new THREE.Raycaster();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  htmlElement.appendChild(renderer.domElement);

  // const controls = new OrbitControls(camera, renderer.domElement);

  const animationQueue: (() => void)[] = [];

  const animate = () => {
    requestAnimationFrame(animate);
    animationQueue.forEach((animation) => {
      animation();
    });
    // controls.update();

    // Raycast code
    if (raycasterOn) {
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);
      // calculate objects intersecting the picking ray
      const eventCubes = scene.getObjectByName('eventCubesGroup');
      const eventCubeLegend = document.querySelector(
        '.event-cube-legend',
      ) as HTMLAnchorElement;
      if (!eventCubeLegend) return;
      if (eventCubes) {
        // console.log(eventCubes.children);
        eventCubeLegend.classList.remove('event-cube-legend-show');
        const intersects = raycaster.intersectObjects(eventCubes.children);
        intersects.forEach((intersect) => {
          // console.log(intersect.object.eventDetails);
          const event = (intersect.object as any).eventDetails;
          eventCubeLegend.href = event.url;
          const date = `<i class="fas fa-clock"></i> ${
            event.event_date
          } ${event.name.substring(1, 6)}`;
          const title = `<i class="fas fa-calendar-day"></i>
            ${event.name.substring(9)} by ${event.group}`;
          const place = `<i class="fas fa-map-marker-alt"></i> ${event.venue}`;
          if (!eventCubeLegend) return;
          (eventCubeLegend.querySelector('.date') as HTMLElement).innerHTML =
            date;
          (eventCubeLegend.querySelector('.title') as HTMLElement).innerHTML =
            title;
          (eventCubeLegend.querySelector('.place') as HTMLElement).innerHTML =
            place;
          eventCubeLegend.classList.add('event-cube-legend-show');
        });
      }
    }
    renderer.render(scene, camera);
  };
  animate();

  return {
    scene,
    camera,
    renderer,
    animationQueue,
  };
};

// Create ThreeJS background
const addBackground = (
  htmlElement: HTMLElement,
  world: ThreeJSContext,
  setBackgroundLoaded: (arg0: boolean) => void,
) => {
  // Background loading manager
  const manager = new THREE.LoadingManager();
  manager.onLoad = () => {
    console.log('Background Loading complete! ');
    setBackgroundLoaded(true);
  };

  // Load the porcelain texture
  const textureLoader = new THREE.TextureLoader(manager);
  textureLoader.load(
    porcelainImg,
    (porcelain) => {
      porcelain.colorSpace = THREE.SRGBColorSpace;
      porcelain.minFilter = THREE.LinearMipMapLinearFilter;
      porcelain.magFilter = THREE.LinearFilter;
      const material = new THREE.MeshMatcapMaterial({
        side: THREE.DoubleSide,
        matcap: porcelain,
      });
      const bgMeshes = new THREE.Group();
      bgMeshes.name = 'bgMesh';

      // Create the middle isocahedron
      {
        const geometry = new THREE.IcosahedronGeometry(0.1, 0);

        const mesh = new THREE.Mesh(geometry, material);
        bgMeshes.add(mesh);

        const animation = (mesh: THREE.Mesh) => {
          mesh.rotation.x += 0.005;
          mesh.rotation.y += 0.01;
        };
        const bindedAnimation = animation.bind(null, mesh);
        world.animationQueue.push(bindedAnimation);
      }

      // Create an orbiting clock
      const localOffset = 9;
      bgMeshes.add(createTimeSpheres('hour', material, world, localOffset));
      bgMeshes.add(createTimeSpheres('minute', material, world, localOffset));
      bgMeshes.add(createTimeSpheres('second', material, world, localOffset));

      // Create a spaceship
      // createSpaceShip(username, textureLoader, material, bgMeshes, world);

      // Create event spheres
      const bindedCreateEventCubes = (eventObject: EventObject[]) => {
        createEventCubes(eventObject, material, world, bgMeshes);
      };
      fetchTokyoEvents(bindedCreateEventCubes);

      // create initial 3 edges torus
      const initialTorus = createTorus(3, material, bgMeshes, world);
      // fetch GH commits
      fetchGithubActivity(username, (activity: number) => {
        // when received, remove initial torus
        disposeTorus(initialTorus, bgMeshes);
        // calculate edges
        const edges = activity < 3 ? 3 : activity;
        // create new torus with right edge num
        createTorus(edges, material, bgMeshes, world);
      });

      world.scene.add(bgMeshes);

      // Show background only when clicked
      const showHideBackground = () => {
        // Initial state, the cards and sidebars are hidden
        const mainContent = document.querySelector(
          '.main-content',
        ) as HTMLElement;
        const bgLegend = document.querySelector(
          '.background-legend',
        ) as HTMLElement;
        // Show hide background
        mainContent.classList.toggle('main-content-visible');
        bgLegend.classList.toggle('background-legend-show');
        raycasterOn = !raycasterOn;
      };

      htmlElement.addEventListener('click', showHideBackground);
    },
    undefined,
    (error) => {
      console.error('Error loading texture:', error);
    },
  );
};

const addIntroPopup = (
  htmlElement: HTMLElement,
  world: ThreeJSContext,
  setIntroPopupLoaded: (arg0: boolean) => void,
) => {
  // Intro loading manager
  const manager = new THREE.LoadingManager();
  manager.onLoad = () => {
    setIntroPopupLoaded(true);
  };
  // Create invisible wall
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    colorWrite: false,
  });
  const wall = new THREE.Mesh(geometry, material);
  wall.renderOrder = 1;
  wall.position.z = -0.9;
  wall.name = 'invisibleWall';
  world.scene.add(wall);
  
  console.log("Intro popup loaded");
  const mainContent = document.querySelector('.main-content') as HTMLElement;
  createIsocahedron(world, htmlElement, manager, mainContent);
};

export { initThree, addBackground, addIntroPopup };
