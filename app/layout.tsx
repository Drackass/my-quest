import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CrispProvider } from "@/provider/crisp-provider";
import Loading from "@/components/SplashScreen";
import { Suspense } from "react";
import { DialogProvider } from "@/provider/dialogProvider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { metaData } from "@/data/local-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CrispProvider />
      <DialogProvider />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Toaster position="bottom-center" />
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <div className="pointer-events-none fixed left-0 bottom-0 z-40 h-12 w-full bg-background backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
      </body>
    </html>
  );
}
