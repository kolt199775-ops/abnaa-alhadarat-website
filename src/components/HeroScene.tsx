"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xdffaff, 12, 34);
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(6.4, 5.2, 9.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x0a3d78, 2.2));

    const key = new THREE.DirectionalLight(0xffffff, 2.7);
    key.position.set(4, 8, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0x20e7e0, 7, 18);
    fill.position.set(-5, 3, 3);
    scene.add(fill);

    const glassMaterial = new THREE.MeshPhysicalMaterial({ color: 0x16c8df, metalness: 0.26, roughness: 0.16, transmission: 0.2, transparent: true, opacity: 0.78, thickness: 0.55 });
    const darkGlass = new THREE.MeshPhysicalMaterial({ color: 0x0757b8, metalness: 0.45, roughness: 0.2, transparent: true, opacity: 0.88 });
    const baseMaterial = new THREE.MeshPhysicalMaterial({ color: 0xe9fbff, metalness: 0.2, roughness: 0.38 });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 5.5, 0.22, 7), baseMaterial);
    base.position.y = -1.5;
    base.rotation.y = Math.PI / 7;
    group.add(base);

    const grid = new THREE.GridHelper(10, 22, 0x22d8e2, 0x8bdff0);
    grid.position.y = -1.36;
    group.add(grid);

    [1.2, 2.6, 4.2, 5.7, 4.7, 3.4, 2.2, 3.1, 4.0, 2.8, 1.8].forEach((height, index) => {
      const building = new THREE.Mesh(new THREE.BoxGeometry(index % 3 === 0 ? 0.58 : 0.46, height, index % 2 === 0 ? 0.58 : 0.76), index % 4 === 0 ? darkGlass : glassMaterial);
      building.position.set((index - 5) * 0.72, -1.25 + height / 2, Math.sin(index) * 0.82);
      group.add(building);
      const line = new THREE.LineSegments(new THREE.EdgesGeometry(building.geometry), new THREE.LineBasicMaterial({ color: 0xd7fbff, transparent: true, opacity: 0.7 }));
      building.add(line);
    });

    const panelMaterial = new THREE.MeshPhysicalMaterial({ color: 0x58f0ef, metalness: 0.2, roughness: 0.08, transparent: true, opacity: 0.48, side: THREE.DoubleSide });
    for (let i = 0; i < 7; i += 1) {
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.58), panelMaterial);
      panel.position.set(Math.cos(i) * 4.2, 1.2 + Math.sin(i * 1.7), Math.sin(i) * 3.5);
      panel.rotation.set(0.25, i * 0.82, -0.08);
      group.add(panel);
    }

    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.3, 0.012, 10, 120), new THREE.MeshBasicMaterial({ color: 0x25bdf2, transparent: true, opacity: 0.55 }));
    ring.position.y = -1.18;
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    let frame = 0;
    let raf = 0;
    const animate = () => {
      frame += 0.01;
      group.rotation.y = Math.sin(frame * 0.7) * 0.12 - 0.15;
      group.position.y = Math.sin(frame) * 0.08;
      ring.rotation.z += 0.004;
      camera.lookAt(0, 1.1, 0);
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(animate);
    };

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden />;
}
