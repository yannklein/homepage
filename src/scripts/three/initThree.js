import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fetchGithubActivity from '../github_activity';
import { fetchTokyoEvents } from '../tokyo-events';
import outroLoading from '../loading';

import porcelainImg from '../../images/matcap-porcelain-white.jpg';

import { createSpaceShip } from './spaceship';

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
        console.log(eventCubes.children);
        const intersects = raycaster.intersectObjects(eventCubes.children);
        for (let i = 0; i < intersects.length; i++) {
          console.log(intersects[i].object.name, scene.name);
          intersects[i].object.material.matcap = null;
        }
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

// Create the time spheres on the ThreeJS bg
const createTimeSphere = (type, material, world, offset) => {
  const times = {
    hour: {
      now: date => date.getUTCHours() + offset + date.getUTCMinutes() / 60,
      division: 12,
      distCenter: 0.5,
      sphereSize: 0.1
    },
    minute: {
      now: date => date.getUTCMinutes() + date.getUTCSeconds() / 60,
      division: 60,
      distCenter: 0.4,
      sphereSize: 0.04
    },
    second: {
      now: date => date.getUTCSeconds() + date.getUTCMilliseconds() / 1000,
      division: 60,
      distCenter: 0.3,
      sphereSize: 0.03
    }
  };
  const geometry = new THREE.SphereBufferGeometry(times[type].sphereSize, 32, 32);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x =
    Math.cos(Math.PI / 2 - (12 * 2 * Math.PI) / times[type].division) * times[type].distCenter;
  mesh.position.y =
    Math.sin(Math.PI / 2 - (12 * 2 * Math.PI) / times[type].division) * times[type].distCenter;
  mesh.name = "timeSphere";
  const animation = () => {
    const date = new Date();
    mesh.position.x =
      Math.cos(Math.PI / 2 - (times[type].now(date) * 2 * Math.PI) / times[type].division) * times[type].distCenter;
    mesh.position.y =
      Math.sin(Math.PI / 2 - (times[type].now(date) * 2 * Math.PI) / times[type].division) * times[type].distCenter;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);

  return mesh;
};

const formatEvents = eventObject => {
  // console.log(eventObject);
  return eventObject.map(event => {
    return {
      distCenter: 0.55 - Math.random() / 5,
      sphereSize: 0.04 / (event.remainingDays + 1),
      initOffset: Math.random() * 10
    };
  });
};

const createEventCubes = (eventObject, material, world, bgMeshes) => {
  const spheresConfig = formatEvents(eventObject);
  // console.log(spheresConfig);
  const group = new THREE.Group();
  group.name = "eventCubesGroup";
  spheresConfig.forEach(config => {
    const geometry = new THREE.BoxBufferGeometry(
      config.sphereSize,
      config.sphereSize,
      config.sphereSize
    );
    const mesh = new THREE.Mesh(geometry, material);
    let cycle = 0;
    const rotSpeedX = Math.random();
    const rotSpeedY = Math.random();
    const rotSpeedZ = Math.random();
    const animation = () => {
      cycle += 0.001;
      mesh.position.x = -Math.cos(cycle * Math.PI + config.initOffset) * config.distCenter;
      mesh.position.z = Math.sin(cycle * Math.PI + config.initOffset) * config.distCenter;
      mesh.position.y = 0.2 * Math.cos(cycle * Math.PI + config.initOffset);
      mesh.rotation.x += rotSpeedX / 100;
      mesh.rotation.z += rotSpeedY / 100;
      mesh.rotation.y += rotSpeedZ / 100;
    };
    mesh.name = "eventCubes";
    const bindedAnimation = animation.bind(null, mesh);
    world.animationQueue.push(bindedAnimation);
    group.add(mesh);
  });
  bgMeshes.add(group);
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
    bgMeshes.name = "bgMesh";

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
    bgMeshes.add(createTimeSphere('hour', material, world, localOffset));
    bgMeshes.add(createTimeSphere('minute', material, world, localOffset));
    bgMeshes.add(createTimeSphere('second', material, world, localOffset));
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
  wall.name = "invisibleWall";
  world.scene.add(wall);

  const isocahedron = new THREE.Group();
  isocahedron.name = "isocahedronGroup"
  // Create the isocahedron
  {
    const textureLoader = new THREE.TextureLoader(manager);
    textureLoader.load(porcelainImg, porcelain => {
      const geometry = new THREE.IcosahedronGeometry(0.4, 0);
      const material = new THREE.MeshMatcapMaterial({ matcap: porcelain });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x += (Math.PI * 3) / 5;
      mesh.name = "isocahedron";
      isocahedron.add(mesh);
    });
  }

  // Create the text
  {
    const line1 = '              Δ\n\n';
    const line2 = "         I'm Yann\n";
    const line3 = '      and here is a\n';
    const line4 = 'glimpse of what I do';
    const text = `${line1}${line2}${line3}${line4}`;
    const loader = new THREE.FontLoader();
    let geometry;
    const size = 0.022;
    // const textLength = text.length / 10;
    // const textHeight = size / 10;
    loader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/optimer_regular.typeface.json', font => {
        geometry = new THREE.TextBufferGeometry(text, {
          font,
          size,
          height: -0.08 * size,
          curveSegments: 6
        });
        const materials = [
          new THREE.MeshBasicMaterial({ color: 0x222222 }),
          new THREE.MeshBasicMaterial({ color: 0xcccccc })
        ];
        const mesh = new THREE.Mesh(geometry, materials);
        mesh.position.z = 0.32;

        mesh.geometry.computeBoundingBox();
        const textLength = Math.abs(mesh.geometry.boundingBox.max.x - mesh.geometry.boundingBox.min.x);
        const textHeight = Math.abs(mesh.geometry.boundingBox.max.y - mesh.geometry.boundingBox.min.y);
        mesh.position.x -= textLength / 2;
        mesh.position.y += textHeight / 2;
        mesh.rotation.x -= Math.PI * 0.015;
        mesh.name = "isocahedron";
        isocahedron.add(mesh);
      }
    );
  }
  isocahedron.renderOrder = 2;
  isocahedron.position.z = 0;
  world.scene.add(isocahedron);

  const animation = () => {
    isocahedron.rotation.x += 0.01;
    isocahedron.rotation.y += 0.02;
  };
  const bindedAnimation = animation.bind(null, isocahedron);

  // "Intro closing" event trigger when click the intro isocahedron
  const closeIntro = event => {
    // Make the isocahedron rotate
    const introPopup = event.currentTarget;
    world.animationQueue.push(bindedAnimation);
    // Make the isocahedron progressively move backward
    const intervId = setInterval(() => {
      isocahedron.position.z -= 0.01;
      // When the isocahedron totally disappear beneath the invisible wall
      // make it vanish
      if (isocahedron.position.z <= -0.6) {
        // Make the homepage cards visible
        mainContent.classList.add('main-content-visible');
      }
      if (isocahedron.position.z <= -1) {
        introPopup.style.display = 'none';
        world.scene.remove(isocahedron);
        world.scene.remove(wall);
        clearInterval(intervId);
      }
    }, 30);
  };

  htmlElement.addEventListener('click', closeIntro);
};

export { initThree, addBackground, addIntroPopup };
