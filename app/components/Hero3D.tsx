"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTexture, Float } from "@react-three/drei";

const ORBIT_DATA = [
  {
    radius: 1,
    speed: 0.3,
    logos: ["/icons/autocad.png", "/icons/Sketchup.png"],
  },
  {
    radius: 2.25,
    speed: 0.2,
    logos: ["/icons/d5.png", "/icons/Photoshop.png", "/icons/vray.png"],
  },
  {
    radius: 3.5,
    speed: 0.25,
    logos: [
      "/icons/Lumion.png",
      "/icons/enscape.png",
      "/icons/3dmax.png",
      "/icons/blender.png",
    ],
  },
];

function Cube({
  texturePath,
  radius,
  speed,
  startAngle,
}: {
  texturePath: string;
  radius: number;
  speed: number;
  startAngle: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  const loadedTexture = useTexture(texturePath);

  const texture = useMemo(() => {
    const t = loadedTexture.clone();
    t.colorSpace = THREE.SRGBColorSpace;
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.needsUpdate = true;
    return t;
  }, [loadedTexture]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      const currentAngle = t * speed + startAngle;

      meshRef.current.position.x = Math.cos(currentAngle) * radius;
      meshRef.current.position.y = Math.sin(currentAngle) * radius;
      meshRef.current.position.z = Math.sin(t * 0.5 + startAngle) * 0.5;

      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;

      const zOffset = meshRef.current.position.z;
      const scale = 1 - zOffset * 0.15;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={meshRef}>
        {/* 1. Inner Solid Box - White / Light Gray background */}
        <mesh>
          <boxGeometry args={[0.78, 0.78, 0.78]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.0}
          />
        </mesh>

        {/* 2. Outer Icon Overlay - Clean transparent rendering */}
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            map={texture}
            transparent
            depthWrite={false}
            roughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 2, 10], fov: 50 }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.8}
          color="#ffffff"
        />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.4}
          color="#bf0a30"
        />

        <fog attach="fog" args={["#dcdcdc", 10, 20]} />

        <group rotation={[0, 0, 0]}>
          {ORBIT_DATA.map((orbit) =>
            orbit.logos.map((path, index) => (
              <Cube
                key={path}
                texturePath={path}
                radius={orbit.radius}
                speed={orbit.speed}
                startAngle={(index / orbit.logos.length) * Math.PI * 2}
              />
            )),
          )}
        </group>

        {ORBIT_DATA.map((orbit, i) => (
          <mesh key={i}>
            <ringGeometry
              args={[orbit.radius - 0.008, orbit.radius + 0.008, 128]}
            />
            <meshBasicMaterial color="#1e1e1e" transparent opacity={0.15} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}
