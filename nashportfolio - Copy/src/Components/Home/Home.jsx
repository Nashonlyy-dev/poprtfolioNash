import React from "react";
import Nav from "../Common/Nav";
import Hero from "../Hero";

const Home = () => {
  return (
    <div className="hero w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden">
      <Nav />
      <Hero />
    </div>
  );
};

export default Home;
