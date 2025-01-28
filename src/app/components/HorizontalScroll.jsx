'use client';

import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const movingImages = [
    { 
      src: 'tcs.svg', 
      alt: 'TCS',
      width: 300,
      height: 200,
    },
    {
        src: 'ey-icon.svg',
        alt: 'EY',
        width: 150,
        height: 100,
    },
    {
        src: 'fico-logo.svg',
        alt: 'FICO',
        width: 150,
        height: 100,
    },
    // Add other logos as needed
];

export default function HorizontalScroll({ images, speed = '20s' }) {
  return (
    <div className="w-full overflow-hidden py-4 sm:py-8">
      <div className="flex animate-marquee-fast whitespace-nowrap ">
        {[...movingImages, ...movingImages].map((img, index) => (
          <div 
            key={index}
            className="mx-2 sm:mx-4 inline-flex items-center justify-center h-[80px] sm:h-[120px]"
          >
            <div className="transition-transform hover:scale-105 flex items-center justify-center px-2 sm:px-3">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-[60px] sm:h-20 object-contain opacity-80 hover:opacity-100"
                style={{
                  aspectRatio: `${img.width}/${img.height}`, // Maintain aspect ratio
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
HorizontalScroll.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  speed: PropTypes.number.isRequired
};
