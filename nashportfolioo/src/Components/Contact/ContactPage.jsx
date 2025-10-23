import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiFiverr, SiDiscord, SiX, SiGmail } from "react-icons/si";

const socials = [
  { name: "GitHub", icon: <SiGithub />, link: "https://github.com/Nashonlyy-dev" },
  { name: "LinkedIn", icon: <SiLinkedin />, link: "www.linkedin.com/in/navin-subedi-89b920382" },
  { name: "Fiverr", icon: <SiFiverr />, link: "https://www.fiverr.com/s/bdp6w0k" },
  { name: "X (Twitter)", icon: <SiX />, link: "https://x.com/Nashonlyyyy" },
  { name: "Gmail", icon: <SiGmail />, link: "mailto:durgaysubedi3@gmail.com" },
];

const ContactPage = () => {
  return (
    <div id="contact" className="w-full h-screen px-20 py-16 bg-[#0a0a0a] text-white flex flex-col justify-center font-[Fixen]">
      {/* Header Section */}
      <div className="border-b border-[#3b82f6]/30 pb-6 mb-10 flex justify-between items-end">
        <h1 className="text-6xl leading-none font-[Cormorant-Garamond] font-extrabold uppercase tracking-tight">
          Let’s <br /> Connect
        </h1>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Drop a message or follow me
        </p>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 place-items-center mt-10">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-4xl text-gray-400 hover:text-[#3b82f6] transition-all duration-300"
          >
            {social.icon}
            <p className="text-xs mt-2 text-center text-gray-500">{social.name}</p>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-gray-500 text-sm">
        <p>Designed & Built by <span className="text-white font-bold">Nash</span> ✦ 2025</p>
      </div>
    </div>
  );
};

export default ContactPage;
