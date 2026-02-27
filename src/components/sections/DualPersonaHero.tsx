import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import designerImage from '../../assets/ID4.png';
import coderImage from '../../assets/ID3.png';

// Code snippets for the coder background
const CODE_SNIPPETS = [
  'function create() {',
  'const design = true;',
  '<Component />',
  '.style { display: flex; }',
  'import { useState } from',
  'return (',
  'export default function',
  'const handler = () => {',
];

export function DualPersonaHero() {
  const [mousePosition, setMousePosition] = useState(50); // 0 = left, 50 = center, 100 = right
  const [displayPosition, setDisplayPosition] = useState(50); // For smooth cursor following
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      
      // Clamp between 0 and 100
      setMousePosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition(50); // Reset to center
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Smooth cursor following - interpolates display position towards mouse position
  useEffect(() => {
    const smoothFollow = () => {
      // Smooth interpolation factor (lower = slower)
      const ease = 0.08;
      
      setDisplayPosition(prev => {
        const target = isHovering ? mousePosition : 50;
        const diff = target - prev;
        
        // Stop animation when close enough
        if (Math.abs(diff) < 0.1) {
          return target;
        }
        
        return prev + diff * ease;
      });
      
      animationRef.current = requestAnimationFrame(smoothFollow);
    };
    
    animationRef.current = requestAnimationFrame(smoothFollow);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isHovering]);

  // Calculate split position - follows mouse smoothly
  const getSplitPosition = () => {
    if (isMobile) return 50;
    if (!isHovering) return 50;
    return displayPosition;
  };

  const splitPos = getSplitPosition();

  // Left side clip path - reveals like a line sweep from left
  const leftClipPath = isMobile 
    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    : `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)`;

  // Right side clip path - reveals like a line sweep from right
  const rightClipPath = isMobile
    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    : `polygon(${splitPos}% 0, 100% 0, 100% 100%, ${splitPos}% 100%)`;

  // Opacity - fades the side you're moving away from
  const leftOpacity = isMobile ? 1 : isHovering ? Math.max(0.2, (100 - displayPosition) / 100) : 0.5;
  const rightOpacity = isMobile ? 1 : isHovering ? Math.max(0.2, displayPosition / 100) : 0.5;

  // Image parallax offset
  const imageOffset = isMobile ? 0 : (displayPosition - 50) * 0.3;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
      style={{ cursor: isMobile ? 'default' : 'none' }}
    >
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Designer Side Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            background: '#FFFFFF',
            opacity: leftOpacity,
          }}
        >
          {/* Paint Splatters - Designer Aesthetic */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-64 h-64 -top-10 -left-10 opacity-30" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="#f472b6" />
              <circle cx="140" cy="60" r="30" fill="#fb7185" />
              <circle cx="60" cy="130" r="25" fill="#f9a8d4" />
            </svg>
            <svg className="absolute w-48 h-48 top-1/3 -left-5 opacity-25" viewBox="0 0 150 150">
              <ellipse cx="75" cy="75" rx="60" ry="40" fill="#a78bfa" transform="rotate(-30 75 75)" />
            </svg>
            <svg className="absolute w-56 h-56 bottom-10 left-1/4 opacity-20" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="70" fill="#34d399" />
              <circle cx="50" cy="50" r="20" fill="#6ee7b7" />
            </svg>
            <svg className="absolute w-40 h-40 top-1/2 left-1/3 opacity-25" viewBox="0 0 120 120">
              <polygon points="60,10 110,90 10,90" fill="#fbbf24" />
            </svg>
          </div>
        </motion.div>

        {/* Coder Side Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            background: '#FFFFFF',
            opacity: rightOpacity,
          }}
        >
          {/* Code Snippets - Coder Aesthetic */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] font-mono text-xs leading-relaxed p-8 break-all">
              {CODE_SNIPPETS.map((snippet, i) => (
                <div key={i} className="whitespace-nowrap">
                  {Array(20).fill(snippet).join(' ')}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Portrait Images Layer - Split Reveal */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Designer Image (Left side) - clipped from left */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: leftClipPath }}
        >
          <motion.img 
            src={designerImage} 
            alt="Designer persona" 
            className="max-w-lg md:max-w-xl lg:max-w-6xl h-auto object-cover"
            animate={!isMobile ? { x: imageOffset } : {}}
            transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
          />
        </div>

        {/* Coder Image (Right side) - clipped from right */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: rightClipPath }}
        >
          <motion.img 
            src={coderImage} 
            alt="Coder persona" 
            className="max-w-lg md:max-w-xl lg:max-w-6xl h-auto object-cover"
            animate={!isMobile ? { x: imageOffset } : {}}
            transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
          />
        </div>
      </div>

      {/* Text Content Layer */}
      <div className="relative z-30 min-h-screen flex">
        {/* Designer Text - Left Side */}
        <motion.div 
          className={`absolute left-0 top-0 bottom-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pointer-events-none
            ${isMobile ? 'relative w-full py-16' : 'w-1/2'}`}
          animate={{
            opacity: isMobile ? 1 : leftOpacity,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: isMobile ? 1 : leftOpacity, 
              x: 0 
            }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-none">
              designer
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-xs leading-relaxed">
              Product designer specializing in UI design and design systems.
            </p>
          </motion.div>
        </motion.div>

        {/* Coder Text - Right Side */}
        <motion.div 
          className={`absolute right-0 top-0 bottom-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 pointer-events-none
            ${isMobile ? 'hidden' : 'w-1/2'}`}
          animate={{
            opacity: isMobile ? 1 : rightOpacity,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ 
              opacity: isMobile ? 1 : rightOpacity, 
              x: 0 
            }}
            transition={{ duration: 0.5 }}
            className="pointer-events-auto text-right ml-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-none font-mono">
              {'<coder>'}
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-xs ml-auto leading-relaxed">
              Front end developer who writes clean, elegant and efficient code.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Layout - Stacked */}
      {isMobile && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="min-h-screen flex flex-col">
            {/* Designer Section - Top */}
            <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-white">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-none">
                designer
              </h1>
              <p className="mt-3 text-sm text-gray-600 max-w-xs leading-relaxed">
                Product designer specializing in UI design and design systems.
              </p>
            </div>

            {/* Portrait in middle */}
            <div className="flex-shrink-0 flex justify-center py-8">
              <img 
                src={coderImage} 
                alt="Portrait" 
                className="max-w-48 h-auto rounded-full object-cover shadow-xl"
              />
            </div>

            {/* Coder Section - Bottom */}
            <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-white">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-none font-mono">
                {'<coder>'}
              </h1>
              <p className="mt-3 text-sm text-gray-600 max-w-xs ml-auto leading-relaxed">
                Front end developer who writes clean, elegant and efficient code.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator - Desktop only */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: isHovering ? 0.2 : 1 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
