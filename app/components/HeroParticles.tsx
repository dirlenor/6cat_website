"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type ParticleState = {
  positions: Float32Array;
  base: Float32Array;
  velocities: Float32Array;
  colors: Float32Array;
  flickerPhase: Float32Array;
  flickerSpeed: Float32Array;
  flickerAmp: Float32Array;
  count: number;
};

const TEXT = "6CAT";

function ParticleText() {
  const pointsRef = useRef<THREE.Points>(null);
  const dataRef = useRef<ParticleState | null>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const { size, camera } = useThree();
  const baseColorRef = useRef(new THREE.Color(195 / 255, 245 / 255, 60 / 255));
  const timeRef = useRef(0);

  useEffect(() => {
    const updateBaseColor = () => {
      const cssColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim();
      const parts = cssColor.split(/[ ,]+/).filter(Boolean).map(Number);
      if (parts.length >= 3 && parts.every((part) => Number.isFinite(part))) {
        baseColorRef.current.setRGB(
          parts[0] / 255,
          parts[1] / 255,
          parts[2] / 255
        );
      }
    };

    updateBaseColor();
    const id = window.setInterval(() => {
      const previous = baseColorRef.current.clone();
      updateBaseColor();
      if (dataRef.current && !baseColorRef.current.equals(previous)) {
        const { colors, count } = dataRef.current;
        const { r, g, b } = baseColorRef.current;
        for (let i = 0; i < count; i++) {
          const idx = i * 3;
          colors[idx] = r;
          colors[idx + 1] = g;
          colors[idx + 2] = b;
        }
        if (pointsRef.current) {
          pointsRef.current.geometry.attributes.color.needsUpdate = true;
        }
      }
    }, 800);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseRef.current.x = event.clientX - size.width / 2;
      mouseRef.current.y = -(event.clientY - size.height / 2);
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [size.width, size.height]);

  useEffect(() => {
    const ortho = camera as THREE.OrthographicCamera;
    ortho.left = -size.width / 2;
    ortho.right = size.width / 2;
    ortho.top = size.height / 2;
    ortho.bottom = -size.height / 2;
    ortho.near = -1000;
    ortho.far = 1000;
    ortho.updateProjectionMatrix();
  }, [camera, size.height, size.width]);

  useEffect(() => {
    const fontSize = Math.max(140, Math.min(size.width * 0.35, 520));
    const step = Math.max(7, Math.floor(fontSize / 75));

    const offscreen = document.createElement("canvas");
    const ctx = offscreen.getContext("2d");
    if (!ctx) return;

    ctx.font = `800 ${fontSize}px 'Space Grotesk', sans-serif`;
    const metrics = ctx.measureText(TEXT);
    const textWidth = Math.ceil(metrics.width);
    const textHeight = Math.ceil(fontSize * 1.05);
    offscreen.width = textWidth;
    offscreen.height = textHeight;

    ctx.clearRect(0, 0, textWidth, textHeight);
    ctx.font = `800 ${fontSize}px 'Space Grotesk', sans-serif`;
    ctx.fillStyle = "white";
    ctx.textBaseline = "top";
    ctx.fillText(TEXT, 0, 0);

    const image = ctx.getImageData(0, 0, textWidth, textHeight).data;
    const startY = Math.floor(textHeight / 2);
    const startX = Math.floor(-textWidth / 2);

    const points: { x: number; y: number }[] = [];

    for (let y = 0; y < textHeight; y += step) {
      for (let x = 0; x < textWidth; x += step) {
        const alpha = image[(y * textWidth + x) * 4 + 3];
        if (alpha > 20) {
          points.push({
            x: startX + x + (Math.random() - 0.5) * 1.5,
            y: startY - y + (Math.random() - 0.5) * 1.5,
          });
        }
      }
    }

    const count = points.length;
    const positions = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const flickerPhase = new Float32Array(count);
    const flickerSpeed = new Float32Array(count);
    const flickerAmp = new Float32Array(count);
    const { r, g, b } = baseColorRef.current;

    points.forEach((point, i) => {
      const idx = i * 3;
      flickerPhase[i] = Math.random() * Math.PI * 2;
      flickerSpeed[i] = 0.4 + Math.random() * 1.8;
      flickerAmp[i] = 0.6 + Math.random() * 0.8;
      base[idx] = point.x;
      base[idx + 1] = point.y;
      base[idx + 2] = 0;
      positions[idx] = point.x;
      positions[idx + 1] = point.y;
      positions[idx + 2] = 0;
      colors[idx] = r;
      colors[idx + 1] = g;
      colors[idx + 2] = b;
    });

    dataRef.current = {
      positions,
      base,
      velocities,
      colors,
      flickerPhase,
      flickerSpeed,
      flickerAmp,
      count,
    };

    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      pointsRef.current.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );
      pointsRef.current.geometry.computeBoundingSphere();
    }
  }, [size.width, size.height]);

  useFrame(() => {
    if (!pointsRef.current || !dataRef.current) return;
    const { positions, base, velocities, colors, count, flickerPhase, flickerSpeed, flickerAmp } =
      dataRef.current;
    const mouse = mouseRef.current;
    const radius = 150;
    const { r, g, b } = baseColorRef.current;
    timeRef.current += 0.02;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const targetX = base[idx];
      const targetY = base[idx + 1];

      const dx = positions[idx] - mouse.x;
      const dy = positions[idx + 1] - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        const force = (radius - dist) / radius;
        const angle = Math.atan2(dy, dx);
        velocities[idx] += Math.cos(angle) * force * 2.8;
        velocities[idx + 1] += Math.sin(angle) * force * 2.8;
      }

      velocities[idx] += (targetX - positions[idx]) * 0.03;
      velocities[idx + 1] += (targetY - positions[idx + 1]) * 0.03;
      velocities[idx] *= 0.88;
      velocities[idx + 1] *= 0.88;

      positions[idx] += velocities[idx];
      positions[idx + 1] += velocities[idx + 1];
    }

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const wave =
        0.5 + 0.5 * Math.sin(timeRef.current * flickerSpeed[i] + flickerPhase[i]);
      const sparkle = Math.pow(wave, 6);
      const intensity = 0.15 + sparkle * flickerAmp[i];
      colors[idx] = r * intensity;
      colors[idx + 1] = g * intensity;
      colors[idx + 2] = b * intensity;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry />
      <pointsMaterial
        size={2.8}
        color="white"
        transparent
        opacity={1}
        sizeAttenuation={false}
        depthWrite={false}
        depthTest={false}
        blending={THREE.AdditiveBlending}
        vertexColors
      />
    </points>
  );
}

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        orthographic
        dpr={[1, 2]}
        camera={{ position: [0, 0, 500], zoom: 1 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleText />
      </Canvas>
    </div>
  );
}
