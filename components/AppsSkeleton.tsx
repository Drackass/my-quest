import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function AppsSkeleton() {
  return (
    <ul className="flex flex-col gap-2 flex-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="flex items-center gap-3 p-3">
          <Skeleton className="w-14 h-14 rounded-lg" />
          <div className="flex flex-col gap-1 w-full">
            <Skeleton className="w-[200px] h-6 rounded" />
            <Skeleton className="w-[100px] h-6 rounded-lg" />
          </div>
        </li>
      ))}
    </ul>
  );
}
