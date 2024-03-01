import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-seasalt relative">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
