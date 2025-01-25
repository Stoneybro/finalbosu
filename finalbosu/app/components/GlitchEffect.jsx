"use client"; // For client-side rendering in Next.js
import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function GlitchEffect({ imageSrc }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, planeMesh;
    let timeElapsed = 0;

    const ANIMATION_CONFIG = {
      updateFrequency: 0.05,
      glitchIntensityMod: 0.3, // Slightly increased intensity
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform sampler2D tDiffuse;
      uniform float glitchIntensity;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec4 baseState = texture2D(tDiffuse, uv);

        if (glitchIntensity > 0.0) {
            float segment = floor(uv.y * 12.0); 
            float randomValue = fract(sin(segment * 12345.6789 + glitchIntensity) * 43758.5453); 
            vec2 offset = vec2(randomValue * 0.02, 0.0) * glitchIntensity; // Slightly larger offset

            vec4 redGlitch = texture2D(tDiffuse, uv + offset);
            vec4 greenGlitch = texture2D(tDiffuse, uv - offset);
            vec4 blueGlitch = texture2D(tDiffuse, uv);

            if (mod(segment, 3.0) == 0.0) {
                gl_FragColor = vec4(redGlitch.r, greenGlitch.g, baseState.b, 1.0);
            } else if (mod(segment, 3.0) == 1.0) {
                gl_FragColor = vec4(baseState.r, greenGlitch.g, blueGlitch.b, 1.0);
            } else {
                gl_FragColor = vec4(redGlitch.r, baseState.g, blueGlitch.b, 1.0);
            }
        } else {
            gl_FragColor = baseState; 
        }
      }
    `;

    function initializeScene(texture) {
      camera = new THREE.PerspectiveCamera(80, 1, 0.01, 10);
      camera.position.z = 1;

      scene = new THREE.Scene();

      const shaderUniforms = {
        tDiffuse: { value: texture },
        glitchIntensity: { value: 0.0 },
      };

      const geometry = new THREE.PlaneGeometry(2, 2);
      planeMesh = new THREE.Mesh(
        geometry,
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader,
        })
      );

      scene.add(planeMesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      containerRef.current.appendChild(renderer.domElement);

      function animate() {
        requestAnimationFrame(animate);

        // Update glitch intensity over time
        timeElapsed += ANIMATION_CONFIG.updateFrequency;
        shaderUniforms.glitchIntensity.value = Math.abs(Math.sin(timeElapsed)) * ANIMATION_CONFIG.glitchIntensityMod;

        renderer.render(scene, camera);
      }

      animate();
    }

    const loader = new THREE.TextureLoader();
    loader.load(imageSrc, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      initializeScene(texture);
    });

    return () => {
      renderer.dispose();
      planeMesh.geometry.dispose();
      planeMesh.material.dispose();
    };
  }, [imageSrc]);

  return <div ref={containerRef} className="w-full h-full grayscale hidden lg:block"></div>;
}
