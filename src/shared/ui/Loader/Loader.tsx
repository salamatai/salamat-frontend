import React from "react";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <div className={s.loader}></div>
      <p className={s.text}>Обработка данных...</p>
    </div>
  );
};

export default Loader;
