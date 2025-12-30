import React from 'react';

interface PhotosBlockProps {
  img1: string; 
  img2: string;
  img3: string;
}

const PhotosBlock: React.FC<PhotosBlockProps> = ({ img1, img2, img3 }) => {
  return (
    <div className="w-full max-w-[853px] mx-auto flex flex-wrap justify-between">
      <img src={img1} alt="photo 1" className="w-[249px] h-[283px] object-cover" />
      <img src={img2} alt="photo 2" className="w-[249px] h-[283px] object-cover" />
      <img src={img3} alt="photo 3" className="w-[249px] h-[283px] object-cover" />
    </div>
  );
};

export default PhotosBlock;
