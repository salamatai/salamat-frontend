"use client";

import React from "react";
import s from "./Header.module.scss";
import BlueBtn from "@/pagesLayer/modules/BlueBtn/BlueBtn";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className={s.header}>
      <img src="img/logo.png" alt="logo" />
      <nav className={s.headerRight}>
        <li>
          <a href="#main">Главная</a>
        </li>
        <li>
          <a href="#about">О сервисе</a>
        </li>
        <BlueBtn text="Анализировать" onClick={() => router.push("/try")} />
      </nav>
    </div>
  );
};

export default Header;
