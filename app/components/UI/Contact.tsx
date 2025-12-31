"use client";

import { azaretMono } from "@/app/fonts/fonts";
import useMobile from "@/app/hooks/isMobile";
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface ContactProps {
  icon: "telegram" | "instagram" | "whatsapp" | React.ReactNode;
  children: React.ReactNode;
}

const Contact: React.FC<ContactProps> = ({ icon, children }) => {
  let IconComponent;
  switch (icon) {
    case "telegram":
      IconComponent = FaTelegramPlane;
      break;
    case "instagram":
      IconComponent = FaInstagram;
      break;
    case "whatsapp":
      IconComponent = FaWhatsapp;
      break;
    default:
      IconComponent = FaTelegramPlane;
  }

  const isMobile = useMobile();

  return (
    <div
      className={`flex gap-[8px] mx-auto justify-center border-[1px] 
        border-[#000] h-[52px] w-full 
        ${isMobile ? "w-[95%]" : "max-w-[355px]"}
        cursor-pointer
    `}
    >
      <IconComponent size={28} className="my-auto m-[0px]" />
      <p
        className={`${azaretMono.className} text-[26px] 
             my-auto`}
      >
        {children}
      </p>
    </div>
  );
};

export default Contact;
