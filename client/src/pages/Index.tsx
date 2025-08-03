import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";
import tailsImage from "@assets/image_1754251704736.png";
import sonicImage from "@assets/image_1754250990366.png";
import knucklesImage from "@assets/image_1754251533990.png";
import shadowImage from "@assets/image_1754251612501.png";
import hamsterImage from "@assets/image_1754252295184.png";
import catHelmetImage from "@assets/image_1754252496917.png";
import topHatImage from "@assets/image_1754252573882.png";
import tailImage from "@assets/image_1754252708048.png";
import phainonImage from "@assets/image_1754252924669.png";
import mavuikaImage from "@assets/image_1754253005335.png";
import ororonImage from "@assets/image_1754253071028.png";
import neuvilletteImage from "@assets/image_1754253129742.png";

// Portfolio data
const portfolioItems = [
  {
    id: '1',
    title: 'Tails Buddy',
    type: 'hat' as const,
    description: 'Full Speed Ahead!',
    image: tailsImage,
  },
  {
    id: '2',
    title: 'Sonic Buddy',
    type: 'hat' as const,
    description: 'Have to go fast!',
    image: sonicImage,
  },
  {
    id: '3',
    title: 'Knuckles Buddy',
    type: 'hat' as const,
    description: 'How dare you attack me in my hour of sorrow!',
    image: knucklesImage,
  },
  {
    id: '4',
    title: 'Shadow Buddy',
    type: 'hat' as const,
    description: 'Poetry is an echo, asking a shadow to dance.',
    image: shadowImage,
  },
];

// Portfolio data for second row
const portfolioItems2 = [
  {
    id: '5',
    title: 'Chonki Valentines Hamster [GALAXY]',
    type: 'hat' as const,
    description: 'A Sweet Chonki Hamster Filled With Lots Of Love!',
    image: hamsterImage,
  },
  {
    id: '6',
    title: 'Galactic Celestical Cat Space Helemt [CLOSED]',
    type: 'hat' as const,
    description: 'Beautiful Space Helmet Shimmering Of Sunset and beauty of stars.',
    image: catHelmetImage,
  },
  {
    id: '7',
    title: 'Luxurious Top Hat',
    type: 'hat' as const,
    description: 'The Top Hat That Makes You Feel Like Royalty/Exclusive/Powerful/Evil',
    image: topHatImage,
  },
  {
    id: '8',
    title: 'Cute Cloudy Tail [Blue]',
    type: 'clothing' as const,
    description: 'Why not have a gorgeous pretty Tail?!',
    image: tailImage,
  },
];

// Portfolio data for third row
const portfolioItems3 = [
  {
    id: '9',
    title: 'Chibi Phainon The Deliverer',
    type: 'hat' as const,
    description: 'Hey there, partner! Must\'ve been tough for you lately... Sure enough, you\'ve been writing your own epic in Amphoreus. Let\'s keep on chasing that flame together, you and me!',
    image: phainonImage,
  },
  {
    id: '10',
    title: 'The Pyro Archon Mavuika',
    type: 'hat' as const,
    description: 'With the flames to guide us across time, we took a land shrouded in darkness, and used our own blood and tears to forge it into a home. Now, our journey continues, and a new chapter awaits. As the current Pyro Archon, allow me, Mavuika, to light your way forward.',
    image: mavuikaImage,
  },
  {
    id: '11',
    title: 'Veggie Fan Chibi Ororon',
    type: 'hat' as const,
    description: 'I just like to see what every seed grows up to be, so I end up with a lot of produce. As long as my vegetables wind up in the stomach of someone who enjoys them, that\'s all that matters.',
    image: ororonImage,
  },
  {
    id: '12',
    title: 'The Chief Justice Chibi Neuvillette',
    type: 'hat' as const,
    description: 'Though we live in a world of disarray, I shall undertake to restore all that has been broken.',
    image: neuvilletteImage,
  },
];



// Portfolio Item Component
interface PortfolioItemProps {
  id: string;
  title: string;
  type: 'hat' | 'clothing';
  description: string;
  image?: string;
  isHovered: boolean;
  index: number;
}

