"use client";

import Highlights from "@/components/Highlights";
import Header from "@/components/Header";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import ProjectSection from "@/components/ProjectSection";

const Home = () => {
  return (
    <>
      <Header />
      <Highlights />
      <ProjectSection />
      <About />
      <TechStack />
    </>
  );
};

export default Home;
