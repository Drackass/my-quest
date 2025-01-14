import React from "react";
import Banner from "./Banner";
import Logo from "./Logo";
import LinkCounter from "./LinkCounter";
import { Button } from "./ui/button";
import { Grip } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Language from "./Language";

export default function Header() {
  return (
    <header className="border-b sticky -top-8 z-10 w-full">
      <Banner />
      <div className="p-3 flex items-center bg-background/80 backdrop-blur-lg">
        <LinkCounter />
        <Logo />
        <Language />
      </div>
    </header>
  );
}
