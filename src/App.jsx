import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Themes from "./components/Themes";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Test from "./pages/test";
import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1.5 * 1000);
  }, []);

  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative z-[1]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000000d0] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-[-1]"></div>

      <BrowserRouter>
        <Navbar />
        <Themes />
        {loading ? (
          <div className="min-h-screen flex justify-center items-center">
            <PropagateLoader color={localStorage.getItem("color") || "white"} />
          </div>
        ) : (
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
