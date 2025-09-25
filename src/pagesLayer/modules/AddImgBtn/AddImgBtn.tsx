"use client";

import React, { useRef } from "react";
import s from "./AddImgBtn.module.scss";

type Props = {
  onFileSelect: (file: File) => void;
};

const AddImgBtn: React.FC<Props> = ({ onFileSelect }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={s.addImgBtn} onClick={handleClick}>
        +
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default AddImgBtn;
