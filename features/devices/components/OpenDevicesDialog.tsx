"use client";

// hooks

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
import useOpenDevices from "../hooks/useOpenDevices";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const OpenDevicesDialog = () => {
  const { isOpen, onClose, device } = useOpenDevices();
  const isMobile = useMedia("(max-width: 768px)", false);
  const t = useTranslations("referralLinksDevices");

  if (!device) return null;

  if (isMobile) {
    return (
      <Drawer shouldScaleBackground open={isOpen} onOpenChange={onClose}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="flex flex-col justify-center items-center gap-2">
              <Image
                src={device.icon}
                alt={device.title}
                width={150}
                height={150}
                className="w-[150px]"
              />
              <DialogTitle>{device.title}</DialogTitle>
              {device.new && <Badge variant={"outline"}>{t("newBadge")}</Badge>}
            </DrawerHeader>
            <DrawerDescription className="p-4 text-xl text-muted-foreground mt-10">
              {t.rich("useMyReferralLink", {
                Bold: (chunks) => (
                  <strong className="font-bold">{chunks}</strong>
                ),
                credit: "30",
                device: device.title,
              })}
            </DrawerDescription>
            <ul className="mt-5 px-4 flex flex-col gap-2 text-sm">
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={"outline"}
                    className="p-0 w-5 h-5 justify-center"
                  >
                    1
                  </Badge>

                  <span>
                    {t.rich("stepOne", {
                      CreateAcount: (chunks) => (
                        <a
                          href="https://www.meta.com/fr-fr/help/quest/1336626146870772/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-semibold"
                        >
                          {chunks}
                        </a>
                      ),
                      LogIn: (chunks) => (
                        <a
                          href="https://www.meta.com/fr-fr/help/quest/1336626146870772/"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-semibold"
                        >
                          {chunks}
                        </a>
                      ),
                      ReferralLink: (chunks) => (
                        <a
                          href="https://www.meta.com/referrals/link/LenySauzet"
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary font-semibold"
                        >
                          {chunks}
                        </a>
                      ),
                    })}
                  </span>
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
                    {/* <p>Buy a {device.title} from any retailer.</p> */}
                    <p>
                      {t.rich("stepTwo", {
                        Bold: (chunks) => (
                          <strong className="font-semibold">{chunks}</strong>
                        ),
                        device: device.title,
                      })}
                    </p>
                  </div>
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
                      credit: "30",
                      device: device.title,
                    })}
                  </p>
                </div>
              </li>
            </ul>
            <DrawerFooter>
              <a
                href="https://www.meta.com/referrals/link/LenySauzet"
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  {t("useLinkBtn", {
                    credit: "30",
                  })}
                </Button>
              </a>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="flex flex-col justify-center items-center gap-1">
          <Image
            src={device.icon}
            alt={device.title}
            width={500}
            height={500}
            className="w-[200px]"
          />
          <DialogTitle>{device.title}</DialogTitle>
          {device.new && <Badge variant={"outline"}>{t("newBadge")}</Badge>}
        </DialogHeader>
        <p className="text-xl text-muted-foreground mt-10">
          {t.rich("useMyReferralLink", {
            Bold: (chunks) => <strong className="font-bold">{chunks}</strong>,
            credit: "30",
            device: device.title,
          })}
        </p>
        <ul className="[&>li]:mt-2 w-full">
          <li className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <Badge
                variant={"outline"}
                className="p-0 w-6 h-6 flex items-center justify-center rounded-full"
              >
                1
              </Badge>
              <p>
                {t.rich("stepOne", {
                  CreateAcount: (chunks) => (
                    <a
                      href="https://www.meta.com/fr-fr/help/quest/1336626146870772/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      {chunks}
                    </a>
                  ),
                  LogIn: (chunks) => (
                    <a
                      href="https://www.meta.com/fr-fr/help/quest/1336626146870772/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      {chunks}
                    </a>
                  ),
                  ReferralLink: (chunks) => (
                    <a className="text-primary font-semibold">{chunks}</a>
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
                <p>
                  {t.rich("stepTwo", {
                    Bold: (chunks) => (
                      <strong className="font-semibold">{chunks}</strong>
                    ),
                    device: device.title,
                  })}
                </p>
              </div>
              {/* <p className="text-sm text-muted-foreground">(To speed up the process, I advise you to contact me directly via live chat on this site.)</p> */}
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
                  credit: "30",
                  device: device.title,
                })}
              </p>
            </div>
          </li>
        </ul>
        <DialogFooter className="mt-5">
          <a
            href="https://www.meta.com/referrals/link/LenySauzet"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              {t("useLinkBtn", {
                credit: "30",
              })}
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpenDevicesDialog;
