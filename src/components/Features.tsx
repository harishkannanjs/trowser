'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Brain, Palette, Zap } from 'lucide-react';

// Improved window size hook with better SSR handling
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1024, // Default values
    height: 650,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Features = () => {
  const gradientSecondary =
    'radial-gradient(100% 100% at 0% 0%, rgb(255, 255, 255) 0%, rgb(235, 235, 244) 100%)';

  const sectionsData = [
    {
      id: 'privacy',
      smallIcon: <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: 'Privacy by Default',
      description: 'Auto-destroy ads/trackers, encrypted DNS, and zero data logging. You are digitally invisible with always-on zero-trace mode and automatic tracker blocking.',
      largeIcon: <Shield className="w-96 h-96 md:w-[600px] md:h-[600px] text-white" />,
      contentPosition: 'left',
      titleGradient: gradientSecondary,
      largeSymbolGradient:
        'linear-gradient(315deg, rgba(140, 140, 217, 0.3) 5%, rgba(235, 71, 96, 0.3) 95%)',
    },
    {
      id: 'ai',
      smallIcon: <Brain className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: 'Smart Tab Navigation',
      description:
        'Intuitive AI declutters your workspace automatically. Think of it as your second brain for browsing - intelligently prioritizes, organizes, and surfaces tabs based on your behavior.',
      largeIcon: <Brain className="w-96 h-96 md:w-[600px] md:h-[600px] text-white" />,
      contentPosition: 'right',
      titleGradient: gradientSecondary,
      largeSymbolGradient:
        'linear-gradient(315deg, rgba(255, 255, 255, 0.3) 0%, rgba(235, 235, 244, 0.3) 100%)',
    },
    {
      id: 'ui',
      smallIcon: <Palette className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: 'Minimal Interface',
      description:
        'Designed to disappear, so you can focus on what matters. No bloated menus, no distractions, just pure focus and intelligent performance that stays out of your way.',
      largeIcon: <Palette className="w-96 h-96 md:w-[600px] md:h-[600px] text-white" />,
      contentPosition: 'left',
      titleGradient: gradientSecondary,
      largeSymbolGradient:
        'linear-gradient(315deg, rgba(140, 140, 217, 0.3) 5%, rgba(235, 71, 96, 0.3) 95%)',
    },
    {
      id: 'performance',
      smallIcon: <Zap className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: 'Featherlight Build',
      description:
        'Loads pages in 1.2s, uses 50% less RAM, runs smooth on decade-old hardware. Streamlined rendering engine optimized for real-world speed, not just benchmarks.',
      largeIcon: <Zap className="w-96 h-96 md:w-[600px] md:h-[600px] text-white" />,
      contentPosition: 'right',
      titleGradient: gradientSecondary,
      largeSymbolGradient:
        'linear-gradient(315deg, rgba(255, 255, 255, 0.3) 0%, rgba(235, 235, 244, 0.3) 100%)',
    },
  ];

  const { width: windowWidth } = useWindowSize();
  const isMobile = windowWidth < 768;

  const renderSection = (section: typeof sectionsData[0]) => {
    return (
      <div
        key={section.id}
        className="relative w-full flex items-center justify-center py-8"
        style={{
          fontFamily:
            '"SF Pro Rounded Semibold", "SF Pro Rounded Semibold Placeholder", "-apple-system", "BlinkMacSystemFont", sans-serif',
        }}
      >


        {/* Main Container Box */}
        <div
          className="relative z-10 flex items-center justify-between w-11/12 md:w-3/4 max-w-6xl mx-auto p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl cursor-pointer"
          style={{
            height: 'auto',
            minHeight: '400px',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
          }}
        >
          {/* Box gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-3xl"
            style={{ zIndex: -1 }}
          />

          {/* Content Side */}
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              alignItems: isMobile
                ? 'center'
                : section.contentPosition === 'left'
                ? 'flex-start'
                : 'flex-end',
              textAlign: isMobile
                ? 'center'
                : section.contentPosition === 'left'
                ? 'left'
                : 'right',
              order: isMobile ? 2 : section.contentPosition === 'left' ? 1 : 2,
            }}
          >
            <div
              className="flex mb-6"
              style={{
                justifyContent: isMobile
                  ? 'center'
                  : section.contentPosition === 'left'
                  ? 'flex-start'
                  : 'flex-end',
              }}
            >
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 inline-flex">
                {section.smallIcon}
              </div>
            </div>

            <div>
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 bg-clip-text text-transparent"
                style={{
                  background: section.titleGradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {section.title}
              </h2>
              <p className={`text-xs sm:text-xs md:text-sm lg:text-base text-gray-300 leading-tight sm:leading-tight md:leading-snug lg:leading-normal ${
                section.id === 'privacy' 
                  ? 'max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]' 
                  : 'max-w-[240px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]'
              }`}>
                {section.description}
              </p>
            </div>
          </div>

          {/* Icon Side */}
          <div
            className="flex items-center justify-center flex-1 opacity-40"
            style={{
              order: isMobile ? 1 : section.contentPosition === 'left' ? 2 : 1,
            }}
          >
            <div className="flex items-center justify-center w-32 h-32 md:w-48 md:h-48">
              {React.cloneElement(section.largeIcon, {
                className: 'w-full h-full text-white',
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="features" className="relative bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-7xl font-sans relative z-20 font-bold tracking-tight">
            Features
          </h1>
        </div>

        <div className="space-y-4">
          {sectionsData.map((section) => renderSection(section))}
        </div>
      </div>
    </section>
  );
};

export default Features;
