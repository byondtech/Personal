'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';

export default function AnimatedImage({ src, alt, width, height, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full 
        transition-all duration-500 blur-lg
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-br from-purple-300/80 via-pink-300/60 to-purple-300/80
        dark:from-amber-400/60 dark:via-yellow-200/50 dark:to-amber-200/60
        -z-10 -top-2 -bottom-2 -left-2 -right-2
        dark:backdrop-blur-lg`}
      />
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-full shadow-2xl border-4 border-white dark:border-gray-800 
          transform transition-all duration-300 object-cover z-10
          ${isHovered ? 'scale-105 shadow-3xl' : ''}
          relative`}
        style={{
          transform: isHovered ? 
            'perspective(1000px) rotateZ(0.5deg) rotateY(2deg) rotateX(1deg)' :
            'perspective(1000px) rotateZ(0deg) rotateY(0deg) rotateX(0deg)'
        }}
      />
    </div>
  );
}

AnimatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string
};