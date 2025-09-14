import type { Metadata } from "next";
import React from "react";
import MainApp from "@/appLayer/MainApp";

export const metadata: Metadata = {
  title: process.env.title,
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="web" id="body">
        <MainApp>{children}</MainApp>
      </body>
    </html>
  );
}
