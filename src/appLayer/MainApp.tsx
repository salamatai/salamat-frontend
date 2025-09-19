"use client";

import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import Footer from "@/widget/Footer/Footer";
import { store } from "@/store/store";

interface IProps {
  children: ReactNode;
}

const MainApp: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
      <Footer />
    </Provider>
  );
};

export default MainApp;
