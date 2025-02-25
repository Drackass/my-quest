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
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = metaData;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback à l'anglais si la locale n'est pas trouvée
    messages = (await import("@/messages/en.json")).default;
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <CrispProvider />
        <DialogProvider />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
          <Toaster position="bottom-center" />
          <div className="relative">
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <div className="pointer-events-none fixed left-0 bottom-0 z-40 h-12 w-full bg-background backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
