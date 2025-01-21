"use client"; // For client-side rendering in Next.js
import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function GlitchEffect({ imageSrc }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, planeMesh;
    let clock;

    const ANIMATION_CONFIG = {
      glitchIntensityMod: 0.05, // Subtle glitch effect
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
      uniform float time;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        vec4 baseState = texture2D(tDiffuse, uv);

        if (glitchIntensity > 0.0) {
            float segment = floor(uv.y * 12.0); 
            float randomValue = fract(sin(segment * 12345.6789 + time) * 43758.5453); 
            vec2 offset = vec2(randomValue * 0.01, 0.0) * glitchIntensity; // Subtle offset

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
      const { offsetWidth, offsetHeight } = containerRef.current;

      // Match camera aspect ratio to container
      camera = new THREE.PerspectiveCamera(80, offsetWidth / offsetHeight, 0.01, 10);
      camera.position.z = 1;

      scene = new THREE.Scene();

      const shaderUniforms = {
        tDiffuse: { value: texture },
        glitchIntensity: { value: ANIMATION_CONFIG.glitchIntensityMod },
        time: { value: 0.0 },
      };

      // Adjust PlaneGeometry proportions based on texture and container aspect ratio
      const imageAspect = texture.image.width / texture.image.height;
      const containerAspect = offsetWidth / offsetHeight;

      const geometry =
        imageAspect > containerAspect
          ? new THREE.PlaneGeometry(2, 2 / containerAspect * imageAspect)
          : new THREE.PlaneGeometry(2 * containerAspect / imageAspect, 2);

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
      renderer.setSize(offsetWidth, offsetHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      containerRef.current.appendChild(renderer.domElement);

      clock = new THREE.Clock();

      function animate() {
        shaderUniforms.time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
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
      if (renderer) renderer.dispose();
      if (planeMesh) {
        planeMesh.geometry.dispose();
        planeMesh.material.dispose();
      }
    };
  }, [imageSrc]);

  return <div ref={containerRef} className="w-full h-full grayscale lg:hidden "></div>;
}
