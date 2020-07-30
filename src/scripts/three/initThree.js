import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fetchGithubActivity from '../github_activity';
import { fetchTokyoEvents } from '../tokyo-events';
import outroLoading from '../loading';

import porcelainImg from '../../images/matcap-porcelain-white.jpg';

import { createSpaceShip } from './spaceship';
import { createTimeSpheres } from './time-spheres';
import { createEventCubes } from './event-cubes';
import { createIsocahedron } from './isocahedron';

// GH username
const username = 'yannklein';

// Initial state, the cards and sidebars are hidden
const mainContent = document.querySelector('.main-content');
if (mainContent) mainContent.classList.remove('main-content-visible');
const bgLegend = document.querySelector('.background-legend');
if (bgLegend) bgLegend.classList.remove('background-legend-show');

// Variable to check the page loading state
let assetsToLoad = 3;
let assetsLoaded = 0;

// For small screen, there is only 2 stuffs to load
if (window.innerWidth <= 480) {
  assetsToLoad = 2;
  if (mainContent) mainContent.classList.add('main-content-visible');
}

// Listen to mouse move for Raycasting
const mouse = new THREE.Vector2();
const onMouseMove = event => {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
};
window.addEventListener('mousemove', onMouseMove, false);

// Function run when a main element of the page is loaded (bg, intro,..)
const fullSceneLoaded = () => {
  assetsLoaded += 1;
  if (assetsToLoad === assetsLoaded) {
    // console.log('Full loading complete!');
    const loadingElement = document.querySelector('.loading-mask');
    if (loadingElement) {
      outroLoading(document, loadingElement);
    }
  }
};

// Initialize ThreeJS canvas
const initThree = (name, htmlElement, raycasterOn = false) => {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();
  scene.name = name;

  const raycaster = new THREE.Raycaster();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  htmlElement.appendChild(renderer.domElement);

  // const controls = new OrbitControls(camera, renderer.domElement);

  const animationQueue = [];

  const animate = () => {
    requestAnimationFrame(animate);
    animationQueue.forEach(animation => {
      animation();
    });
    // controls.update();

    // Raycast code
    if (raycasterOn) {
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);
      // calculate objects intersecting the picking ray
      const eventCubes = scene.getObjectByName('eventCubesGroup');
      if (eventCubes) {
        // console.log(eventCubes.children);
        const intersects = raycaster.intersectObjects(eventCubes.children);
        intersects.forEach(intersect => {
          console.log(intersect.object.eventDetails);
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
    animationQueue
  };
};

// Create ThreeJS background
const addBackground = (htmlElement, world) => {
  // Background loading manager
  const manager = new THREE.LoadingManager();
  manager.onLoad = () => {
    // console.log('Loading complete! ');
    fullSceneLoaded();
  };

  // Load the porcelain texture
  const textureLoader = new THREE.TextureLoader(manager);
  textureLoader.load(porcelainImg, porcelain => {
    const material = new THREE.MeshMatcapMaterial({ side: THREE.DoubleSide, matcap: porcelain });
    const bgMeshes = new THREE.Group();
    bgMeshes.name = 'bgMesh';

    // Create the middle isocahedron
    {
      const geometry = new THREE.IcosahedronBufferGeometry(0.1, 0);

      const mesh = new THREE.Mesh(geometry, material);
      bgMeshes.add(mesh);

      const animation = () => {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.01;
      };
      const bindedAnimation = animation.bind(null, mesh);
      world.animationQueue.push(bindedAnimation);
    }

    // Create an orbiting clock
    // getUTCOffset(username, localOffset => {
    const localOffset = 9;
    bgMeshes.add(createTimeSpheres('hour', material, world, localOffset));
    bgMeshes.add(createTimeSpheres('minute', material, world, localOffset));
    bgMeshes.add(createTimeSpheres('second', material, world, localOffset));
    // });

    // Create a spaceship
    createSpaceShip(username, textureLoader, material, bgMeshes, world);

    // Create event spheres
    const bindedCreateEventCubes = eventObject => {
      createEventCubes(eventObject, material, world, bgMeshes);
    };
    fetchTokyoEvents(bindedCreateEventCubes);

    fetchGithubActivity(username, new Date(), activity => {
      if (activity < 3) activity = 3;
      const geometry = new THREE.TorusBufferGeometry(0.3, 0.04, 16, activity);
      const mesh = new THREE.Mesh(geometry, material);
      bgMeshes.add(mesh);
      mesh.rotation.x = -Math.PI / 4;
      mesh.rotation.y = -Math.PI / 4;

      const animation = () => {
        // ship.rotation .x = -0.2 * Math.cos(position * Math.PI - Math.PI / 2);
        mesh.rotation.z += 0.001;
      };
      const bindedAnimation = animation.bind(null, mesh);
      world.animationQueue.push(bindedAnimation);
    });

    world.scene.add(bgMeshes);

    // Show background only when clicked
    const showHideBackground = () => {
      // Show hide background
      mainContent.classList.toggle('main-content-visible');
      bgLegend.classList.toggle('background-legend-show');
    };

    htmlElement.addEventListener('click', showHideBackground);
  });
};

const addIntroPopup = (htmlElement, world) => {
  // Intro loading manager
  const manager = new THREE.LoadingManager();
  manager.onLoad = () => {
    // console.log('Loading complete!');
    fullSceneLoaded();
  };
  // Create invisible wall
  const geometry = new THREE.CubeGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000, colorWrite: false });
  const wall = new THREE.Mesh(geometry, material);
  wall.renderOrder = 1;
  wall.position.z = -0.9;
  wall.name = 'invisibleWall';
  world.scene.add(wall);

  createIsocahedron(world, htmlElement, manager, mainContent);
};

export { initThree, addBackground, addIntroPopup };
