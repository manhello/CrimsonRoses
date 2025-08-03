import { useState, useEffect, useRef } from 'react';
import { PortfolioItem } from './PortfolioItem';

// Sample portfolio data
const portfolioItems = [
  {
    id: '1',
    title: 'Cosmic Wizard Hat',
    type: 'hat' as const,
    description: 'A mystical hat that glows with cosmic energy, perfect for magical adventures.',
    price: 150,
    likes: 324,
    views: 1250,
  },
  {
    id: '2',
    title: 'Neon Ring Accessory',
    type: 'accessory' as const,
    description: 'Futuristic ring accessory with pulsating neon lights.',
    price: 75,
    likes: 156,
    views: 890,
  },
  {
    id: '3',
    title: 'Lightning Sword',
    type: 'tool' as const,
    description: 'Electrifying sword that crackles with lightning energy.',
    price: 200,
    likes: 512,
    views: 2340,
  },
  {
    id: '4',
    title: 'Emerald Armor',
    type: 'clothing' as const,
    description: 'Protective armor crafted from pure emerald crystals.',
    price: 300,
    likes: 445,
    views: 1890,
  },
  {
    id: '5',
    title: 'Shadow Mask',
    type: 'hat' as const,
    description: 'Mysterious mask that conceals the wearer in shadows.',
    price: 120,
    likes: 267,
    views: 1100,
  },
  {
    id: '6',
    title: 'Crystal Wings',
    type: 'accessory' as const,
    description: 'Translucent wings that shimmer like crystal in the light.',
    price: 180,
    likes: 389,
    views: 1560,
  },
  {
    id: '7',
    title: 'Plasma Blaster',
    type: 'tool' as const,
    description: 'High-tech weapon that fires concentrated plasma bolts.',
    price: 250,
    likes: 623,
    views: 2800,
  },
  {
    id: '8',
    title: 'Royal Cape',
    type: 'clothing' as const,
    description: 'Elegant cape fit for royalty, with golden trim.',
    price: 220,
    likes: 334,
    views: 1420,
  },
];

export const PortfolioGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 50);
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
    <section id="portfolio" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
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

      {/* Stats section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">50+</div>
            <div className="text-muted-foreground">UGC Items Created</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">10K+</div>
            <div className="text-muted-foreground">Total Sales</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gradient">95%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};