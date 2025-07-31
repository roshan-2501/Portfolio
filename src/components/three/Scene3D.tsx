import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import FloatingIcon from "./FloatingIcon";

const Scene3D = () => {
  const icons = [
    { position: [-2, 1, 0] as [number, number, number], icon: "⚛", color: "#63B3ED" },
    { position: [2, -1, -1] as [number, number, number], icon: "⚡", color: "#F687B3" },
    { position: [0, 2, -2] as [number, number, number], icon: "🚀", color: "#68D391" },
    { position: [-1, -2, 1] as [number, number, number], icon: "💻", color: "#B794F6" },
  ];

  return (
    <div className="w-full h-screen absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          {icons.map((icon, index) => (
            <FloatingIcon
              key={index}
              position={icon.position}
              icon={icon.icon}
              color={icon.color}
              speed={0.5 + index * 0.2}
            />
          ))}
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;