import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export default function Language() {
  return (
    <Select>
      <SelectTrigger className="w-[80px] ml-auto">
        <SelectValue placeholder="🇫🇷 FR" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fr">🇫🇷 FR</SelectItem>
        <SelectItem value="en">🇬🇧 EN</SelectItem>
        <SelectItem value="es">🇪🇸 ES</SelectItem>
        <SelectItem value="de">🇩🇪 DE</SelectItem>
      </SelectContent>
    </Select>
  );
}
