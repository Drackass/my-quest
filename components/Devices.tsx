"use client";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { devices } from "@/data/local-data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import useOpenDevices from "@/features/devices/hooks/useOpenDevices";
import { useTranslations } from "next-intl";

export default function Devices() {
  const { onOpen, isOpen } = useOpenDevices();
  const t = useTranslations("referralLinksDevices");
  return (
    <section id="devices" className="flex flex-col gap-3">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {t("getCredit", {
          credit: "30",
        })}
      </h2>
      <div className="overflow-x-scroll">
        <ul className="flex items-center gap-5 w-fit">
          {devices.map((device) => (
            <li
              key={device.title}
              onClick={() => {
                onOpen(device);
              }}
            >
              <article>
                {!isOpen && (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="border rounded-lg w-40 h-40 p-2 flex flex-col items-center gap-1 hover:bg-secondary cursor-pointer">
                        <Image
                          src={device.icon}
                          alt={device.title}
                          width={200}
                          height={110}
                          className="mb-1"
                        />
                        <h3 className="font-semibold">{device.title}</h3>
                        {device.new && (
                          <Badge variant={"outline"}>{t("newBadge")}</Badge>
                        )}
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="p-0 rounded-lg overflow-hidden w-fit">
                      <iframe
                        width="560"
                        height="315"
                        src={device.trailer}
                        title="Lecteur vidéo YouTube"
                        allow="autoplay"
                      ></iframe>
                    </HoverCardContent>
                  </HoverCard>
                )}
                {isOpen && (
                  <div className="border rounded-lg w-40 h-40 p-2 flex flex-col items-center gap-1 cursor-pointer">
                    <Image
                      src={device.icon}
                      alt={device.title}
                      width={200}
                      height={110}
                      className="mb-1"
                    />
                    <h3 className="font-semibold">{device.title}</h3>
                    {device.new && <Badge variant={"outline"}>Nouveau</Badge>}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
