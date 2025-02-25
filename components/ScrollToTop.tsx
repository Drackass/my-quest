"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop({
  minHeight, // Height from which button will be visible
  scrollTo, // Height to go on scroll to top
}: ButtonProps & { minHeight?: number; scrollTo?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= (minHeight ?? 0));
    };

    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [minHeight]);

  return (
    <Button
      size={"icon"}
      className={cn(
        "rounded-full fixed left-4 bottom-4 z-50 transition-opacity h-14 w-14",
        { "opacity-0": !visible, "opacity-100": visible }
      )}
      onClick={() =>
        window.scrollTo({
          top: scrollTo ?? 0,
          behavior: "smooth",
        })
      }
    >
      <CircleChevronUp size={50} className="!h-6 !w-6" />
    </Button>
  );
}
