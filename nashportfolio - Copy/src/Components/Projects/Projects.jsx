import React, { useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { caseStudies } from "../../Case/CaseStudy";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeImg, setActiveImg] = useState(caseStudies[0].mainImg);

  return (
    <div id="projects" className="flex items-center justify-between min-h-screen bg-black text-white px-20">
      {/* Image Preview */}
      <div className="w-1/2 h-[400px] overflow-hidden rounded-2xl">
        <img
          src={activeImg}
          alt="project preview"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Project List */}
      <div className="w-1/2 flex flex-col gap-6 ml-10">
        <div className="ml-30 font-[fixen] flex items-center justify-between border-b-2 border-b-blue-300">
          <h2 className="text-5xl">Work</h2>
          <p>{caseStudies.length}</p>
        </div>

        {caseStudies.map((p) => (
          <Link
            key={p.name}
            to={`/Case/${p.name.toLowerCase()}`}
            onMouseEnter={() => setActiveImg(p.mainImg)}
            className="text-4xl font-bold cursor-pointer text-white transition-all duration-300 flex items-center ml-30 group border-b-2 border-b-blue-300"
          >
            <BiArrowFromLeft className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
