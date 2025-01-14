import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Ratings } from "./Rating";
import { ExternalLink } from "lucide-react";
import { AppsData } from "@/data/local-data";
import { useOpenApps } from "@/features/apps/hooks";

type AppProps = {
  app: AppsData;
};

export default function App({ app }: AppProps) {
  const stringifiedTags = app.tags.join(" · ");
  const { onOpen, isOpen } = useOpenApps(); // Ajout de `isOpen`

  return (
    <>
      {!isOpen ? (
        <HoverCard>
          <HoverCardTrigger asChild>
            <article
              onClick={() => {
                onOpen(app);
              }}
              className="flex items-center gap-3 hover:bg-secondary p-3 rounded-lg cursor-pointer group relative overflow-hidden"
            >
              <Image
                src={app.icon}
                alt={app.title}
                width={500}
                height={500}
                className="aspect-square w-14 object-cover rounded-lg"
              />
              <div className="whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{app.title}</h3>
                  <Badge variant="outline">-{app.discount}%</Badge>
                </div>
                <div className="flex items-center gap-1 ">
                  <Ratings rating={app.rating} size={13} />
                  <p className="text-muted-foreground font-semibold text-sm">
                    {app.rating}
                  </p>
                  {app.tags.length > 0 && (
                    <>
                      <p className="text-muted-foreground">&#183;</p>
                      <p className="text-muted-foreground text-sm">
                        {stringifiedTags}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-l via-background from-background  group-hover:via-secondary group-hover:from-secondary h-full group-hover:w-32 w-5 absolute right-0 flex items-center justify-end ">
                <ExternalLink className="text-muted-foreground/25 mr-5 hidden group-hover:flex" />
              </div>
            </article>
          </HoverCardTrigger>
          <HoverCardContent
            className="p-0 rounded-lg overflow-hidden w-fit"
            align="end"
          >
            <iframe
              width="560"
              height="315"
              src={app.trailer + "&amp;controls=0&autoplay=1"}
              title="YouTube video player"
              allow="autoplay"
            ></iframe>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <article
          onClick={() => {
            onOpen(app);
          }}
          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer group relative overflow-hidden"
        >
          <Image
            src={app.icon}
            alt={app.title}
            width={500}
            height={500}
            className="aspect-square w-14 object-cover rounded-lg"
          />
          <div className="whitespace-nowrap">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{app.title}</h3>
              <Badge variant="outline">-{app.discount}%</Badge>
            </div>
            <div className="flex items-center gap-1 ">
              <Ratings rating={app.rating} size={13} />
              <p className="text-muted-foreground font-semibold text-sm">
                {app.rating}
              </p>
              {app.tags.length > 0 && (
                <>
                  <p className="text-muted-foreground">&#183;</p>
                  <p className="text-muted-foreground text-sm">
                    {stringifiedTags}
                  </p>
                </>
              )}
            </div>
          </div>
        </article>
      )}
    </>
  );
}
