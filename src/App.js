import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import { motion,animate } from "framer-motion"


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
       <Route path="*" element={<Navigate to='/' replace />} />
    </Routes>
      
    </div>
  );
}

export default App;
