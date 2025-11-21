import * as THREE from 'three';
import { ThreeJSContext } from './initThree';
import { getCountry } from '../locationInfo';

export const createSpaceShip = (username: string, textureLoader: THREE.TextureLoader, porcelainMat: THREE.Material, bgMeshes: THREE.Group, world: ThreeJSContext) => {
  const ship = new THREE.Group();

  const asteroidGeometry = new THREE.IcosahedronGeometry(0.15, 1);
  const positions = asteroidGeometry.attributes.position;
  const originalPositions = new Float32Array(positions.array);

  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i);
    const y = positions.getY(i);
    const z = positions.getZ(i);
    const length = Math.sqrt(x * x + y * y + z * z);
    const randomFactor = 0.8 + Math.random() * 0.4;
    positions.setXYZ(
      i,
      (x / length) * 0.15 * randomFactor,
      (y / length) * 0.15 * randomFactor,
      (z / length) * 0.15 * randomFactor
    );
  }

  asteroidGeometry.computeVertexNormals();
  const asteroid = new THREE.Mesh(asteroidGeometry, porcelainMat);
  ship.add(asteroid);

  const geoFlag = new THREE.PlaneGeometry(0.12, 0.08);
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
        flag.position.z = 0;
        flag.position.x = 0.1;
        flag.position.y = 0.05;
        flag.rotation.y = Math.PI / 2;
        ship.add(flag);
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

  let morphTime = 0;
  const animation = (ship: THREE.Group) => {
    position += speed;
    morphTime += 0.02;

    for (let i = 0; i < positions.count; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      const noise = Math.sin(morphTime + i * 0.5) * 0.02 +
                    Math.cos(morphTime * 1.3 + i * 0.3) * 0.015;

      positions.setXYZ(
        i,
        ox + noise * ox,
        oy + noise * oy,
        oz + noise * oz
      );
    }
    positions.needsUpdate = true;
    asteroidGeometry.computeVertexNormals();

    ship.position.x = Math.cos(position * Math.PI) * distCenter;
    ship.position.z = Math.sin(position * Math.PI) * distCenter;
    ship.position.y = 0.2 * Math.cos(position * Math.PI);
    ship.rotation.x = -0.2 * Math.cos(position * Math.PI) + Math.sin(morphTime * 0.5) * 0.1;
    ship.rotation.z = -0.2 * Math.cos(position * Math.PI - Math.PI / 4) + Math.cos(morphTime * 0.7) * 0.1;
    ship.rotation.y = -position * Math.PI + Math.sin(morphTime * 0.3) * 0.05;
  };

  const bindedAnimation = animation.bind(null, ship);
  world.animationQueue.push(bindedAnimation);
};
