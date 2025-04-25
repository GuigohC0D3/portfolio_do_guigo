// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Services from "./pages/servicos/Services";
// import Resume from "./pages/resume/Resume";
// import Work from "./pages/work/Work";
// import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 h-screen overflow-hidden">
        {" "}
        {/* espaço para não sobrepor o conteúdo com a navbar */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
