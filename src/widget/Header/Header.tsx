import React from "react";
import s from "./Header.module.scss";

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
        <button className={s.headerBtn}>Анализировать</button>
      </div>
    </div>
  );
};

export default Header;
