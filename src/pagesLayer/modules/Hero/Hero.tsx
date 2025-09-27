"use client";

import React from "react";
import s from "./Hero.module.scss";
import WhiteBtn from "../WhiteBtn/WhiteBtn";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className={s.hero} id="main">
      <div className={s.heroText}>
        <h1>Ваш виртуальный эксперт по визуальной диагностике</h1>
        <p>AI, который помогает ставить диагноз быстрее и точнее.</p>
        <WhiteBtn text="Начать анализ" onClick={() => router.push("/try")} />
      </div>
    </section>
  );
};

export default Hero;
