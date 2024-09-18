
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Skills from './Pages/Skills';


function App() {
  return (
    <>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
    </>
  )
}
export default App;
