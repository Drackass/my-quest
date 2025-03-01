import React from "react";
import { Gift } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Banner() {
  const t = useTranslations('header');
  return (
    <div className="bg-primary text-primary-foreground h-10 flex justify-center p-4 ">
      <p className="text-xs sm:text-sm font-semibold items-center flex gap-2 uppercase">
        {t('banner')}
        <Gift size={18} className="shrink-0" />
      </p>
    </div>
  );
}
