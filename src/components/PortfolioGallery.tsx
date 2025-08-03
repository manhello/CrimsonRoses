
import { useState, useEffect, useRef } from 'react';
import { PortfolioItem } from './PortfolioItem';

// Updated portfolio data - only hats and clothing
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
    </section>
  );
};
