import NewsLetter from "@/components/NewsLetter";
import { ScrollToTop } from "@/components/ScrollToTop";
import SearchApps from "@/components/SearchApps";

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;
  return (
    <main className="flex-1 pb-10">
      <SearchApps />
      <hr className="max-w-52 mx-auto my-10" />
      <NewsLetter />
      <ScrollToTop minHeight={20} scrollTo={0} />
    </main>
  );
}
