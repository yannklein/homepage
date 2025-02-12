import * as THREE from 'three';
import { ThreeJSContext } from './initThree';

type TimeUnit = {
  now: (date: Date) => number;
  division: number;
  distCenter: number;
  sphereSize: number;
};

type Times = {
  hour: TimeUnit;
  minute: TimeUnit;
  second: TimeUnit;
};

// Create the time spheres on the ThreeJS bg
export default (type: string, material: THREE.Material, world: ThreeJSContext, offset: number) => {
  const times: Times = {
    hour: {
      now: (date: Date) => date.getUTCHours() + offset + date.getUTCMinutes() / 60,
      division: 12,
      distCenter: 0.5,
      sphereSize: 0.1
    },
    minute: {
      now: (date: Date) => date.getUTCMinutes() + date.getUTCSeconds() / 60,
      division: 60,
      distCenter: 0.4,
      sphereSize: 0.04
    },
    second: {
      now: (date: Date) => date.getUTCSeconds() + date.getUTCMilliseconds() / 1000,
      division: 60,
      distCenter: 0.3,
      sphereSize: 0.03
    }
  };
  const timePart = times[type as keyof Times]
  let radius = timePart.sphereSize;
  if (!radius) radius = 1;
  const geometry = new THREE.SphereGeometry(radius, 32, 32);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x =
    Math.cos(Math.PI / 2 - (12 * 2 * Math.PI) / timePart.division) * timePart.distCenter;
  mesh.position.y =
    Math.sin(Math.PI / 2 - (12 * 2 * Math.PI) / timePart.division) * timePart.distCenter;
  mesh.name = 'timeSphere';
  const animation = (mesh: THREE.Mesh) => {
    const date = new Date();
    mesh.position.x =
      Math.cos(Math.PI / 2 - (timePart.now(date) * 2 * Math.PI) / timePart.division) *
      timePart.distCenter;
    mesh.position.y =
      Math.sin(Math.PI / 2 - (timePart.now(date) * 2 * Math.PI) / timePart.division) *
      timePart.distCenter;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);

  return mesh;
};
