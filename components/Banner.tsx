import React from "react";
import { Gift } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Banner() {
  const t = useTranslations('header');
  return (
    <div className="bg-primary text-primary-foreground h-8 flex justify-center">
      <p className="text-sm font-semibold leading-none items-center flex gap-2 uppercase">
        {/* Get new referral links every month */}
        {t('banner')}
        <Gift size={18} />
      </p>
    </div>
  );
}
