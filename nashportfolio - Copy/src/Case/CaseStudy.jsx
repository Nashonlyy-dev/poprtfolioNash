// src/data/casestudy.js
import foodShortImg from "../assets/Gemini_Generated_Image_85bl3j85bl3j85bl.png";
import ochiImg from "../assets/Screenshot 2025-10-15 104702.png";
import k72Img from "../assets/Screenshot 2025-10-22 100258.png";

// example extra screenshots (replace with your real ones)
// import screenshot1 from "../assets/screenshot1.png";
// import screenshot2 from "../assets/screenshot2.png";
// import screenshot3 from "../assets/screenshot3.png";
// import screenshot4 from "../assets/screenshot4.png";
// import screenshot5 from "../assets/screenshot5.png";

export const caseStudies = [
  {
    name: "FoodShort",
    title: "FoodShort App Case Study",
    mainImg: foodShortImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/Foodshort",
    description: `
FoodShort App Case Study

🍔 FoodieHub is a modern full-stack food delivery web app built with React, Node.js, Express, and MongoDB.

It offers a smooth experience for users to explore restaurants, order their favorite meals, and track delivery status in real time. 
Partners (restaurants) can manage their menus, handle orders, and view performance insights through a dedicated dashboard.

The project focuses on creating a fast, secure, and visually pleasing platform where both customers and partners can interact easily.

Key Highlights:
• User and Partner login with JWT authentication  
• Real-time order tracking and updates  
• Fully responsive modern UI  
• Role-based access control for security  
• Deployed using Vercel (frontend) and Render (backend)

Tech Used:
React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and JWT.

Building FoodieHub taught me how to design clean APIs, connect frontend and backend securely, and polish the UI for a seamless experience.
`,
  },
  {
    name: "Ochi",
    title: "Ochi App Case Study",
    mainImg: ochiImg,
    screenshots: "",
    github: "https://github.com/Nashonlyy-dev/ochi",
    live: "https://ochi-nine-delta.vercel.app/",
    description: `
Ochi App Case Study

👁️ Ochi is a visually striking website redesign built with React, Next.js, and Framer Motion. 
The focus of this project was to create a modern dark-mode interface with smooth animations and an interactive "eye" effect that responds to user interactions.

The website emphasizes design aesthetics, fluid motion, and a unique user experience that feels alive and dynamic. 
Every hover, scroll, and click has a subtle animation to make the site engaging without overwhelming the user.

Key Highlights:
• Fully responsive dark-mode design  
• Interactive eye effect using Framer Motion  
• Smooth animations and transitions throughout the site  
• Built with React and Next.js for fast performance  
• Attention to UI/UX details and modern visual trends  

Tech Used:
React.js, Next.js, Framer Motion, Tailwind CSS  

Working on Ochi taught me how to combine motion design with React, optimize animations for performance, and craft a visually compelling experience that grabs attention while remaining functional.
`,
  },
  {
    name: "K-72",
    title: "K-72 Project Case Study",
    mainImg: k72Img,
    screenshots: "",
    description: `
**K-72** is a futuristic design and concept project that showcases motion-driven interfaces and real-time 3D elements.  
Built to explore modern UI with interactivity and immersive storytelling.
`,
  },
];

export function getCaseStudyByName(name) {
  return caseStudies.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
