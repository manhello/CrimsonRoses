import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { ThreeDModel } from './ThreeDModel';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart } from 'lucide-react';

interface PortfolioItemProps {
  id: string;
  title: string;
  type: 'hat' | 'accessory' | 'tool' | 'clothing';
  description: string;
  price: number;
  likes: number;
  views: number;
  isHovered: boolean;
  index: number;
}

export const PortfolioItem = ({ 
  title, 
  type, 
  description, 
  price, 
  likes, 
  views, 
  isHovered,
  index 
}: PortfolioItemProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hat': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'accessory': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'tool': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'clothing': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className={`
      flex-shrink-0 w-80 h-96 card-cosmic rounded-2xl p-6 transition-all duration-500 
      ${isHovered ? 'scale-110 shadow-2xl' : 'scale-100'}
      hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]
    `}>
      {/* 3D Canvas */}
      <div className="h-48 w-full mb-4 rounded-xl overflow-hidden bg-secondary/20">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#8B5CF6" />
          
          <ThreeDModel type={type} isHovered={isHovered} index={index} />
          
          <Environment preset="studio" />
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
        <div className="flex items-center justify-between">
          <Badge className={getTypeColor(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <span className="text-accent font-bold text-lg">R$ {price}</span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};