const PortfolioItem = ({ 
  title, 
  type, 
  description,
  image,
  isHovered,
  index 
}: PortfolioItemProps) => {
  return (
    <div className={`
      flex-shrink-0 w-80 h-96 card-cosmic rounded-2xl p-6 transition-all duration-500 
      ${isHovered ? 'scale-110 shadow-2xl' : 'scale-100'}
      hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]
    `}>
      {/* Image or Isometric View */}
      <div className="h-48 w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-secondary/30 to-secondary/10 relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
          {type === 'hat' ? (
            <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              {/* Hat - Isometric View */}
              <div className="relative transform" style={{ transform: 'rotateX(25deg) rotateY(15deg)' }}>
                {/* Hat brim */}
                <div className={`w-20 h-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full transform transition-colors duration-300 ${isHovered ? 'from-red-500 to-red-700' : ''}`} />
                {/* Hat cone */}
                <div className={`w-12 h-16 mx-auto -mt-2 bg-gradient-to-b from-red-500 to-red-900 transition-colors duration-300 ${isHovered ? 'from-red-400 to-red-800' : ''}`} 
                     style={{ clipPath: 'polygon(20% 100%, 80% 100%, 50% 0%)' }} />
                {/* Hat sparkles */}
                <div className="absolute top-2 left-1/2 w-1 h-1 bg-red-300 rounded-full animate-pulse" />
                <div className="absolute top-4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-500" />
              </div>
            </div>
          ) : (
            <div className={`relative transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
              {/* Clothing - Isometric Chest Armor */}
              <div className="relative transform" style={{ transform: 'rotateX(15deg) rotateY(-10deg)' }}>
                {/* Chest plate */}
                <div className={`w-16 h-20 bg-gradient-to-br from-gray-300 to-gray-600 rounded-lg transition-colors duration-300 ${isHovered ? 'from-gray-200 to-gray-500' : ''}`} />
                {/* Shoulder guards */}
                <div className={`absolute -top-2 -left-2 w-6 h-8 bg-gradient-to-br from-gray-400 to-gray-700 rounded-lg transition-colors duration-300 ${isHovered ? 'from-gray-300 to-gray-600' : ''}`} />
                <div className={`absolute -top-2 -right-2 w-6 h-8 bg-gradient-to-br from-gray-400 to-gray-700 rounded-lg transition-colors duration-300 ${isHovered ? 'from-gray-300 to-gray-600' : ''}`} />
                {/* Gem centerpiece */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse" />
              </div>
            </div>
          )}
          </div>
        )}
        {/* Item type indicator */}
        <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-black/20 px-2 py-1 rounded">
          {type === 'hat' ? 'HAT' : 'ARMOR'}
        </div>
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
const PortfolioGallery = ({ title = "Our Collection", description = "Discover our collection of unique and high-quality UGC assets.", items = portfolioItems }: { title?: string, description?: string, items?: typeof portfolioItems }) => {
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
        scrollContainer.scrollLeft += 2;
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
  const duplicatedItems = [...items, ...items];

  return (
    <section id={title === "Crimson Hotel" ? "portfolio" : undefined} className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">{title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
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
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-red-600/20 rounded-full animate-float delay-1000 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-700/20 rounded-full animate-cosmic-rotate blur-lg"></div>
      </div>

      <div className="text-center space-y-8 max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-full text-sm text-foreground">
          <Star className="w-4 h-4 text-red-400 animate-glow" />
          <span>The go to spot for UGCs</span>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent glow-text">Crimson</span>
            <br />
            <span className="text-white">Roses</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Developing premium UGC assets for our followers.

            Take a look at our collection!
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PortfolioGallery 
        title="Crimson Hotel" 
        description="Discover our collection of unique and high-quality UGC assets on the Crimson Hotel store!"
        items={portfolioItems}
      />
      <PortfolioGallery 
        title="Crimson's UGC Co." 
        description="Check out our featured collection of premium UGC items on the Crimson's UGC Co. store!"
        items={portfolioItems2}
      />
      <PortfolioGallery 
        title="Chibi Wonderland" 
        description="Explore our adorable collection of chibi characters and their stories."
        items={portfolioItems3}
      />
    </div>
  );
};

export default Index;
