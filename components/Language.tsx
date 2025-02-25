"use client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { useLocale } from "next-intl";

export default function Language() {
  const local = useLocale();
  const router = useRouter();
  const handleSwitchLanguage = (lang: string) => {
    router.push(`/${lang}`);
  }
  
  return (
    <Select onValueChange={handleSwitchLanguage} value={local}>
      <SelectTrigger className="w-[80px] ml-auto">
        <SelectValue placeholder="🇫🇷 FR" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷 FR</SelectItem>
        <SelectItem value="en">🇬🇧 EN</SelectItem>
        <SelectItem value="es">🇪🇸 ES</SelectItem>
        <SelectItem value="de">🇩🇪 DE</SelectItem>
        {/* <SelectItem value="zh">🇨🇳 ZH</SelectItem> */}
      </SelectContent>
    </Select>
  );
}
