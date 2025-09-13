import React from "react";
import s from "./Main.module.scss";
import Hero from "../modules/Hero/Hero";
import About from "../modules/About/About";

const Main = () => {
  return (
    <div className={s.main}>
      <Hero />
      <About />
    </div>
  );
};

export default Main;
