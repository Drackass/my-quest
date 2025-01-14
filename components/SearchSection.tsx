import { LoaderCircle, X } from "lucide-react";
import { Search } from 'lucide-react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSearch } from "@/features/search/hooks";
import { cn } from "@/lib/utils";
import SupportMeCard from "./SupportMeCard";

export default function SearchSection() {
  const { search, setSearch, loading } = useSearch();

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
          placeholder="Search"
          className="h-14 placeholder:text-lg pl-14 bg-secondary !text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
