"use client";

import useMobile from "@/app/hooks/isMobile";
import Contact from "../UI/Contact";

const ContactBlocks = () => {
  const contactData = [
    { icon: "telegram", text: "TELEGRAM", link: "https://t.me/sophoto_ss" },
    { icon: "instagram", text: "INSTAGRAM", link: "https://www.instagram.com/catharsi_sss?igsh=MXFyaTVma3NkaGk5bg%3D%3D&utm_source=qr" },
    { icon: "whatsapp", text: "WHATSAPP", link: "https://wa.me/+79811032825" },
  ];

  const isMobile = useMobile();

  return (
    <div className={`flex flex-col gap-[16px] ${isMobile ? "w-[95%]" : "max-w-[355px]"}
     ${isMobile ? "" : "w-full"}
    mx-auto`}>
      {contactData.map((contact, index) => (
        <Contact key={index} icon={contact.icon} link={contact.link}>
            {contact.text}
        </Contact>
      ))}
    </div>
  );
};

export default ContactBlocks;
