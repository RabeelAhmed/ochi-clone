import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Maurquee from "./components/Maurquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Locomotive scroll initialized inside effect to avoid render-time side effects
    import("locomotive-scroll").then(({ default: LocomotiveScroll }) => {
      new LocomotiveScroll();
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <Landingpage />
      <Maurquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}
