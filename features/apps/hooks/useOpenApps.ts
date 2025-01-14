import { create } from "zustand";
import { AppsData } from "@/data/local-data";

type OpenAppsState = {
    app?: AppsData;
    isOpen: boolean;
    onOpen: (app: AppsData) => void;
    onClose: () => void;
};

const useOpenApps = create<OpenAppsState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (app: AppsData) => set({ isOpen: true, app }),
    onClose: () => set({ isOpen: false, app: undefined }),
}));

export default useOpenApps;
