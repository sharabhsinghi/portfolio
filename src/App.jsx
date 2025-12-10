import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">S</h2>
        <nav>
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/experience" className="nav-link">
            Experience
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </aside>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
