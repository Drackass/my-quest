import React from 'react'
import { appsData, devices } from "@/data/local-data";

export default function LinkCounter() {
  return (
    <p className='text-sm font-bold text-muted-foreground hidden lg:flex gap-1'>{appsData.length + devices.length} Meta Quest Referral Links</p>
  )
}
