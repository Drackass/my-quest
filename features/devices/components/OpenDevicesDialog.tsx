"use client";

// hooks

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
import useOpenDevices from "../hooks/useOpenDevices";
import { Badge } from "@/components/ui/badge";

const OpenDevicesDialog = () => {
  const { isOpen, onClose, device } = useOpenDevices();
  const isMobile = useMedia("(max-width: 768px)", false);

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
              {device.new && <Badge variant={"outline"}>New</Badge>}
            </DrawerHeader>
            <DrawerDescription className="p-4">
              <p className="text-xl text-muted-foreground mt-10">
                {" "}
                you'll receive <strong className="font-bold">$30</strong> in
                promotional Quest cash when you use this referral link to
                purchase a <strong className="font-bold">{device.title}</strong>{" "}
                device.
              </p>
            </DrawerDescription>
            <ul className="mt-5 flex flex-col gap-1 font-semibold px-4 text-sm">
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CircleArrowRight size={20} className="text-primary" />
                  <span>
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      Click the referral link
                    </a>{" "}
                    and{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      create a Meta account
                    </a>{" "}
                    or{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary font-semibold"
                    >
                      log in
                    </a>
                    .
                  </span>
                </div>
              </li>
              <li className="flex flex-col gap-3">
                <div className="">
                  <div className="flex items-center gap-3">
                    <CircleArrowRight size={20} className="text-primary" />
                    <p>Buy a {device.title} from any retailer.</p>
                  </div>
                </div>
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CircleArrowRight size={20} className="text-primary" />
                  <p>
                    Activate your {device.title} to get $30 in Quest credit.
                  </p>
                </div>
              </li>
            </ul>
            <DrawerFooter className="">
              <a href="" target="_blank" rel="noreferrer">
                <Button>Get $30 in Quest Credit</Button>
              </a>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger asChild>{children}</DialogTrigger> */}
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
          {device.new && <Badge variant={"outline"}>New</Badge>}
        </DialogHeader>
        <p className="text-xl text-muted-foreground mt-10">
          you'll receive <strong className="font-bold">$30</strong> in
          promotional Quest cash when you use this referral link to purchase a{" "}
          <strong className="font-bold">{device.title}</strong> device.
        </p>
        <ul className="[&>li]:mt-2 w-full">
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CircleArrowRight size={20} className="text-primary" />
              <p>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold"
                >
                  Click the referral link
                </a>{" "}
                and{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold"
                >
                  create a Meta account
                </a>{" "}
                or{" "}
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-semibold"
                >
                  log in
                </a>
                .
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="">
              <div className="flex items-center gap-3">
                <CircleArrowRight size={20} className="text-primary" />
                <p>Buy a {device.title} from any retailer.</p>
              </div>
              {/* <p className="text-sm text-muted-foreground">(To speed up the process, I advise you to contact me directly via live chat on this site.)</p> */}
            </div>
          </li>
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CircleArrowRight size={20} className="text-primary" />
              <p>Activate your {device.title} to get $30 in Quest credit.</p>
            </div>
          </li>
        </ul>
        <DialogFooter className="mt-5">
          <a href="" target="_blank" rel="noreferrer">
            <Button>Get $30 in Quest Credit</Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpenDevicesDialog;
