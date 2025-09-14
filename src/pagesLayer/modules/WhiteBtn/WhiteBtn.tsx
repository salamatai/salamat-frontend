import React from "react";
import s from "./WhiteBtn.module.scss";

type Props = {
  text: string;
};

const WhiteBtn: React.FC<Props> = ({ text }) => {
  return <button className={s.whiteBtn}>{text}</button>;
};

export default WhiteBtn;
