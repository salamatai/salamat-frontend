import React from "react";
import s from "./Hero.module.scss";
import WhiteBtn from "../WhiteBtn/WhiteBtn";

const Hero = () => {
  return (
    <div className={s.hero} id="main">
      <img src="img/hero-img.png" alt="" />
      <div className={s.heroText}>
        <h1>Ваш виртуальный эксперт по визуальной диагностике</h1>
        <p>AI, который помогает ставить диагноз быстрее и точнее.</p>
        <WhiteBtn text="Начать анализ" />
      </div>
    </div>
  );
};

export default Hero;
