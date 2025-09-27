"use client";

import React from "react";
import s from "./Input.module.scss";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <textarea
      className={s.text}
      placeholder="Введите дополнительные симптомы:"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
