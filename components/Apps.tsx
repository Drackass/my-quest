import App from "./App";
import { appsData } from "@/data/local-data";
import AppsSkeleton from "./AppsSkeleton";
import { useSearch } from "@/features/search/hooks";
import { useTranslations } from "next-intl";


export default function Apps() {
  const { apps, loading } = useSearch();
  apps.sort((a, b) => (a.disabled === b.disabled ? 0 : a.disabled ? 1 : -1));
  const bestDeal = appsData.reduce((acc, app) => {
    if (app.discount > acc.discount) {
      return app;
    }
    return acc;
  }).discount;
  const t = useTranslations('referralLinksApps');

  return (
    <section id="apps" className="flex flex-col gap-3">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {t('saveUpTo', { bestDeal })}
      </h2>

      {loading ? (
      <AppsSkeleton />
      ) : apps.length === 0 ? (
      <p>{t("noAppsFound")}</p>
      ) : (
      <ul className="flex flex-col gap-2 flex-1">
        {apps.map((app) => (
        <li key={app.title}>
          <App app={app} />
        </li>
        ))}
      </ul>
      )}
    </section>
  );
}
