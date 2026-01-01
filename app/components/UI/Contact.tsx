"use client";

import { azaretMono } from "@/app/fonts/fonts";
import useMobile from "@/app/hooks/isMobile";
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface ContactProps {
  icon: "telegram" | "instagram" | "whatsapp" | React.ReactNode;
  children: React.ReactNode;
  link: string;
}

const Contact: React.FC<ContactProps> = ({ icon, children, link }) => {
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
    <Link href={link} className="no-underline hover:no-underline text-inherit">
        <div
        className={`flex gap-[8px] mx-auto justify-center border-[1px] 
            border-[#000] h-[52px] w-full
            ${isMobile ? "" : "max-w-[355px]"}
            cursor-pointer
        `}
        >
        <IconComponent size={28} className="my-auto m-[0px] " />
        <p
            className={`${azaretMono.className} text-[26px] 
                my-auto`}
        >
            {children}
        </p>
        </div>
    </Link>
  );
};

export default Contact;
