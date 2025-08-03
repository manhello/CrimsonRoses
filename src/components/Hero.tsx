import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";

export const Hero = () => {
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            onClick={scrollToPortfolio}
            className="btn-neon px-8 py-6 text-lg rounded-full"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
          <Button 
            variant="secondary" 
            className="px-8 py-6 text-lg rounded-full card-cosmic border-primary/20"
            size="lg"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16">
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