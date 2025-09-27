import React from "react";
import s from "./WhiteBtn.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

const WhiteBtn: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={s.whiteBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default WhiteBtn;
