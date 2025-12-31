"use client";

import useMobile from "@/app/hooks/isMobile";
import Contact from "../UI/Contact";

const ContactBlocks = () => {
  const contactData = [
    { icon: "telegram", text: "TELEGRAM" },
    { icon: "instagram", text: "INSTAGRAM" },
    { icon: "whatsapp", text: "WHATSAPP" },
  ];

  const isMobile = useMobile();

  return (
    <div className={`flex flex-col gap-[16px] ${isMobile ? "w-[95%]" : "max-w-[355px]"}
     ${isMobile ? "" : "w-full"}
    mx-auto`}>
      {contactData.map((contact, index) => (
        <Contact key={index} icon={contact.icon}>
            {contact.text}
        </Contact>
      ))}
    </div>
  );
};

export default ContactBlocks;
