import * as THREE from 'three';
import porcelainImg from '../../assets/matcap-porcelain-white.jpg';

const createIsocahedron = (world, htmlElement, manager, mainContent) => {
  const isocahedron = new THREE.Group();
  isocahedron.name = 'isocahedronGroup';
  // Create the isocahedron
  {
    const textureLoader = new THREE.TextureLoader(manager);
    textureLoader.load(porcelainImg, porcelain => {
      const geometry = new THREE.IcosahedronGeometry(0.4, 0);
      const material = new THREE.MeshMatcapMaterial({ matcap: porcelain });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x += (Math.PI * 3) / 5;
      mesh.name = 'isocahedron';
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
    loader.load(
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/optimer_regular.typeface.json',
      font => {
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
        const textLength = Math.abs(
          mesh.geometry.boundingBox.max.x - mesh.geometry.boundingBox.min.x
        );
        const textHeight = Math.abs(
          mesh.geometry.boundingBox.max.y - mesh.geometry.boundingBox.min.y
        );
        mesh.position.x -= textLength / 2;
        mesh.position.y += textHeight / 2;
        mesh.rotation.x -= Math.PI * 0.015;
        mesh.name = 'isocahedron';
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

  // "Intro closing" event trigger when click the intro isocahedron
  const closeIntro = event => {
    // Make the isocahedron rotate
    const introPopup = event.currentTarget;
    const bindedAnimation = animation.bind(null, isocahedron);
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
        clearInterval(intervId);
      }
    }, 30);
  };

  htmlElement.addEventListener('click', closeIntro);
};

export { createIsocahedron };
