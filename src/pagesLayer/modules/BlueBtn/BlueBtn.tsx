import React from "react";
import s from "./BlueBtn.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

const BlueBtn: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={s.blueBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default BlueBtn;
