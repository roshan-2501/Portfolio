import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

interface FloatingIconProps {
  position: [number, number, number];
  icon: string;
  color: string;
  speed?: number;
}

const FloatingIcon = ({ position, icon, color, speed = 1 }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y += 0.01 * speed;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <group position={position}>
        <Center>
          <Text3D
            ref={meshRef}
            font="/fonts/helvetiker_regular.typeface.json"
            size={0.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {icon}
            <meshStandardMaterial color={color} />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
};

export default FloatingIcon;