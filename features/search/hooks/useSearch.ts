import { AppsData, appsData } from "@/data/local-data";
import { create } from "zustand";

type SearchState = {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
  loading: boolean;
  apps: AppsData[];
};

const useSearch = create<SearchState>((set) => {
    let timeoutId: NodeJS.Timeout;

    return {
        search: "",
        setSearch: (search) => {
            set({ search, loading: true });
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                set((state) => ({
                    apps: search
                        ? appsData.filter((app) =>
                                app.title.toLowerCase().includes(search.toLowerCase())
                            )
                        : appsData,
                    loading: false,
                }));
            }, 500);
        },
        clearSearch: () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            set({ search: "", apps: appsData });
        },
        loading: false,
        apps: appsData,
    };
});

export default useSearch;
