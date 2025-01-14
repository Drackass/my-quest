import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import fr from "@/data/locales/fr.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}