"use client";

import useMobile from '@/app/hooks/isMobile';
import React from 'react';

interface PhotosBlockProps {
  img1: string; 
  img2: string;
  img3: string;
}

const PhotosBlock: React.FC<PhotosBlockProps> = ({ img1, img2, img3 }) => {
  const isMobile = useMobile();
  return (
    <div 
      className={`w-full max-w-[853px] mx-auto flex flex-wrap ${isMobile ? "justify-center" : "justify-between"} ${isMobile ? "gap-[12px]" : ""}`}
    >
      <img src={img1} className="w-[249px] h-[283px] object-cover" />
      <img src={img2} className="w-[249px] h-[283px] object-cover" />
      <img src={img3} className="w-[249px] h-[283px] object-cover" />
    </div>
  );
};

export default PhotosBlock;
