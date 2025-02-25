import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SupportMeCard() {
  const t = useTranslations('supportMeCard');
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article
      className={cn(
        "relative w-full max-w-screen-lg mx-auto bg-background p-7 rounded-lg flex flex-col gap-2",
        showInfo && "hidden"
      )}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          {t('title')}
        </h1>
      </div>
      <strong className="font-normal">
        {t('description')}
      </strong>
      <div className="flex gap-2 mt-5">
        <a href="#referral-links">
          <Button className="w-fit rounded-full">
            {t('supportMeBtn')}
          </Button>
        </a>
        <Button
          variant={"outline"}
          className=" w-fit rounded-full"
          onClick={() => setShowInfo(!showInfo)}
        >
          {t('hideBtn')}
        </Button>
      </div>
    </article>
  );
}
