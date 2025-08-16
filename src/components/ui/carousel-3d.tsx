"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface CarouselCard {
  id: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  preview: string;
  content: string;
  imageUrl?: string;
}

interface Carousel3DProps {
  cards: CarouselCard[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const Carousel3D: React.FC<Carousel3DProps> = ({ 
  cards, 
  autoRotate = false, 
  rotateInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!autoRotate || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, cards.length, isHovered]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    let transform = "";
    let zIndex = 0;
    let opacity = 1;
    let scale = 1;

    if (isMobile) {
      if (diff === 0) {
        transform = "translateX(0px) translateZ(0px)";
        zIndex = 10;
      } else if (diff === 1 || (diff === -(cards.length - 1))) {
        transform = "translateX(200px) translateZ(-50px)";
        zIndex = 8;
        opacity = 0.7;
        scale = 0.8;
      } else if (diff === -1 || (diff === cards.length - 1)) {
        transform = "translateX(-200px) translateZ(-50px)";
        zIndex = 8;
        opacity = 0.7;
        scale = 0.8;
      } else if (diff === 2 || (diff === -(cards.length - 2))) {
        transform = "translateX(0px) translateZ(-100px)";
        zIndex = 5;
        opacity = 0.3;
        scale = 0.7;
      } else {
        transform = "translateX(0px) translateZ(-200px)";
        zIndex = 1;
        opacity = 0;
        scale = 0.6;
      }
    } else {
      if (diff === 0) {
        transform = "translateX(0px) translateZ(0px) rotateY(0deg)";
        zIndex = 10;
      } else if (diff === 1 || (diff === -(cards.length - 1))) {
        transform = "translateX(350px) translateZ(-100px) rotateY(-15deg)";
        zIndex = 8;
        opacity = 0.8;
        scale = 0.9;
      } else if (diff === -1 || (diff === cards.length - 1)) {
        transform = "translateX(-350px) translateZ(-100px) rotateY(15deg)";
        zIndex = 8;
        opacity = 0.8;
        scale = 0.9;
      } else if (Math.abs(diff) === 2) {
        transform = "translateX(0px) translateZ(-200px) rotateY(0deg)";
        zIndex = 5;
        opacity = 0.3;
        scale = 0.95;
      } else {
        transform = "translateX(0px) translateZ(-400px) rotateY(0deg)";
        zIndex = 1;
        opacity = 0;
        scale = 0.8;
      }
    }

    return {
      transform: `${transform} scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className={`relative w-full flex flex-col items-center justify-center ${
        isMobile ? 'h-[500px]' : 'h-[600px]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: "1200px" }}
    >
      {/* Cards */}
      <div className={`relative w-full flex items-center justify-center ${
        isMobile ? 'h-[400px]' : 'h-full'
      }`}>
        {cards.map((card, index) => {
          const style = getCardStyle(index);
          return (
            <motion.div
              key={card.id}
              className={`absolute cursor-pointer ${
                isMobile ? 'w-64 h-80' : 'w-80 h-96'
              }`}
              style={style}
              animate={style}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.25, 0.25, 1],
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl" />

                <div className={`relative z-10 h-full flex flex-col ${
                  isMobile ? 'p-4' : 'p-6'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-400 text-xl">
                      {card.icon}
                    </div>
                    <span className="font-semibold text-blue-300 uppercase tracking-wider text-xs">
                      {card.category}
                    </span>
                  </div>

                  <h3 className={`font-bold text-white mb-3 line-clamp-2 ${
                    isMobile ? 'text-lg' : 'text-xl'
                  }`}>
                    {card.title}
                  </h3>

                  <p className={`text-gray-300 mb-4 line-clamp-2 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}>
                    {card.preview}
                  </p>

                  <div className="flex-1 overflow-hidden">
                    <p className={`text-gray-400 line-clamp-6 leading-relaxed ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}>
                      {card.content}
                    </p>
                  </div>

                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation */}
      {!isMobile ? (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
            aria-label="Previous card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/15 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
            aria-label="Next card"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-2 z-50">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-400 scale-110"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center gap-6 mt-6 z-50">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
            aria-label="Previous card"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-400 scale-110"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-200 shadow-lg"
            aria-label="Next card"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel3D;
