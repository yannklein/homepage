import * as THREE from 'three';

const initThree = htmlElement => {
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  htmlElement.appendChild(renderer.domElement);

  const animationQueue = [];

  const animate = () => {
    requestAnimationFrame(animate);
    animationQueue.forEach(animation => {
      animation();
    });

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

  const animation = mesh => {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);
};

const addIntroPopup = world => {
  const textureLoader = new THREE.TextureLoader();
  const porcelain = textureLoader.load('./src/images/matcap-porcelain-white.jpg');
  const geometry = new THREE.IcosahedronGeometry(0.2, 0);
  const material = new THREE.MeshMatcapMaterial({ matcap: porcelain });

  const mesh = new THREE.Mesh(geometry, material);
  world.scene.add(mesh);

  const animation = mesh => {
    mesh.rotation.x += 0.01;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);
};

export { initThree, addBackground, addIntroPopup };
