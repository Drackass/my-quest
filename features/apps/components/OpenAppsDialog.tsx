"use client";

// hooks
import { useOpenApps } from "@/features/apps/hooks";

// libs
import { useMedia } from "@/hooks";

import { Button } from "@/components/ui/button";

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
import { Badge } from "@/components/ui/badge";
import { useLocale, useTranslations } from "next-intl";
import { AppsData } from "@/data/local-data";

const OpenAppsDialog = () => {
  const { isOpen, onClose, app } = useOpenApps();
  const isMobile = useMedia("(max-width: 768px)", false);
  const locale = useLocale();
  const tags = app?.tags[locale as keyof typeof app.tags] || [];
  const stringifiedTags = tags.join(" · ");
  const t = useTranslations("referralLinksApps");

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
                  {tags.length > 0 && (
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
          <p className="text-xl text-muted-foreground px-4 mt-5 pb-5">
            {t.rich("useMyReferralLink", {
              Bold: (chunks) => <strong className="font-bold">{chunks}</strong>,
              title: app.title,
              discount: app.discount,
            })}
          </p>
          <ul className="w-full px-4 flex flex-col gap-2 text-sm mt-5">
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge
                  variant={"outline"}
                  className="p-0 w-5 h-5 justify-center"
                >
                  1
                </Badge>
                <p>
                  {t.rich("stepOne", {
                    FollowMeLink: (chunks) => (
                      <a
                        href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary font-semibold"
                      >
                        {chunks}
                      </a>
                    ),
                  })}
                </p>
              </div>
            </li>
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge
                  variant={"outline"}
                  className="p-0 w-5 h-5 justify-center"
                >
                  2
                </Badge>
                <p>{t("stepTwo")}</p>
              </div>
            </li>
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge
                  variant={"outline"}
                  className="p-0 w-5 h-5 justify-center"
                >
                  3
                </Badge>
                <p>
                  {t.rich("stepThree", {
                    Bold: (chunks) => (
                      <strong className="font-semibold">{chunks}</strong>
                    ),
                    discount: app.discount,
                  })}
                </p>
              </div>
            </li>
          </ul>

          <DrawerFooter className="mt-5">
            <div className="flex w-full gap-2">
              <a href={app.referralLinks} target="_blank" rel="noreferrer">
                <Button>{t("UseLinkBtn", { discount: app.discount })}</Button>
              </a>
              <a
                href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant={"outline"}>{t("FollowMeBtn")}</Button>
              </a>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
                {tags.length > 0 && (
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
        </DialogHeader>
        <p className="text-xl text-muted-foreground mt-10">
          {t.rich("useMyReferralLink", {
            Bold: (chunks) => <strong className="font-bold">{chunks}</strong>,
            title: app.title,
            discount: app.discount,
          })}
        </p>
        <ul className="[&>li]:mt-2 w-full flex flex-col gap-2">
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Badge variant={"outline"} className="p-0 w-5 h-5 justify-center">
                1
              </Badge>
              <p>
                {t.rich("stepOne", {
                  FollowMeLink: (chunks) => (
                    <a
                      href="https://horizon.meta.com/login/?redirect_uri=https%3A%2F%2Fhorizon.meta.com%2Fprofile%2F437608159443872%2F%3Fhwsh%3DVRbAT92QCu&session_id=ab4b97cd-d5c4-4e9e-b26b-920b02651bfb&utm_source=horizon_cross_screen-profile_details"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="">
              <div className="flex items-center gap-3">
                <Badge
                  variant={"outline"}
                  className="p-0 w-5 h-5 justify-center"
                >
                  2
                </Badge>
                <p>{t("stepTwo")}</p>
              </div>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Badge variant={"outline"} className="p-0 w-5 h-5 justify-center">
                3
              </Badge>
              <p>
                {t.rich("stepThree", {
                  Bold: (chunks) => (
                    <strong className="font-semibold">{chunks}</strong>
                  ),
                  discount: app.discount,
                })}
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
            <Button variant={"outline"}>{t("FollowMeBtn")}</Button>
          </a>
          <a href={app.referralLinks} target="_blank" rel="noreferrer">
            <Button>{t("UseLinkBtn", { discount: app.discount })}</Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpenAppsDialog;
