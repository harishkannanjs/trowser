'use client';

import React, { useState } from 'react';
import { Shield, Brain, Palette, Zap } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'privacy',
      title: 'Privacy by Default',
      description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible with always-on zero-trace mode and automatic tracker blocking.',
      icon: <Shield className="w-20 h-20 md:w-24 md:h-24" />,
      color: 'from-blue-500 to-blue-700',
      glowColor: 'shadow-blue-500/50'
    },
    {
      id: 'ai',
      title: 'Smart Tab Navigation',
      description: 'Intuitive AI declutters your workspace automatically. Think of it as your second brain for browsing - intelligently prioritizes, organizes, and surfaces tabs based on your behavior.',
      icon: <Brain className="w-20 h-20 md:w-24 md:h-24" />,
      color: 'from-purple-500 to-purple-700',
      glowColor: 'shadow-purple-500/50'
    },
    {
      id: 'ui',
      title: 'Minimal Interface',
      description: 'Designed to disappear, so you can focus on what matters. No bloated menus, no distractions, just pure focus and intelligent performance that stays out of your way.',
      icon: <Palette className="w-20 h-20 md:w-24 md:h-24" />,
      color: 'from-green-500 to-green-700',
      glowColor: 'shadow-green-500/50'
    },
    {
      id: 'performance',
      title: 'Featherlight Build',
      description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware. Streamlined rendering engine optimized for real-world speed, not just benchmarks.',
      icon: <Zap className="w-20 h-20 md:w-24 md:h-24" />,
      color: 'from-orange-500 to-orange-700',
      glowColor: 'shadow-orange-500/50'
    }
  ];

  const handleTileHover = (featureId: string) => {
    setActiveFeature(featureId);
  };

  const handleTileLeave = () => {
    setActiveFeature(null);
  };

  return (
    <section id='features' className="mt-8 mb-6 md:mt-16 md:mb-8 md:mx-20 mx-8 flex flex-col items-center">
      <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-8">
        {/* Main Content Container */}
        <div className="w-full max-w-7xl mx-auto relative">

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="md:text-6xl text-3xl font-sans font-semibold tracking-tight text-white mb-4">
              Features
            </h1>
          </div>

          {/* Features Content - Centered */}
          <div className="flex items-center justify-center">

            {/* Feature Details Panel - Shows when hovering */}
            <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-300 ease-out will-change-transform ${
                    activeFeature === feature.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4 pointer-events-none'
                  }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center shadow-2xl shadow-white/5 transition-all duration-300 hover:border-white/30 hover:bg-white/10">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 mr-4 transition-transform duration-200">
                        {feature.icon}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white transition-colors duration-200">
                        {feature.title}
                      </h2>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6"></div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed transition-colors duration-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Floating Tiles - Shows when not hovering */}
              <div className={`transition-all duration-300 ${activeFeature ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div 
                  className="grid grid-cols-2 gap-4 md:gap-8 transform perspective-1000"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px) rotateY(-2deg) rotateX(2deg)'
                  }}
                >
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`relative w-32 h-32 md:w-48 md:h-48 cursor-pointer transition-all duration-200 ease-out will-change-transform hover:scale-105 hover:-translate-y-1`}
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animation: `tileFloat 3s ease-in-out infinite ${index * 0.5}s`
                      }}
                      onMouseEnter={() => handleTileHover(feature.id)}
                    >
                      {/* Glass Background with Glow */}
                      <div className="absolute -inset-1 bg-white/10 rounded-2xl blur opacity-20 transition-opacity duration-200"></div>

                      {/* Main Glass Tile */}
                      <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl will-change-transform transition-all duration-200 w-full h-full shadow-lg hover:border-white/25 hover:bg-white/8 hover:shadow-2xl hover:shadow-white/10">
                        {/* Tile Content */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-6">
                          <div className="text-white/90 transition-all duration-200 will-change-transform hover:text-white">
                            {feature.icon}
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;