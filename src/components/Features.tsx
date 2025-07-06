
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
      icon: <Shield className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-700',
      glowColor: 'shadow-blue-500/50'
    },
    {
      id: 'ai',
      title: 'Smart Tab Navigation',
      description: 'Intuitive AI declutters your workspace automatically. Think of it as your second brain for browsing - intelligently prioritizes, organizes, and surfaces tabs based on your behavior.',
      icon: <Brain className="w-16 h-16" />,
      color: 'from-purple-500 to-purple-700',
      glowColor: 'shadow-purple-500/50'
    },
    {
      id: 'ui',
      title: 'Minimal Interface',
      description: 'Designed to disappear, so you can focus on what matters. No bloated menus, no distractions, just pure focus and intelligent performance that stays out of your way.',
      icon: <Palette className="w-16 h-16" />,
      color: 'from-green-500 to-green-700',
      glowColor: 'shadow-green-500/50'
    },
    {
      id: 'performance',
      title: 'Featherlight Build',
      description: 'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware. Streamlined rendering engine optimized for real-world speed, not just benchmarks.',
      icon: <Zap className="w-16 h-16" />,
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
    <section id='features' className="md:mt-44 md:mb-24 my-16 md:mx-20 mx-8 flex flex-col items-center">
      <div className="relative w-full h-screen flex items-center justify-center px-8">
        {/* Main Content Container */}
        <div className="w-full max-w-7xl mx-auto relative">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="md:text-6xl text-3xl font-sans font-semibold tracking-tight text-white mb-4">
              Features
            </h1>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Feature Details Panel */}
            <div className="relative h-96 flex items-center justify-center">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 transition-all duration-300 ease-out will-change-transform ${
                    activeFeature === feature.id 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full flex flex-col justify-center shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color} mr-4 transition-transform duration-200`}>
                        {feature.icon}
                      </div>
                      <h2 className="text-3xl font-semibold text-white transition-colors duration-200">
                        {feature.title}
                      </h2>
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6"></div>
                    <p className="text-gray-300 text-lg leading-relaxed transition-colors duration-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Default State */}
              {!activeFeature && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-700/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-400 text-lg">
                      Hover over tiles to explore features
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Tiles */}
            <div className="relative h-96 flex items-center justify-center">
              <div 
                className="grid grid-cols-2 gap-6 transform perspective-1000 rotate-y-12 scale-110"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1.1)'
                }}
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`relative w-40 h-40 cursor-pointer transition-all duration-200 ease-out will-change-transform ${
                      activeFeature === feature.id ? 'z-20 scale-110 -translate-y-1' : 'z-10 hover:scale-105 hover:-translate-y-1'
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animation: `tileFloat 3s ease-in-out infinite ${index * 0.5}s`
                    }}
                    onMouseEnter={() => handleTileHover(feature.id)}
                    onMouseLeave={handleTileLeave}
                  >
                    {/* Tile Background */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} will-change-transform transition-all duration-200 ${
                      activeFeature === feature.id ? `shadow-2xl ${feature.glowColor}` : 'shadow-lg'
                    }`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-md will-change-auto transition-opacity duration-200 ${
                        activeFeature === feature.id ? 'opacity-60' : 'opacity-0'
                      }`}></div>
                    </div>
                    
                    {/* Tile Content */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                      <div className={`text-white transition-transform duration-200 will-change-transform ${
                        activeFeature === feature.id ? 'scale-105' : ''
                      }`}>
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-white/5 transition-opacity duration-200 ${
                      activeFeature === feature.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Instruction */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center text-gray-400 text-sm">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
