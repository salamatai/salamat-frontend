import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div className={s.about} id="about">
      <div className={s.aboutText}>
        <h2>О сервисе</h2>
        <p>
          Salamat AI — это платформа, которая помогает врачам быстро и точно
          анализировать медицинские данные и изображения. Сервис предоставляет
          предварительный диагноз и рекомендации по дальнейшим действиям,
          облегчая работу специалистов, ускоряя диагностику и снижая риск
          ошибок. Платформа создана для удобства и надёжной поддержки врачей в
          повседневной практике.
        </p>
      </div>
      <div className={s.gradientBlock}></div>
    </div>
  );
};

export default About;
