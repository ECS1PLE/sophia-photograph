"use client";

import { bethEllen, bigshotOne } from "@/app/fonts/fonts";
import useMobile from "@/app/hooks/isMobile";

interface ServiceList {
  title: string;
  services: { name: string; }[]; 
}

const ServiceList: React.FC<ServiceList> = ({ title, services }) => {
  const isMobile = useMobile();
  return (
    <div className={`pt-[42px] pb-[12px] flex flex-col mx-auto border-[1px] border-[#000] 
    ${isMobile ? "px-[0px]" : "px-[90px]"}
    ${isMobile ? "w-[95%]" : "max-w-[530px]"}
    `}>
      <h3 className={`${bigshotOne.className} 
      ${isMobile ? "text-[30px]" : "text-[36px]"}
      ${isMobile ? "mx-auto" : "m-[0px]"}
      ${isMobile ? "my-[0px]" : ""}
         text-[#C42525] `}>{title}</h3>
      <ul className={`list-none  mt-[20px] m-[0px] p-[0px] ${isMobile ? "ml-[0px]" : "-ml-[54px]"}`}>
        {services.map((service, index) => (
          <li key={index} className="flex gap-[12px] ">
            <span className={`${bethEllen.className} text-[23px]`}>+</span>
            <span className={`${bethEllen.className} text-[23px]`}>{service.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
