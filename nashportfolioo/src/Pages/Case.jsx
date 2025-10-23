import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCaseStudyByName } from "../Case/CaseStudy";
import { SiGithub } from "react-icons/si";

export default function Case() {
  const { projectName } = useParams();
  const project = getCaseStudyByName(projectName);

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Project not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 md:px-20 py-10">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-block mb-10 text-blue-400 hover:text-blue-600 transition-colors font-semibold"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          {project.title}
        </h1>

        <div className="flex items-center justify-center">
          <div className="mb-10  w-[40vw] h-auto relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src={project.mainImg}
              alt={project.title}
              className="w-full h-auto object-cover transform transition-transform duration-500 scale-120 hover:scale-123"
            />
          </div>
        </div>

        <p className="text-2xl md:text-xl text-gray-300 max-w-3xl">
          {project.description}
        </p>
      </div>

      <div className="flex gap-10">

      <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-800 w-max">
        <SiGithub className="text-2xl mr-2" />
        <a href={project.github} target="_blank">
          {" "}
          <span className="font-medium">GitHub</span>
        </a>
      </div>
      <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 w-max">
        <a href={project.live} target="_blank">
          {" "}
          <span className="font-medium">Visit</span>
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 3l7 7m0 0v7a2 2 0 01-2 2h-7m9-9H10m4 4L3 21"
          />
        </svg>
      </div>
      </div>


      {/* Main Image */}

      {/* Screenshots Gallery */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Screenshots</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.screenshots.map((screenshot, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src={screenshot}
              alt={`screenshot ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}

      {/* Optional Footer / Call-to-Action */}
      <div className="mt-16 text-center">
        <p className="text-gray-400">
          Explore more projects{" "}
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-600 font-semibold"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
