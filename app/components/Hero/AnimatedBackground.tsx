'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 rounded-full blur-2xl"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/10" />
      </div>

      {/* Floating shapes and code symbols */}
      <FloatingShapes />
    </div>
  );
}
