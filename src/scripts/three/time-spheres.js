import * as THREE from 'three';

// Create the time spheres on the ThreeJS bg
export default (type, material, world, offset) => {
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
  let radius = times[type]?.sphereSize;
  if (!radius) radius = 1;
  const geometry = new THREE.SphereBufferGeometry(radius, 32, 32);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x =
    Math.cos(Math.PI / 2 - (12 * 2 * Math.PI) / times[type].division) * times[type].distCenter;
  mesh.position.y =
    Math.sin(Math.PI / 2 - (12 * 2 * Math.PI) / times[type].division) * times[type].distCenter;
  mesh.name = 'timeSphere';
  const animation = () => {
    const date = new Date();
    mesh.position.x =
      Math.cos(Math.PI / 2 - (times[type].now(date) * 2 * Math.PI) / times[type].division) *
      times[type].distCenter;
    mesh.position.y =
      Math.sin(Math.PI / 2 - (times[type].now(date) * 2 * Math.PI) / times[type].division) *
      times[type].distCenter;
  };
  const bindedAnimation = animation.bind(null, mesh);
  world.animationQueue.push(bindedAnimation);

  return mesh;
};
