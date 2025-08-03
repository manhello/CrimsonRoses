import { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";

// Portfolio data
const portfolioItems = [
  {
    id: '1',
    title: 'Cosmic Wizard Hat',
    type: 'hat' as const,
    description: 'A mystical hat that glows with cosmic energy, perfect for magical adventures.',
  },
  {
    id: '4',
    title: 'Emerald Armor',
    type: 'clothing' as const,
    description: 'Protective armor crafted from pure emerald crystals.',
  },
  {
    id: '5',
    title: 'Shadow Mask',
    type: 'hat' as const,
    description: 'Mysterious mask that conceals the wearer in shadows.',
  },
  {
    id: '8',
    title: 'Royal Cape',
    type: 'clothing' as const,
    description: 'Elegant cape fit for royalty, with golden trim.',
  },
];

// 3D Model Component
const ThreeDModel = ({ type, isHovered, index }: { type: 'hat' | 'clothing', isHovered: boolean, index: number }) => {
  const meshRef = useRef<any>();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = 0;
      meshRef.current.rotation.y = index * 0.5;
    }
  }, [index]);

  const getGeometry = () => {
    if (type === 'hat') {
      return (
        <>
          <coneGeometry args={[1, 2, 8]} />
          <meshStandardMaterial color={isHovered ? "#8B5CF6" : "#6366F1"} />
        </>
      );
    } else {
      return (
        <>
          <boxGeometry args={[1.5, 2, 0.3]} />
          <meshStandardMaterial color={isHovered ? "#10B981" : "#059669"} />
        </>
      );
    }
  };

  return (
    <mesh 
      ref={meshRef}
      scale={isHovered ? 1.2 : 1}
      rotation={[0, 0, 0]}
    >
      {getGeometry()}
    </mesh>
  );
};

// Portfolio Item Component
interface PortfolioItemProps {
  id: string;
  title: string;
  type: 'hat' | 'clothing';
  description: string;
  isHovered: boolean;
  index: number;
}

const PortfolioItem = ({ 
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

// Portfolio Gallery Component
const PortfolioGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth)) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setIsPaused(false);
  };

  // Duplicate items for seamless loop
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <section id="portfolio" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of premium Roblox UGC items, crafted with precision and creativity.
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 px-8 overflow-x-hidden"
        style={{ width: 'calc(100% + 400px)' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className="transition-transform duration-300"
          >
            <PortfolioItem
              {...item}
              isHovered={hoveredItem === item.id}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// Hero Component
const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent/20 rounded-full animate-float delay-1000 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full animate-cosmic-rotate blur-lg"></div>
      </div>

      <div className="text-center space-y-8 max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm text-primary-foreground">
          <Star className="w-4 h-4 text-accent animate-glow" />
          <span>Professional Roblox UGC Creators</span>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-gradient glow-text">UGC</span>
            <br />
            <span className="text-foreground">Masters</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting premium Roblox User Generated Content that brings imagination to life. 
            Explore our collection of meticulously designed 3D assets.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center pt-8">
          <Button 
            onClick={scrollToPortfolio}
            className="btn-neon px-8 py-6 text-lg rounded-full"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-accent" />
          </div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(192,132,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PortfolioGallery />
    </div>
  );
};

export default Index;
