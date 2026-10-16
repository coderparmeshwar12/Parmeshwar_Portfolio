import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * ThreeCupcake - A lightweight, interactive 3D cupcake
 * Built with pure Three.js procedural geometry for fast load times.
 * Responds to mouse tilt, floats gently, pauses when offscreen.
 */
export const ThreeCupcake = ({ size = 260, className = "" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Group for the entire cupcake
    const cupcakeGroup = new THREE.Group();
    scene.add(cupcakeGroup);

    // 1. PAPER CUP LINER (Pleated Cylinder)
    const cupGeo = new THREE.CylinderGeometry(1.25, 0.9, 1.5, 24, 1, false);
    const cupMat = new THREE.MeshStandardMaterial({
      color: 0x9d7ff5, // Lavender
      roughness: 0.55,
      metalness: 0.1,
      flatShading: true // Gives pleated origami effect
    });
    const cupMesh = new THREE.Mesh(cupGeo, cupMat);
    cupMesh.position.y = -0.55;
    cupMesh.castShadow = true;
    cupMesh.receiveShadow = true;
    cupcakeGroup.add(cupMesh);

    // 2. CAKE SPONGE (Golden baked layer)
    const spongeGeo = new THREE.CylinderGeometry(1.3, 1.2, 0.45, 24);
    const spongeMat = new THREE.MeshStandardMaterial({
      color: 0xd98a3b, // Golden brown biscuit
      roughness: 0.85,
      metalness: 0.05
    });
    const spongeMesh = new THREE.Mesh(spongeGeo, spongeMat);
    spongeMesh.position.y = 0.25;
    cupcakeGroup.add(spongeMesh);

    // 3. FROSTING SWIRLS (Pastel Pink Stacked Soft Swirls)
    const frostingMat = new THREE.MeshStandardMaterial({
      color: 0xff9ebb, // Pastel pink
      roughness: 0.25,
      metalness: 0.15
    });

    const frostingLightMat = new THREE.MeshStandardMaterial({
      color: 0xffb3c6, // Soft lighter pink
      roughness: 0.2,
      metalness: 0.18
    });

    // Swirl Tier 1 (Base swirl)
    const swirl1 = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.45, 16, 32), frostingMat);
    swirl1.rotation.x = Math.PI / 2;
    swirl1.position.y = 0.55;
    cupcakeGroup.add(swirl1);

    // Swirl Tier 2 (Middle swirl)
    const swirl2 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.4, 16, 28), frostingLightMat);
    swirl2.rotation.x = Math.PI / 2;
    swirl2.position.y = 0.95;
    cupcakeGroup.add(swirl2);

    // Swirl Peak (Top puff)
    const topPuff = new THREE.Mesh(new THREE.ConeGeometry(0.48, 0.6, 20), frostingLightMat);
    topPuff.position.y = 1.35;
    cupcakeGroup.add(topPuff);

    // 4. CHERRY ON TOP
    const cherryGeo = new THREE.SphereGeometry(0.3, 20, 20);
    const cherryMat = new THREE.MeshPhysicalMaterial({
      color: 0xef233c,
      roughness: 0.1,
      metalness: 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const cherry = new THREE.Mesh(cherryGeo, cherryMat);
    cherry.position.y = 1.78;
    cupcakeGroup.add(cherry);

    // Cherry stem
    const stemCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 1.95, 0),
      new THREE.Vector3(0.2, 2.25, 0.05),
      new THREE.Vector3(0.35, 2.35, 0)
    );
    const stemGeo = new THREE.TubeGeometry(stemCurve, 12, 0.035, 8, false);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x48bb78, roughness: 0.6 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    cupcakeGroup.add(stem);

    // 5. COLORFUL SPRINKLES
    const sprinkleColors = [0x67e8f9, 0xfde047, 0xc4b5fd, 0xffffff, 0x4ade80];
    const sprinkleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.18, 8);
    const sprinkleGroup = new THREE.Group();

    for (let i = 0; i < 28; i++) {
      const col = sprinkleColors[i % sprinkleColors.length];
      const sMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 });
      const sMesh = new THREE.Mesh(sprinkleGeo, sMat);

      // Distribute radially along frosting curves
      const angle = (i / 28) * Math.PI * 4;
      const radius = 0.35 + (i % 3) * 0.28;
      const yPos = 0.65 + (i / 28) * 0.7;

      sMesh.position.set(Math.cos(angle) * radius, yPos, Math.sin(angle) * radius);
      sMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      sprinkleGroup.add(sMesh);
    }
    cupcakeGroup.add(sprinkleGroup);

    // 6. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffe4e6, 2.0); // Soft warm pink tint
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xc4b5fd, 1.5); // Lavender rim light
    dirLight2.position.set(-5, -2, -3);
    scene.add(dirLight2);

    const cyanPoint = new THREE.PointLight(0x67e8f9, 1.0, 10);
    cyanPoint.position.set(2, -1, 3);
    scene.add(cyanPoint);

    // Mouse tracking for parallax tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.1;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Click bounce
    let bounceVelocity = 0;
    const handleClick = () => {
      bounceVelocity = 0.08;
    };
    container.addEventListener("click", handleClick);

    // Intersection observer to pause rendering when not in view (saving CPU)
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Gentle floating bob
      cupcakeGroup.position.y = Math.sin(elapsedTime * 1.8) * 0.12;

      // Click bounce reaction
      if (bounceVelocity > 0) {
        cupcakeGroup.position.y += bounceVelocity * 3;
        cupcakeGroup.rotation.y += bounceVelocity * 5;
        bounceVelocity *= 0.88;
        if (bounceVelocity < 0.001) bounceVelocity = 0;
      }

      // Smooth mouse follow
      targetRotationY = elapsedTime * 0.45 + mouseX * 0.6;
      targetRotationX = 0.15 + mouseY * -0.4;

      cupcakeGroup.rotation.y += (targetRotationY - cupcakeGroup.rotation.y) * 0.06;
      cupcakeGroup.rotation.x += (targetRotationX - cupcakeGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || size;
      const newH = container.clientHeight || size;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("click", handleClick);
      container.removeEventListener("touchmove", handleTouchMove);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cupGeo.dispose();
      cupMat.dispose();
      spongeGeo.dispose();
      spongeMat.dispose();
      frostingMat.dispose();
      frostingLightMat.dispose();
      cherryGeo.dispose();
      cherryMat.dispose();
      stemGeo.dispose();
      stemMat.dispose();
      sprinkleGeo.dispose();
    };
  }, [size]);

  return (
    <div
      ref={mountRef}
      className={`cupcake-canvas-container ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        cursor: "grab",
        userSelect: "none"
      }}
      title="Interactive 3D Cupcake — click or move cursor to interact!"
      aria-label="Interactive 3D Cupcake with pastel frosting and sprinkles"
    />
  );
};
