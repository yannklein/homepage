import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import porcelainImg from './assets/matcap-porcelain-white.jpg';

const LogoIcosahedron = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const size = 50;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 10);
    camera.position.z = 0.25;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      porcelainImg,
      (porcelain) => {
        porcelain.colorSpace = THREE.SRGBColorSpace;
        porcelain.minFilter = THREE.LinearMipMapLinearFilter;
        porcelain.magFilter = THREE.LinearFilter;

        const material = new THREE.MeshMatcapMaterial({
          side: THREE.DoubleSide,
          matcap: porcelain,
          color: 0x888888,
        });

        const geometry = new THREE.IcosahedronGeometry(0.1, 0);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        meshRef.current = mesh;
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);

      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      if (meshRef.current) {
        meshRef.current.geometry.dispose();
        if (Array.isArray(meshRef.current.material)) {
          meshRef.current.material.forEach(mat => mat.dispose());
        } else {
          meshRef.current.material.dispose();
        }
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '50px', height: '50px' }} />;
};

export default LogoIcosahedron;
