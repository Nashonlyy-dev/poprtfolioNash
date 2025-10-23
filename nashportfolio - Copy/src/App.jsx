import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import Case from "./Pages/Case";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case/:projectName" element={<Case />} />
      </Routes>
    </Router>
  );
}
