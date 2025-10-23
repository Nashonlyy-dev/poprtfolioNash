import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssLine, RiJavascriptLine, RiNodejsLine, RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiGithubFull } from "react-icons/di";
import { PiFigmaLogoFill } from "react-icons/pi";
import { TbBrandThreejs } from "react-icons/tb";

const SkillsPage = () => {
  const divHid = useRef(null);

  const open = () => {
    if (divHid.current.classList.contains("hidden")) {
      divHid.current.classList.remove("hidden");
    } else {
      divHid.current.classList.add("hidden");
    }
  };

  return (
    <div id="skills" className="w-full min-h-[120vh] relative skills  flex flex-col items-center justify-start font-[fixen]">
      <h1 className="font-[fixen] text-7xl text-amber-50 p-10">Skills:</h1>

      <div className="w-full flex justify-center gap-10 p-10 perspective">
        {/* Frontend Card */}
        <div className="interactive w-1/2 h-[55vh] bg-gradient-to-br from-[#4f94ff] to-[#1b3bff] text-white rounded-xl shadow-2xl transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105 flex flex-col items-center justify-center ">
          <h2 className="text-5xl font-bold mb-4 stroke-text-2">Frontend</h2>
          <ul className="text-2xl space-y-2 ">
            <div className="flex gap-2">
              <div className="text-4xl text-blue-900 hover:rotate-90 transition-all"><FaReact /></div>
              <li> React</li>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-blue-900 hover:rotate-90 transition-all"><RiTailwindCssLine /></div>
              <li> Tailwind</li>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-yellow-500 hover:rotate-90 transition-all"><RiJavascriptLine /></div>
              <li> Javascript</li>
            </div>
          </ul>
        </div>

        {/* Backend Card */}
        <div className="interactive w-1/2 h-[55vh] bg-gradient-to-br from-[#2eeaa0] to-[#00b37e] text-white rounded-xl shadow-2xl transform transition-transform duration-500 hover:rotate-y-12 hover:scale-105 flex flex-col items-center justify-center ">
          <h2 className="text-5xl font-bold mb-4 stroke-text-2">Backend</h2>
          <ul className="text-2xl space-y-2 ">
            <div className="flex gap-2">
              <div className="text-4xl text-blue-900 hover:rotate-90 transition-all"><RiNodejsLine /></div>
              <li> Node js</li>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-blue-900 hover:rotate-90 transition-all"><SiMongodb /></div>
              <li> Mongo</li>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-yellow-500 hover:rotate-90 transition-all"><SiExpress /></div>
              <li> Express</li>
            </div>
            <div className="flex gap-2">
              <div className="text-4xl text-zinc-950 hover:rotate-90 transition-all"><RiNextjsLine /></div>
              <li> Next js</li>
            </div>
          </ul>
        </div>
      </div>

      {/* See More Button */}
      <p onClick={open} className="text-white cursor-pointer mt-6 text-xl hover:text-amber-400 transition-colors">
        See More...
      </p>

      {/* Hidden Extra Skills */}
      <div ref={divHid} className="w-full p-10 border-2 border-amber-50 rounded-4xl  hidden transition-all">
        <ul className="text-2xl space-y-2 text-amber-50">
          <div className="flex gap-2">
            <div className="text-4xl text-zinc-300 hover:rotate-90 transition-all"><DiGithubFull /></div>
            <li> Git/GitHub</li>
          </div>
          <div className="flex gap-2">
            <div className="text-4xl text-rose-300 hover:rotate-90 transition-all"><PiFigmaLogoFill /></div>
            <li> Figma</li>
          </div>
          <div className="flex gap-2">
            <div className="text-4xl text-amber-50 hover:rotate-90 transition-all"><TbBrandThreejs /></div>
            <li> Three js</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SkillsPage;
