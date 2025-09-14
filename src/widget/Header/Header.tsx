import React from "react";
import s from "./Header.module.scss";
import BlueBtn from "@/pagesLayer/modules/BlueBtn/BlueBtn";

const Header = () => {
  return (
    <div className={s.header}>
      <img src="img/logo.png" alt="" />
      <div className={s.headerRight}>
        <li>
          <a href="#main">Главная</a>
        </li>
        <li>
          <a href="#about">О сервисе</a>
        </li>
        <BlueBtn text="Анализировать" />
      </div>
    </div>
  );
};

export default Header;
