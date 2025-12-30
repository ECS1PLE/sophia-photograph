"use client";

import { bethEllen, bigshotOne } from "@/app/fonts/fonts";
import useMobile from "@/app/hooks/isMobile";

interface PriceBlock {
  price: string;
}

const PriceBlock: React.FC<PriceBlock> = ({ price }) => {
  const isMobile = useMobile();
  return (
    <div
      className={`flex border-[1px] border-[#000] w-full 
        ${isMobile ? "w-[90%]" : "max-w-[514px]"}
        ${isMobile ? "px-[0px]" : "px-[16px]"}
         mx-auto h-[52px] justify-between items-center `}
    >
      <p
        className={`${bigshotOne.className} text-[23px] mt-[6px] m-[0px] text-center`}
      >
        {price}
      </p>
      <h4
        className={`${bethEllen.className} text-[23px] m-[0px] text-center`}
      >
        ЗАПИСАТЬСЯ
      </h4>
    </div>
  );
};

export default PriceBlock;
