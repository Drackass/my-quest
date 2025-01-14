import { create } from "zustand";
import { DeviceData } from "@/data/local-data";

type OpenDevicesState = {
    device?: DeviceData;
    isOpen: boolean;
    onOpen: (app: DeviceData) => void;
    onClose: () => void;
};

const useOpenDevices = create<OpenDevicesState>((set) => ({
    id: undefined,
    isOpen: false,
    onOpen: (device: DeviceData) => set({ isOpen: true, device }),
    onClose: () => set({ isOpen: false, device: undefined }),
}));

export default useOpenDevices;
