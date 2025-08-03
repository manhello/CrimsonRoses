
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ThreeDModel } from './ThreeDModel';

interface PortfolioItemProps {
  id: string;
  title: string;
  type: 'hat' | 'clothing';
  description: string;
  isHovered: boolean;
  index: number;
}

export const PortfolioItem = ({ 
  title, 
  type, 
  description, 
  isHovered,
  index 
}: PortfolioItemProps) => {
  return (
    <div className={`
      flex-shrink-0 w-80 h-96 card-cosmic rounded-2xl p-6 transition-all duration-500 
      ${isHovered ? 'scale-110 shadow-2xl' : 'scale-100'}
      hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]
    `}>
      {/* 3D Canvas */}
      <div className="h-48 w-full mb-4 rounded-xl overflow-hidden bg-secondary/20">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          shadows
        >
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          
          <ThreeDModel type={type} isHovered={isHovered} index={index} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={!isHovered}
            autoRotateSpeed={2}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};
