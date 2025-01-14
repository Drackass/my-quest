import React from "react";
import { Gift } from "lucide-react";

export default function Banner() {
  return (
    <div className="bg-primary text-primary-foreground h-8 flex justify-center">
      <p className="text-sm font-semibold leading-none items-center flex gap-2 uppercase">
        Get new referral links every month
        <Gift size={18} />
      </p>
    </div>
  );
}
