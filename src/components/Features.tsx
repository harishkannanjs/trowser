'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Palette, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FlipCardProps {
  frontContent: {
    title: string;
    icon: React.ReactNode;
  };
  backContent: {
    title: string;
    description: string;
  };
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const faceClassNames = cn(
    "absolute w-full h-full flex flex-col items-center justify-center p-6",
    "rounded-2xl border border-white/20 overflow-hidden backdrop-blur-xl",
    "bg-white/5 hover:bg-white/10 transition-all duration-300"
  );

  return (
    <div
      ref={cardRef}
      className={cn("w-full h-80 perspective-1000 cursor-pointer relative rounded-2xl", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative rounded-2xl preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Face */}
        <div className={cn(faceClassNames, "backface-hidden")}>
          <div className="mb-4 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            {frontContent.icon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            {frontContent.title}
          </h3>
        </div>

        {/* Back Face */}
        <div 
          className={cn(faceClassNames, "backface-hidden")} 
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white text-center">
            {backContent.title}
          </h3>
          <p className="text-sm md:text-base text-gray-300 text-center leading-relaxed">
            {backContent.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'privacy',
      title: 'Privacy by Default',
      description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible with always-on zero-trace mode and automatic tracker blocking.',
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
    },
    {
      id: 'ai',
      title: 'Smart Tab Navigation',
      description: 'Intuitive AI declutters your workspace automatically. Think of it as your second brain for browsing - intelligently prioritizes, organizes, and surfaces tabs based on your behavior.',
      icon: <Brain className="w-8 h-8 md:w-10 md:h-10 text-white" />
    },
    {
      id: 'ui',
      title: 'Minimal Interface',
      description: 'Designed to disappear, so you can focus on what matters. No bloated menus, no distractions, just pure focus and intelligent performance that stays out of your way.',
      icon: <Palette className="w-8 h-8 md:w-10 md:h-10 text-white" />
    },
    {
      id: 'performance',
      title: 'Featherlight Build',
      description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware. Streamlined rendering engine optimized for real-world speed, not just benchmarks.',
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
    }
  ];

  return (
    <section id='features' className="mt-20 mb-12 md:mt-20 md:mb-16 md:mx-20 mx-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="md:text-6xl text-3xl font-sans font-semibold tracking-tight text-white mb-4">
            Features
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FlipCard
              key={feature.id}
              frontContent={{
                title: feature.title,
                icon: feature.icon
              }}
              backContent={{
                title: feature.title,
                description: feature.description
              }}
              className="will-change-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;