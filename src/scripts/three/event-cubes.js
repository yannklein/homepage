import * as THREE from 'three';

const formatEvents = eventObject => {
  // console.log(eventObject);
  return eventObject.map(event => {
    return {
      distCenter: 0.55 - Math.random() / 5,
      sphereSize: 0.04 / ((event.remainingDays * 0.1) + 1),
      initOffset: Math.random() * 10,
      eventDetails: event.eventDetails
    };
  });
};

export default (eventObject, material, world, bgMeshes) => {
  const spheresConfig = formatEvents(eventObject);
  const group = new THREE.Group();
  group.name = 'eventCubesGroup';
  spheresConfig.forEach(config => {
    const geometry = new THREE.BoxBufferGeometry(
      config.sphereSize || 0.03,
      config.sphereSize || 0.03,
      config.sphereSize || 0.03
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
    mesh.name = 'eventCubes';
    mesh.eventDetails = config.eventDetails;
    const bindedAnimation = animation.bind(null, mesh);
    world.animationQueue.push(bindedAnimation);
    group.add(mesh);
  });
  bgMeshes.add(group);
};
