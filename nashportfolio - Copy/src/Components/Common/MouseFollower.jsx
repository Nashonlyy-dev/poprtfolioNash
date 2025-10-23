import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.2; // smoothness of following

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      gsap.set(follower, { x: currentX - 15, y: currentY - 15 });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // change on hover
    const hoverElements = document.querySelectorAll("a, button, .hoverable");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 2, backgroundColor: "#00FFF0", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, backgroundColor: "white", duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return ( 

    
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full border-2 border-amber-50 mix-blend-difference pointer-events-none z-[9999]"
    ></div>
  );
};

export default MouseFollower;
