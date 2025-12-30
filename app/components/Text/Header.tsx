"use client";
import { bethEllen, bigshotOne } from "@/app/fonts/fonts";
import useMobile from "@/app/hooks/isMobile";

interface Header {
  textRu: string;
  textEn: string;
}

const Header: React.FC<Header> = ({ textRu, textEn }) => {
  const isMobile = useMobile(); 
  return (
    <section className="flex w-full max-w-[584px] justify-between mx-auto">
      <h3
        className={`text-[#1B1919]  ${
          isMobile ? "text-[40px]" : "text-[56px]"
        } m-[0px] ${bigshotOne.className}`}
      >
        {textRu}
      </h3>
      <h4
        className={`text-[#C42525]  ${
          isMobile ? "text-[20px]" : "text-[28px]"
        } m-[0px] ${bethEllen.className}`}
      >
        {textEn}
      </h4>
    </section>
  );
};

export default Header;
