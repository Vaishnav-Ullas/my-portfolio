'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Tech stack icons for floating background
const techIcons = [
  'mdi:language-javascript',
  'mdi:language-typescript',
  'mdi:language-python',
  'mdi:language-html5',
  'mdi:language-css3',
  'mdi:react',
  'ph:nextjs-logo',
  'mdi:nodejs',
  'simple-icons:express',
  'mdi:tailwind',
  'ph:framer-logo',
  'mdi:mongodb',
  'mdi:postgresql',
  'mdi:mysql',
  'mdi:github',
  'mdi:docker',
  'mdi:vercel',
  'mdi:jira',
  'mdi:figma',
  'mdi:test-tube',
  'ph:test-tube',
  'mdi:cypress'
];

interface ShapeConfig {
  minSize: number;
  maxSize: number;
  minDelay: number;
  maxDelay: number;
  minDuration: number;
  maxDuration: number;
  count: number;
}

const generateRandomShapes = (config: ShapeConfig) => {
  const shapes = [];
  const padding = 15; // Increased padding to keep shapes further from edges

  for (let i = 0; i < config.count; i++) {
    shapes.push({
      size: Math.floor(Math.random() * (config.maxSize - config.minSize + 1) + config.minSize),
      delay: Math.random() * (config.maxDelay - config.minDelay) + config.minDelay,
      x: `${Math.random() * (100 - 2 * padding) + padding}%`,
      y: `${Math.random() * (100 - 2 * padding) + padding}%`,
      duration: Math.random() * (config.maxDuration - config.minDuration) + config.minDuration
    });
  }

  return shapes;
};

export default function FloatingShapes() {
  const shapeConfig = useMemo(() => ({
    minSize: 4,  // Smaller minimum size for mobile
    maxSize: 24, // Smaller maximum size for mobile
    minDelay: 0,
    maxDelay: 6,
    minDuration: 30,
    maxDuration: 60,
    count: 40 // Reduced count for better mobile performance
  }), []);

  const shapes = useMemo(() => generateRandomShapes(shapeConfig), [shapeConfig]);

  // Extended code symbols for more variety
  const codeSymbols = useMemo(() => [
    // Basic operators and symbols
    '<>', '{}', '[]', '/>', '!=', '&&', '||', '==', '=>', '++', '--', '//',
    '/*', '*/', '()', '::', '->', '<<', '>>', '**', '%%', '??', '?.', '?:',
    
    // Programming concepts
    'React', 'JSX', 'TS', 'CSS', 'HTML', 'API', 'SQL', 'Git', 'npm', 'yarn',
    
    // Additional symbols for density
    'let', 'var', 'const', 'if', 'for', 'map', 'async', 'await', 'try',
    'class', 'new', 'this', '...', '=>>', '<<='
  ], []);

  // Generate random positions once and keep them stable
  const symbolPositions = useMemo(() => {
    return codeSymbols.map(() => {
      // Using Math.random() but suppressing hydration warning on the elements
      return {
        x: `${Math.random() * 70 + 15}%`, // Increased padding to 15% from edges
        y: `${Math.random() * 70 + 15}%`  // Increased padding to 15% from edges
      };
    });
  }, [codeSymbols]); // Added codeSymbols as dependency

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Container for all floating elements */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Geometric shapes */}
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute"
            suppressHydrationWarning
            style={{
              left: shape.x,
              top: shape.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100], // Reduced movement range
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut"
            }}
          >
            <div 
              className="bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-sm border border-white/10"
              suppressHydrationWarning
              style={{
                width: shape.size,
                height: shape.size,
                borderRadius: index % 2 === 0 ? '50%' : '20%',
              }}
            />
          </motion.div>
        ))}
        {/* Tech stack icons */}
        {techIcons.map((icon, index) => {
          const position = symbolPositions[index % symbolPositions.length];
          return (
            <motion.div
              key={`icon-${index}`}
              className="absolute text-white/20"
              suppressHydrationWarning
              style={{
                left: position.x,
                top: position.y,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1, 0.8],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 8 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            >
              <Icon icon={icon} className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          );
        })}

        {/* Code symbols */}
        {codeSymbols.map((symbol, index) => {
          const position = symbolPositions[index];
          return (
            <motion.div
              key={`${symbol}-${index}`}
              className="absolute text-blue-300/20 font-mono font-bold"
              suppressHydrationWarning
              style={{
                left: position.x,
                top: position.y,
                fontSize: symbol.length > 2 ? '1rem' : '1.5rem',
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 10 + index * 0.5,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
