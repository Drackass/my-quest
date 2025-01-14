// icon
import BatmanArkhamShadow from "@/public/apps/icon/BatmanArkhamShadow.png";
import DungeonsOfEternity from "@/public/apps/icon/DungeonsOfEternity.png";
import Eleven from "@/public/apps/icon/Eleven.png";
import FigminXr from "@/public/apps/icon/FigminXr.png";
import Gorn from "@/public/apps/icon/Gorn.png";
import Superhot from "@/public/apps/icon/Superhot.png";
import Underdogs from "@/public/apps/icon/Underdogs.png";
import BeatSaber from "@/public/apps/icon/BeatSaber.png";

// devices
import Quest2 from "@/public/quest/quest2.png";
import Quest3 from "@/public/quest/quest3.png";
import Quest3s from "@/public/quest/quest3s.png";
import QuestPro from "@/public/quest/questPro.png";

import { Metadata } from "next";

export const appsData = [
  {
    title: "Beat Saber",
    trailer: "https://www.youtube.com/embed/BUXPOqt4O2E?si=9Jz1zb-1GbuHN1hH",
    icon: BeatSaber,
    rating: 4.5,
    tags: ["Rythme", "Arcade"],
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/2448060205267927/",
  },
  {
    title: "SUPERHOT VR",
    trailer: "https://www.youtube.com/embed/pzG7Wc6mbwE?si=zHXOgnc-XjXOUDgf",
    icon: Superhot,
    rating: 4.7,
    discount: 15,
    tags: ["Shooter", "Action"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/1921533091289407/",
  },
  {
    title: "Underdogs",
    trailer: "https://www.youtube.com/embed/9rt2iuTVAcU?si=q6r4jfb0ETkce-s9",
    icon: Underdogs,
    rating: 4.9,
    discount: 15,
    tags: ["Action ", "Fighting"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5302178529865980/",
  },
  {
    title: "Batman: Arkham Shadow",
    trailer: "https://www.youtube.com/embed/dadLtfngQH8?si=AmuJFcRoae4dR4cd",
    icon: BatmanArkhamShadow,
    rating: 4.5,
    tags: ["Action", "Adventure"],
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3551691271620960/",
  },
  {
    title: "GORN",
    trailer: "https://www.youtube.com/embed/BobARIhGXzI?si=bY8K2s35SBeJtXlR",
    icon: Gorn,
    rating: 4.7,
    discount: 15,
    tags: ["Action", "Fighting", "Adventure"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3349689215139117/",
  },
  {
    title: "Eleven Table Tennis",
    trailer: "https://www.youtube.com/embed/l7-z0yPUWdA?si=GR8w9d4gMWjZUnK4",
    icon: Eleven,
    rating: 4.6,
    discount: 15,
    tags: ["Sports", "Simulation"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/1995434190525828/",
  },
  {
    title: "Dungeons Of Eternity",
    trailer: "https://www.youtube.com/embed/s1AgfWZIyw8?si=Ml3UEP_aJn3G2Gqq",
    icon: DungeonsOfEternity,
    rating: 4.8,
    discount: 15,
    tags: ["Action", "Adventure", "Role-playing"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/6341779295861881/",
  },
  {
    title: "Figmin XR | Mixed Reality",
    trailer: "https://www.youtube.com/embed/MB8DaHEioEc?si=OnIwd0Nnl4C3-Ckm",
    icon: FigminXr,
    rating: 4.3,
    discount: 15,
    tags: ["World creation"],
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/6849182851823457/",
  },
];

export type AppsData = (typeof appsData)[number];

export const devices = [
  {
    title: "Meta Quest Pro",
    trailer:
      "https://www.youtube.com/embed/7UvfmvMU3Vc?si=jVXPL2-X4HCKSC2_&amp;controls=0&autoplay=1",
    icon: QuestPro,
    new: true,
  },
  {
    title: "Meta Quest 3s",
    trailer:
      "https://www.youtube.com/embed/oAf5M4Q0Pu8?si=IwtO-SUvYNcxOhE_&amp;controls=0&autoplay=1",
    icon: Quest3s,
    new: true,
  },
  {
    title: "Meta Quest 3",
    trailer:
      "https://www.youtube.com/embed/5AKl_cEB26c?si=dkqv0dn0zpUR66z8&amp;controls=0&autoplay=1",
    icon: Quest3,
    new: false,
  },
  {
    title: "Meta Quest 2",
    trailer:
      "https://www.youtube.com/embed/ATVGl9wOJsM?si=IqMMcd7-covY2ILZ&amp;controls=0&autoplay=1",
    icon: Quest2,
    new: false,
  },
];

export type DeviceData = (typeof devices)[number];

const title = "Meta Quest Referral Links";
const description =
  "Discover a curated collection of referral codes for Meta Quest devices, games, and apps, updated monthly.";
const image =
  "https://files.refer.codes/media/deals/metaquest2/og-image.png?v=1";

export const metaData: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    url: "http://localhost:3000/",
    siteName: "Meta Quest Referral Links",
    images: [{ url: image }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    description: description,
    card: "summary_large_image",
    images: [image],
    creator: "@lenySauzet",
  },
  keywords: [
    "Meta Quest referral",
    "€30 Meta Quest credit",
    "Meta Quest app discounts",
    "15% app discount Meta Quest",
    "VR headset deals",
    "Meta Quest promotions",
  ],
  authors: [{ name: "Lény Sauzet" }],
};
