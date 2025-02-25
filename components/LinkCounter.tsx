import React from 'react'
import { appsData, devices as allDevices } from "@/data/local-data";
import { useTranslations } from 'next-intl';

export default function LinkCounter() {
  const t = useTranslations('header');

  // on garde seulement les devices et les apps qui ont disable à false
  const filteredAppsData = appsData.filter(app => !app.disabled);
  const filteredDevices = allDevices.filter(device => !device.disabled);
  const linksCount = filteredAppsData.length + filteredDevices.length;
  
  return (
    <p className='text-sm font-bold text-muted-foreground hidden lg:flex gap-1'>{linksCount} {t("referralLinksCount")}</p>
  )
}
