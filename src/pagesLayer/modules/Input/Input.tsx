import React from "react";
import s from "./Input.module.scss";

const Input = () => {
  return (
    <textarea
      className={s.text}
      placeholder="Введите дополнительные симптомы:"
    />
  );
};

export default Input;
