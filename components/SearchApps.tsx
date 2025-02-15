"use client";
import React from "react";
import Apps from "./Apps";
import Devices from "./Devices";
import SearchSection from "./SearchSection";

export default function SearchApps() {
  return (
    <>
      <SearchSection />
      <section
        className="relative w-full max-w-screen-lg mx-auto p-5 lg:p-0 lg:mt-10 flex flex-col gap-10 !overflow-hidden scroll-m-20"
        id="referral-links"
      >
        <Apps  />
        <hr />
        <Devices />
      </section>
    </>
  );
}
