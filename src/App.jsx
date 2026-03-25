import { useState } from "react";
import Intro from "./components/intro";
import Header from "./components/headerBar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="w-full min-h-screen bg-[#f5fefd] text-neutral-900">
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Services />
          <Projects />
        </>
      )}
    </div>
  );
}
