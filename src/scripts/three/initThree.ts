import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { fetchGithubActivity } from '../github_activity';
import { EventObject, fetchTokyoEvents, Event } from '../tokyo-events';

import porcelainImg from '../../assets/matcap-porcelain-white.jpg';

// import createSpaceShip from './spaceship';
import createTimeSpheres from './time-spheres';
import createEventCubes from './event-cubes';
import { createTorus, disposeTorus } from './torus';

export type ThreeJSContext = {
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.WebGLRenderer;
  animationQueue: (() => void)[]; // Assuming animationQueue is an array of functions
};

// GH username
const username = 'yannklein';

let textureLoaded = false;

// Initialize ThreeJS canvas
const initThree = (name: string, htmlElement: HTMLElement): ThreeJSContext => {
  // For small screen, there is only 2 stuffs to load
  if (window.innerWidth <= 1100) {
    const mainContent = document.querySelector('.main-content') as HTMLElement;
    if (mainContent) mainContent.classList.add('main-content-visible');
  }

  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10,
  );
  camera.position.z = 1;

  const scene = new THREE.Scene();
  scene.name = name;

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

    // Listen to mouse move for Raycasting
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, false);

    // Raycast code
    const introPopupEl = document.querySelector('.intro-popup-hidden') as HTMLElement;
    const portfolioEl = document.querySelector('.main-content-visible') as HTMLElement;
    
    if (introPopupEl && !portfolioEl) {
      const raycaster = new THREE.Raycaster();
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
          const event = (
            intersect.object as THREE.Mesh & { eventDetails: Event }
          ).eventDetails;
          eventCubeLegend.href = event.url;
          const date = `<i class="fas fa-clock"></i> ${
            event.event_date
          } ${event.name.substring(1, 6)}`;
          const title = `<i class="fas fa-calendar-day"></i>`;
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

    // controls.update();
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
  world: ThreeJSContext,
  setBackgroundLoaded: (arg0: boolean) => void,
) => {

  // Background loading manager
  const manager = new THREE.LoadingManager();
  const textureLoader = new THREE.TextureLoader(manager);
  manager.onLoad = () => {
    console.log('Background Loading complete! ');
    setBackgroundLoaded(true);
  };
  console.log('add backfgroundf');

  // Load the porcelain texture
  textureLoader.load(
    porcelainImg,
    (porcelain) => {
      if (textureLoaded) {
        return;
      } else {
        textureLoaded = true;
      }
      console.log('tessssst', world);

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
      console.log('fetch evebts');

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
      return;
    },
    undefined,
    (error) => {
      console.error('Error loading texture:', error);
    },
  );
};

export { initThree, addBackground };
