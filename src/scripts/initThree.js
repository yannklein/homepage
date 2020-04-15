import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const initThree = htmlElement => {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  htmlElement.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const animationQueue = [];

  const animate = () => {
    requestAnimationFrame(animate);
    animationQueue.forEach(animation => {
      animation();
    });

    controls.update();

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

const addBackground = world => {
  const textureLoader = new THREE.TextureLoader();
  const porcelain = textureLoader.load('./src/images/matcap-porcelain-white.jpg');
  const geometry = new THREE.IcosahedronGeometry(0.3, 0);
  const material = new THREE.MeshMatcapMaterial({ matcap: porcelain });

  const mesh = new THREE.Mesh(geometry, material);
  world.scene.add(mesh);

  const animation = () => {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);
};

const addIntroPopup = (htmlElement, world) => {
  // Create invisible whole
  {
    const geometry = new THREE.CubeGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000, colorWrite: false });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 1;
    mesh.position.z = -0.9;
    world.scene.add(mesh);
  }

  const isocahedron = new THREE.Group();
  // Create the isocahedron
  {
    const textureLoader = new THREE.TextureLoader();
    const porcelain = textureLoader.load('./src/images/matcap-porcelain-white.jpg');
    const geometry = new THREE.IcosahedronGeometry(0.4, 0);
    const material = new THREE.MeshMatcapMaterial({ matcap: porcelain });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x += (Math.PI * 3) / 5;
    isocahedron.add(mesh);
  }

  // Create the text
  {
    const line1 = '              Δ\n\n';
    const line2 = '         I\'m Yann\n';
    const line3 = '      and here is a\n';
    const line4 = 'glimpse of what I do';
    const text =`${line1}${line2}${line3}${line4}`;
    const loader = new THREE.FontLoader();
    let geometry;
    const size = 0.022;
    // const textLength = text.length / 10;
    // const textHeight = size / 10;
    loader.load('./src/fonts/optimer_regular.typeface.json', function(font) {
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
      isocahedron.add(mesh);
    });
  }
  isocahedron.renderOrder = 2;
  isocahedron.position.z = 0;
  world.scene.add(isocahedron);

  const closeIntro = event => {
    const intervId = setInterval(() => {
      isocahedron.position.z -= 0.03;
      if (isocahedron.position.z >= -1) {
        event.currentTarget.style.display = 'none';
        clearInterval(intervId);
      }
    }, 30);
  };

  htmlElement.addEventListener('click', closeIntro);
};

export { initThree, addBackground, addIntroPopup };
