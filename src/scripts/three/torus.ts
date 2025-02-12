import * as THREE from 'three';
import { ThreeJSContext } from './initThree';

const createTorus = (edges: number, material: THREE.Material, bgMeshes: THREE.Group, world: ThreeJSContext) => {
  const geometry = new THREE.TorusGeometry(0.3, 0.04, 16, edges);
  const mesh = new THREE.Mesh(geometry, material);
  bgMeshes.add(mesh);
  mesh.rotation.x = -Math.PI / 4;
  mesh.rotation.y = -Math.PI / 4;

  const animation = (mesh: THREE.Mesh) => {
    // ship.rotation .x = -0.2 * Math.cos(position * Math.PI - Math.PI / 2);
    mesh.rotation.z += 0.001;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);
  return mesh;
};

const disposeTorus = (torus: THREE.Mesh, bgMeshes: THREE.Group) => {
  torus.geometry.dispose();
  if (Array.isArray(torus.material)) {
    torus.material.forEach(material => material.dispose());
  } else {
    torus.material.dispose();
  }
  bgMeshes.remove(torus);
};

export { createTorus, disposeTorus };
