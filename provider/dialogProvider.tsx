"use client";

// hooks
import { useMountedState } from "@/hooks";

// feature components
import OpenAppsDialog from "@/features/apps/components/OpenAppsDialog";
import OpenDevicesDialog from "@/features/devices/components/OpenDevicesDialog";

export const DialogProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <OpenAppsDialog />
      <OpenDevicesDialog />
    </>
  );
};
