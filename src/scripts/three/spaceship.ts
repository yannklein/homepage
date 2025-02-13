import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { ThreeJSContext } from './initThree';


import { getCountry } from '../locationInfo';

export default (username: string, textureLoader: THREE.TextureLoader, porcelainMat: THREE.Material, bgMeshes: THREE.Group, world: ThreeJSContext) => {
  // Load 3D object
  const ship = new THREE.Group();
  const loader = new GLTFLoader();
  loader.load(
    '/spaceship/scene.gltf',
    gltf => {
      
      gltf.scene.traverse(o => {
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).material = porcelainMat;
        }
      });
      ship.add(gltf.scene);
      // Resize/rescale the 3D Object
      const bbox = new THREE.Box3().setFromObject(gltf.scene);
      const cent = bbox.getCenter(new THREE.Vector3());
      const size = bbox.getSize(new THREE.Vector3());
      // Rescale the object to normalized space
      const maxAxis = Math.max(size.x, size.y, size.z);
      gltf.scene.scale.multiplyScalar(0.3 / maxAxis);
      bbox.setFromObject(gltf.scene);
      bbox.getCenter(cent);
      bbox.getSize(size);
      // Reposition to 0,halfY,0
      gltf.scene.position.copy(cent).multiplyScalar(-1);

      const geoFlag = new THREE.PlaneGeometry(0.12, 0.08);
      // Update country according to GH location
      getCountry(username, fetchedCountry => {
        textureLoader.load(
          `https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/${fetchedCountry}.svg`,
          texFlag => {
            const matFlag = new THREE.MeshMatcapMaterial({
              side: THREE.DoubleSide,
              map: texFlag
            });
            const flag = new THREE.Mesh(geoFlag, matFlag);
            flag.scale.multiplyScalar(0.25);
            flag.position.z = -0.04;
            flag.position.x = 0.02;
            flag.rotation.y = Math.PI / 2;
            ship.add(flag);
            const flagBack = new THREE.Mesh(geoFlag, matFlag);
            flagBack.scale.multiplyScalar(0.25);
            flagBack.position.z = -0.04;
            flagBack.position.x = -0.02;
            flagBack.rotation.y = Math.PI / 2;
            ship.add(flagBack);
          }
        );
      });

      const speed = 0.0005;
      let position = 0.11;
      const distCenter = 1.1;
      ship.rotation.y = -position * Math.PI - Math.PI / 2;
      ship.position.x = Math.cos(position * Math.PI) * distCenter;
      ship.position.z = Math.sin(position * Math.PI) * distCenter;
      ship.name = 'spaceship';
      bgMeshes.add(ship);

      const animation = (ship: THREE.Group) => {
        position += speed;
        ship.position.x = Math.cos(position * Math.PI) * distCenter;
        ship.position.z = Math.sin(position * Math.PI) * distCenter;
        ship.position.y = 0.2 * Math.cos(position * Math.PI);
        ship.rotation.x = -0.2 * Math.cos(position * Math.PI);
        ship.rotation.z = -0.2 * Math.cos(position * Math.PI - Math.PI / 4);
        ship.rotation.y = -position * Math.PI;
      };
      const bindedAnimation = animation.bind(null, ship);
      world.animationQueue.push(bindedAnimation);
    },
    undefined,
    e => {
      throw e;
    }
  );
};
