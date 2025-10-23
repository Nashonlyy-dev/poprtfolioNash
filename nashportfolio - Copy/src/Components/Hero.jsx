import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Puppy from "./Models/Puppy";
import { SiGithub, SiLinkedin, SiFiverr, SiDiscord, SiX, SiGmail } from "react-icons/si";
import { motion } from "framer-motion";


const Hero = () => {
  const socials = [
    { name: "GitHub", icon: <SiGithub />, link: "https://github.com/Nashonlyy-dev" },
    { name: "LinkedIn", icon: <SiLinkedin />, link: "www.linkedin.com/in/navin-subedi-89b920382" },
    { name: "Gmail", icon: <SiGmail />, link: "mailto:durgaysubedi3@gmail.com" },
  ];
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Premium Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient opacity-40"></div>
      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 animate-gradient opacity-40 bg-black"></div>

      {/* Hero Content */}
      <div className="relative w-full h-full flex justify-between p-10 text-white font-[fixen]">
        {/* Text Section */}
        <div className="interactive w-1/2 flex flex-col justify-center gap-6 select-none">
          <h2 className="interactive text-[3.5rem] font-extrabold leading-tight tracking-tight uppercase">
            <span className="text-[4rem] text-transparent stroke-text">Hey</span>,
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-400">
              Navin Subedi
            </span>{" "}
            <br />
            <span className="text-stroke">But you can call me Nash</span>
          </h2>

          <p className="text-lg font-light text-gray-300 tracking-widest uppercase">
            I'm a FullStack Developer
          </p>

          <div className="flex gap-10">
            <a
              href="#skills"
              className="relative inline-block w-fit px-6 py-3 mt-3 text-sm tracking-widest uppercase
                border border-gray-500 rounded-full overflow-hidden
                transition-all duration-300 hover:text-black hover:border-rose-600 group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-rose-600 to-amber-400
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-500 ease-out z-0"
              ></span>
              <span className="relative z-10">Skills</span>
            </a>
            <a
              href="#projects"
              className="relative inline-block w-fit px-6 py-3 mt-3 text-sm tracking-widest uppercase
                border border-gray-500 rounded-full overflow-hidden
                transition-all duration-300 hover:text-black hover:border-rose-600 group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-rose-600 to-amber-400
                  translate-x-[-100%] group-hover:translate-x-0
                  transition-transform duration-500 ease-out z-0"
              ></span>
              <span className="relative z-10">Projects</span>
            </a>
          </div>

           <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 place-items-center mt-10">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl text-gray-400 hover:text-[#3b82f6] transition-all duration-300 "
          >
            {social.icon}
            <p className="text-[0.9rem] mt-2 text-center text-gray-500">{social.name}</p>
          </motion.a>
        ))}
      </div>
        </div>

        {/* 3D Puppy Section */}
        <div className="w-1/2 h-full mb-20 relative z-10">
          <Canvas
            shadows
            camera={{ position: [2, 2, 5], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <Suspense fallback={null}>
              <Puppy position={[0, 0.1, 0]} />
            </Suspense>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;
