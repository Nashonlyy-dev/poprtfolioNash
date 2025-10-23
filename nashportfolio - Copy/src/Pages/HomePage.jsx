import React, { useEffect, useRef, useState } from "react";
import Home from "../Components/Home/Home";
import SkillsPage from "../Components/Skills/SkillsPage";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import MouseFollower from "../Components/Common/MouseFollower";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Contact from "../Components/Contact/ContactPage";
import LoadingPage from "../Components/Loader/loading";

const HomePage = () => {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => scroll.destroy();
  }, []);

  // Simulate page load (replace this with real asset load if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 3.5s fake load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen transition-colors duration-500 bg-black text-white relative"
    >
      {/* Show loader only when loading */}
      {loading && <LoadingPage onFinish={() => setLoading(false)} />}

      {/* Main content */}
      <MouseFollower />
      <Home />
      <SkillsPage />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
