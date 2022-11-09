import * as THREE from 'three';

const createTorus = (edges, material, bgMeshes, world) => {
  const geometry = new THREE.TorusBufferGeometry(0.3, 0.04, 16, edges);
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
  return mesh;
};

const disposeTorus = (torus, bgMeshes) => {
  torus.geometry.dispose();
  torus.material.dispose();
  bgMeshes.remove(torus);
};

export { createTorus, disposeTorus };
