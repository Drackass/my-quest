import App from "./App";
import { appsData } from "@/data/local-data";
import AppsSkeleton from "./AppsSkeleton";
import { useSearch } from "@/features/search/hooks";

export default function Apps() {
  const { apps, loading } = useSearch();
  const bestDeal = appsData.reduce((acc, app) => {
    if (app.discount > acc.discount) {
      return app;
    }
    return acc;
  }).discount;

  return (
    <section id="apps" className="flex flex-col gap-3">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Save up to {bestDeal}% on your next purchase!
      </h2>

      {loading ? (
      <AppsSkeleton />
      ) : apps.length === 0 ? (
      <p>No apps found.</p>
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
