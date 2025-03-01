import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import LinkCounter from "./LinkCounter";
import Language from "./Language";

export default function Header() {
  return (
    <header className="border-b sticky -top-10 z-10 w-full">
      <Banner />
      <div className="p-3 flex items-center bg-background/80 backdrop-blur-lg">
        <LinkCounter />
        <Logo />
        <Language />
      </div>
    </header>
  );
}
