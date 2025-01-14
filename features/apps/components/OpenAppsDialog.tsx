"use client";

// hooks
import { useOpenApps } from "@/features/apps/hooks";

// libs
import { useMedia } from "@/hooks";

import { CircleArrowRight, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetaLogo from "@/public/meta-logo.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Ratings } from "@/components/Rating";

const OpenAppsDialog = () => {
  const { isOpen, onClose, app } = useOpenApps();
  const isMobile = useMedia("(max-width: 768px)", false);
  const stringifiedTags = app ? app.tags.join(" · ") : "";

  if (!app) return null;

  if (isMobile) {
    return (
      <Drawer shouldScaleBackground open={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          <DrawerHeader className="text-left space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src={app.icon}
                alt={app.title}
                width={500}
                height={500}
                className="aspect-square w-14 object-cover rounded-lg"
              />
              <div className="whitespace-nowrap flex flex-col gap-1">
                <DialogTitle>{app?.title}</DialogTitle>
                <div className="flex items-center gap-1">
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
            </div>
          </DrawerHeader>
          <p className="text-xl text-muted-foreground px-4 mt-5">
            Use my referral link to buy {app.title} and you can get{" "}
            {app.discount}% off your purchase
          </p>
          <ul className="mt-2 w-full px-4">
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CircleArrowRight size={20} className="text-primary" />
                <p>
                  Follow{" "}
                  <a
                    href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-semibold"
                  >
                    me
                  </a>{" "}
                  on meta horizon
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CircleArrowRight size={20} className="text-primary" />
                <p>Wait until I follow you back</p>
              </div>
            </li>
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CircleArrowRight size={20} className="text-primary" />
                <p>
                  take advantage of the{" "}
                  <strong className="font-semibold">{app.discount}%</strong>{" "}
                  discount
                </p>
              </div>
            </li>
          </ul>

          <DrawerFooter className="mt-5">
            <div className="flex w-full gap-2">
              <a href={app.referralLinks} target="_blank" rel="noreferrer">
                <Button>Save {app.discount}%</Button>
              </a>
              <a
                href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={"outline"}>Follow Me</Button>
              </a>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      {/* <DialogTrigger asChild>{children}</DialogTrigger> */}
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Image
              src={app.icon}
              alt={app.title}
              width={500}
              height={500}
              className="aspect-square w-14 object-cover rounded-lg"
            />
            <div className="whitespace-nowrap flex flex-col gap-1">
              <DialogTitle>{app?.title}</DialogTitle>
              <div className="flex items-center gap-1">
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
          </div>
          {/* <DialogTitle>{app?.title}</DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 ">
                <p className="text-muted-foreground text-sm">
                  {stringifiedTags}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Ratings rating={app.rating} size={13} />
                <p className="text-muted-foreground font-semibold text-sm">
                  {app.rating}
                </p>
              </div>
            </div>
          </DialogDescription> */}
        </DialogHeader>
          {/* <iframe
            width="560"
            height="315"
            src={app.trailer}
            title="YouTube video player"
            allow="autoplay"
            className="w-full aspect-video rounded-xl"
          ></iframe> */}
        <p className="text-xl text-muted-foreground mt-10">
          Use my referral link to buy <strong className="font-bold">{app.title}</strong> and you can get <strong className="font-bold">{app.discount}</strong>
          % off your purchase
        </p>
        <ul className="[&>li]:mt-2 w-full">
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CircleArrowRight size={20} className="text-primary" />
              <p>
                Follow{" "}
                <a
                  href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold"
                >
                  me
                </a>{" "}
                on meta horizon
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="">
              <div className="flex items-center gap-3">
                <CircleArrowRight size={20} className="text-primary" />
                <p>Wait until I follow you back</p>
              </div>
              {/* <p className="text-sm text-muted-foreground">(To speed up the process, I advise you to contact me directly via live chat on this site.)</p> */}
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CircleArrowRight size={20} className="text-primary" />
              <p>
                take advantage of the{" "}
                <strong className="font-semibold">{app.discount}%</strong>{" "}
                discount
              </p>
            </div>
          </li>
        </ul>
        <DialogFooter className="mt-5">
          <a
            href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={"outline"}>Follow Me</Button>
          </a>
          <a href={app.referralLinks} target="_blank" rel="noreferrer">
            <Button>Save {app.discount}%</Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpenAppsDialog;
