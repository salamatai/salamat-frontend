import React from "react";
import s from "./BlueBtn.module.scss";

type Props = {
  text: string;
};

const BlueBtn: React.FC<Props> = ({ text }) => {
  return <button className={s.blueBtn}>{text}</button>;
};

export default BlueBtn;
