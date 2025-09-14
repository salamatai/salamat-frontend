import React from "react";
import Hero from "../modules/Hero/Hero";
import About from "../modules/About/About";
import Header from "@/widget/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Main;
