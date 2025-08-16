'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

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
  const padding = 10; // Keep shapes 10% away from edges

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
  const shapeConfig: ShapeConfig = {
    minSize: 6,
    maxSize: 30,
    minDelay: 0,
    maxDelay: 6,
    minDuration: 30,
    maxDuration: 60,
    count: 100 // Adjust this number to control density
  };

  const shapes = useMemo(() => generateRandomShapes(shapeConfig), []);

  // Extended code symbols for more variety
  const codeSymbols = [
    // Basic operators and symbols
    '<>', '{}', '[]', '/>', '!=', '&&', '||', '==', '=>', '++', '--', '//',
    '/*', '*/', '()', '::', '->', '<<', '>>', '**', '%%', '??', '?.', '?:',
    
    // Programming concepts
    'React', 'JSX', 'TS', 'CSS', 'HTML', 'API', 'SQL', 'Git', 'npm', 'yarn',
    
    // Additional symbols for density
    'let', 'var', 'const', 'if', 'for', 'map', 'async', 'await', 'try',
    'class', 'new', 'this', '...', '=>>', '<<='
  ];

  // Generate random positions once and keep them stable
  const symbolPositions = useMemo(() => {
    return codeSymbols.map(() => {
      // Using Math.random() but suppressing hydration warning on the elements
      return {
        x: `${Math.random() * 80 + 10}%`,
        y: `${Math.random() * 80 + 10}%`
      };
    });
  }, []); // Empty dependency array means this runs only once

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200],
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
            style={{
              width: shape.size,
              height: shape.size,
              borderRadius: index % 2 === 0 ? '50%' : '20%',
            }}
          />
        </motion.div>
      ))}

      {/* Floating code symbols with random but stable positions */}
             {codeSymbols.map((symbol, index) => {
         const position = symbolPositions[index];
         return (
           <motion.div
             key={`${symbol}-${index}`} // Added index to ensure uniqueness
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
  );
}
