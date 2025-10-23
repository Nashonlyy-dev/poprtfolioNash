import React from "react";
import { RiDownloadLine } from "react-icons/ri";

const About = () => {
  return (
    <div id="about" className="w-full h-[150vh] p-10 font-[fixen] relative">
      <div className="flex gap-60 relative">
        {/* Left Text */}
        <div className="w-1/2">
          <h1 className="text-4xl mt-50 ml-30 border-b-2 border-b-blue-400">About</h1>
          <p className="ml-30 mt-5 text-2xl">
            Hey, my name is Navin Subedi and I use Nash as my nickname across social media. I’m a
            front-end and backend web developer from Myanmar. I’m always curious to learn more
            when it comes to new technologies and creative coding.
          </p>

          <div className="flex gap-2 ml-30 mt-5 font-[fixen-sans] cursor-pointer hover:border-b-blue-500 hover:border-b-2 transition-all">
            <RiDownloadLine /> <p>Resume</p>
          </div>
        </div>

        {/* Right Main Image */}
        <div className="absolute  top-5 right-[35vw] w-40 h-40 flex items-center justify-center z-70">
            <img
              src="src/assets/image.png"
              alt="badge"
              className="w-full h-full rounded-full border-2 border-blue-400"
            />

            {/* SVG Circular Text */}
            <svg className="svg absolute w-60 h-60" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="gray" fontSize="10">
                <textPath href="#circlePath" startOffset="50%">
                  Navin Subedi • Nash •
                </textPath>
              </text>
            </svg>
            <svg className="svg rotate-180 absolute w-60 h-60" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text fill="gray" fontSize="10">
                <textPath href="#circlePath" startOffset="50%">
                  Navin Subedi • Nash •
                </textPath>
              </text>
            </svg>
          </div>
        <div className="relative w-1/2 rounded-[5vw] overflow-hidden">
          <img
            className="w-[40vw] h-[90%] object-cover mr-1 hover:scale-110 transition-all rounded-[5vw]"
            src="src/assets/Gemini_Generated_Image_aoqkegaoqkegaoqk.png"
            alt=""
          />

          {/* Small Circle with Circular Text */}
          
        </div>
      </div>
    </div>
  );
};

export default About;
