import './IntroPopup.css';
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { initThree, ThreeJSContext } from './scripts/three/initThree';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Font, FontLoader } from 'three/addons/loaders/FontLoader.js';
import porcelainImg from './assets/matcap-porcelain-white.jpg';

let textureLoaded = false;
let fontLoaded = false;

const IntroPopup = ({
  setIntroPopupLoaded,
  setPortFolioVisible,
  portFolioVisible,
  setIsIntro,
}: {
  setIntroPopupLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setPortFolioVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsIntro: React.Dispatch<React.SetStateAction<boolean>>;
  portFolioVisible: boolean;
}) => {
  const ipElement = useRef<HTMLDivElement>(null);
  const popupScene = useRef<ThreeJSContext>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!ipElement.current || isInitialized.current) return;

    isInitialized.current = true;
    popupScene.current = initThree('introWorld', ipElement.current);
    addIntroPopup();
  }, []);

  const addIntroPopup = () => {
    // Intro loading manager
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      setIntroPopupLoaded(true);
    };
    // Create invisible wall
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      colorWrite: false,
    });
    const wall = new THREE.Mesh(geometry, material);
    wall.renderOrder = 1;
    wall.position.z = -0.9;
    wall.name = 'invisibleWall';
    if (!popupScene.current) return;
    popupScene.current.scene.add(wall);
    createIsocahedron(manager);
  };

  const createIsocahedron = (manager: THREE.LoadingManager) => {
    const isocahedron = new THREE.Group();
    isocahedron.name = 'isocahedronGroup';
    // Create the isocahedron
    {
      const textureLoader = new THREE.TextureLoader(manager);
      textureLoader.load(porcelainImg, (porcelain) => {
        if (textureLoaded) {
          return;
        } else {
          textureLoaded = true;
        }
        porcelain.colorSpace = THREE.SRGBColorSpace;
        porcelain.minFilter = THREE.LinearMipMapLinearFilter;
        porcelain.magFilter = THREE.LinearFilter;
        const geometry = new THREE.IcosahedronGeometry(0.4, 0);
        const material = new THREE.MeshMatcapMaterial({ matcap: porcelain, color: 0xaaaaaa });
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
      const loader = new FontLoader();
      let geometry;
      const size = 0.022;
      // const textLength = text.length / 10;
      // const textHeight = size / 10;
      loader.load(
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/optimer_regular.typeface.json',
        (font: Font) => {
          if (fontLoaded) {
            return;
          } else {
            fontLoaded = true;
          }
          geometry = new TextGeometry(text, {
            font,
            size,
            depth: -0.08 * size,
            curveSegments: 6,
          });
          const materials = [
            new THREE.MeshBasicMaterial({ color: 0x222222 }),
            new THREE.MeshBasicMaterial({ color: 0xcccccc }),
          ];
          const mesh = new THREE.Mesh(geometry, materials);
          mesh.position.z = 0.32;

          mesh.geometry.computeBoundingBox();
          if (!mesh.geometry.boundingBox) return;
          const textLength = Math.abs(
            mesh.geometry.boundingBox.max.x - mesh.geometry.boundingBox.min.x,
          );
          const textHeight = Math.abs(
            mesh.geometry.boundingBox.max.y - mesh.geometry.boundingBox.min.y,
          );
          mesh.position.x -= textLength / 2;
          mesh.position.y += textHeight / 2;
          mesh.rotation.x -= Math.PI * 0.015;
          mesh.name = 'isocahedron';
          isocahedron.add(mesh);
        },
      );
    }
    isocahedron.renderOrder = 2;
    isocahedron.position.z = 0;
    if (!popupScene.current) return;
    popupScene.current.scene.add(isocahedron);

    const animation = (isocahedron: THREE.Group) => {
      isocahedron.rotation.x += 0.01;
      isocahedron.rotation.y += 0.02;
    };

    // "Intro closing" event trigger when click the intro isocahedron
    const closeIntro = (event: MouseEvent) => {
      // Make the isocahedron rotate
      const introPopup = event.currentTarget as HTMLElement;
      if (!introPopup) return;

      // Remove the event listener immediately to prevent multiple triggers
      ipElement.current?.removeEventListener('click', closeIntro);

      const bindedAnimation = animation.bind(null, isocahedron);
      popupScene.current?.animationQueue.push(bindedAnimation);
      // Make the isocahedron progressively move backward
      const intervId = setInterval(() => {
        isocahedron.position.z -= 0.01;
        // When the isocahedron totally disappear beneath the invisible wall
        // make it vanish
        if (isocahedron.position.z <= -0.6) {
          // Make the homepage cards visible
          if (!portFolioVisible) setPortFolioVisible(true);
          setIsIntro(false);
        }
        if (isocahedron.position.z <= -1) {
          introPopup.classList.add('intro-popup-hidden');
          popupScene.current?.scene.remove(isocahedron);
          clearInterval(intervId);
        }
      }, 30);
    };

    ipElement.current?.addEventListener('click', closeIntro, { once: true });
  };

  return <div className="intro-popup" ref={ipElement}></div>;
};

export default IntroPopup;
