"use client";

import Contact from "../UI/Contact";

const ContactBlocks = () => {
  const contactData = [
    { icon: "telegram", text: "TELEGRAM" },
    { icon: "instagram", text: "INSTAGRAM" },
    { icon: "whatsapp", text: "WHATSAPP" },
  ];

  return (
    <div className="flex flex-col gap-[16px]">
      {contactData.map((contact, index) => (
        <Contact key={index} icon={contact.icon}>
            {contact.text}
        </Contact>
      ))}
    </div>
  );
};

export default ContactBlocks;
