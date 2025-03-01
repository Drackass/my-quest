import { LoaderCircle, X } from "lucide-react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useSearch } from "@/features/search/hooks";
import SupportMeCard from "./SupportMeCard";
import { useTranslations } from "next-intl";

export default function SearchSection() {
  const t = useTranslations("search");
  const { search, setSearch, loading } = useSearch();

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <section
      className="p-5 lg:p-10 w-full relative flex flex-col gap-3"
      id="search"
    >
      <div className="custom-gradient w-full h-full absolute top-0 left-0" />
      <div className="relative w-full max-w-screen-lg mx-auto">
        <Search
          size={25}
          className="text-muted-foreground absolute left-5 top-4"
        />
        <Input
          placeholder={t("placeholder")}
          className="h-14 placeholder:text-lg pl-14 bg-background !text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && !loading && (
          <X
            size={25}
            className="absolute right-5 top-4 text-muted-foreground cursor-pointer"
            onClick={clearSearch}
          />
        )}
        {loading && (
          <LoaderCircle
            size={25}
            className="absolute right-5 top-4 text-primary animate-spin"
          />
        )}
      </div>
      <SupportMeCard />
    </section>
  );
}
