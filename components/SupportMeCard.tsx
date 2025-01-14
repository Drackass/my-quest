import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function SupportMeCard() {
  const [showInfo, setShowInfo] = React.useState(false);
  return (
    <article
      className={cn(
        "relative w-full max-w-screen-lg mx-auto bg-background p-7 rounded-lg flex flex-col gap-2",
        showInfo && "hidden"
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          Unlock Exclusive Deals with My Referral Codes!
        </h1>
      </div>
      <strong className="font-normal">
        Discover a curated collection of referral codes for Meta Quest devices,
        games, and apps, updated monthly. Whether you’re looking to save on your
        next VR adventure or unlock special discounts, my site has you covered.
        Support my journey and grab amazing deals while you’re at it!
      </strong>
      <div className="flex gap-2 mt-5">
        <a href="#referral-links">
          <Button className="w-fit rounded-full">Support Me</Button>
        </a>
        <Button
          variant={"outline"}
          className=" w-fit rounded-full"
          onClick={() => setShowInfo(!showInfo)}
        >
          Hide
        </Button>
      </div>
    </article>
  );
}
