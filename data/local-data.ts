// icon
import BatmanArkhamShadow from "@/public/apps/icon/BatmanArkhamShadow.png";
import DungeonsOfEternity from "@/public/apps/icon/DungeonsOfEternity.png";
import Eleven from "@/public/apps/icon/Eleven.png";
import FigminXr from "@/public/apps/icon/FigminXr.png";
import Gorn from "@/public/apps/icon/Gorn.png";
import Superhot from "@/public/apps/icon/Superhot.png";
import Underdogs from "@/public/apps/icon/Underdogs.png";
import BeatSaber from "@/public/apps/icon/BeatSaber.png";

import Witchblood from "@/public/apps/icon/Witchblood.png";
import HumanFallFlatVR from "@/public/apps/icon/HumanFallFlatVR.png";
import AFishermansTale from "@/public/apps/icon/AFishermansTale.png";
import DeadHook from "@/public/apps/icon/DeadHook.png";
import Slowp from "@/public/apps/icon/Slowp.png";
import BrokenEdge from "@/public/apps/icon/BrokenEdge.png";
import IntoBlack from "@/public/apps/icon/IntoBlack.png";
import BONELAB from "@/public/apps/icon/BONELAB.png";
import Vampire from "@/public/apps/icon/Vampire.png";
import VirtualVirtualReality from "@/public/apps/icon/VirtualVirtualReality.png";
import Deisim from "@/public/apps/icon/Deisim.png";
import RedMatter2 from "@/public/apps/icon/RedMatter2.png";
import TheLastClockwinder from "@/public/apps/icon/TheLastClockwinder.png";
import HUMANITY from "@/public/apps/icon/HUMANITY.png";
import Maskmaker from "@/public/apps/icon/Maskmaker.png";
import AFishermansTale2 from "@/public/apps/icon/AFishermansTale2.png";
import MossBookII from "@/public/apps/icon/MossBookII.png";
import Moss from "@/public/apps/icon/Moss.png";
import GhostGiant from "@/public/apps/icon/GhostGiant.png";

import Wooorld from "@/public/apps/icon/Wooorld.png";
import LaserThief from "@/public/apps/icon/LaserThief.png";
import AirspaceDefender from "@/public/apps/icon/AirspaceDefender.png";

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
    tags: {
      fr: ["Rythme", "Arcade"],
      en: ["Rhythm", "Arcade"],
      es: ["Ritmo", "Arcade"],
      de: ["Rhythmus", "Arkade"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/2448060205267927/",
    disabled: false,
  },
  {
    title: "SUPERHOT VR",
    trailer: "https://www.youtube.com/embed/pzG7Wc6mbwE?si=zHXOgnc-XjXOUDgf",
    icon: Superhot,
    rating: 4.7,
    tags: {
      fr: ["Tireur", "Action"],
      en: ["Shooter", "Action"],
      es: ["Tirador", "Acción"],
      de: ["Schütze", "Aktion"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/1921533091289407/",
    disabled: false,
  },
  {
    title: "Underdogs",
    trailer: "https://www.youtube.com/embed/9rt2iuTVAcU?si=q6r4jfb0ETkce-s9",
    icon: Underdogs,
    rating: 4.9,
    tags: {
      fr: ["Action", "Combat"],
      en: ["Action", "Fighting"],
      es: ["Acción", "Lucha"],
      de: ["Aktion", "Kampf"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5302178529865980/",
    disabled: false,
  },
  {
    title: "Batman: Arkham Shadow",
    trailer: "https://www.youtube.com/embed/dadLtfngQH8?si=AmuJFcRoae4dR4cd",
    icon: BatmanArkhamShadow,
    rating: 4.5,
    tags: {
      fr: ["Action", "Aventure"],
      en: ["Action", "Adventure"],
      es: ["Acción", "Aventura"],
      de: ["Aktion", "Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3551691271620960/",
    disabled: false,
  },
  {
    title: "GORN",
    trailer: "https://www.youtube.com/embed/BobARIhGXzI?si=bY8K2s35SBeJtXlR",
    icon: Gorn,
    rating: 4.7,
    tags: {
      fr: ["Action", "Combat", "Aventure"],
      en: ["Action", "Fighting", "Adventure"],
      es: ["Acción", "Lucha", "Aventura"],
      de: ["Aktion", "Kampf", "Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3349689215139117/",
    disabled: false,
  },
  {
    title: "Eleven Table Tennis",
    trailer: "https://www.youtube.com/embed/l7-z0yPUWdA?si=GR8w9d4gMWjZUnK4",
    icon: Eleven,
    rating: 4.6,
    tags: {
      fr: ["Sport", "Simulation"],
      en: ["Sports", "Simulation"],
      es: ["Deportes", "Simulación"],
      de: ["Sport", "Simulation"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/1995434190525828/",
    disabled: false,
  },
  {
    title: "Dungeons Of Eternity",
    trailer: "https://www.youtube.com/embed/s1AgfWZIyw8?si=Ml3UEP_aJn3G2Gqq",
    icon: DungeonsOfEternity,
    rating: 4.8,
    tags: {
      fr: ["Action", "Aventure", "RPG"],
      en: ["Action", "Adventure", "Role-playing"],
      es: ["Acción", "Aventura", "Juegos de rol"],
      de: ["Aktion", "Abenteuer", "Rollenspiel"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/6341779295861881/",
    disabled: false,
  },
  {
    title: "Figmin XR | Mixed Reality",
    trailer: "https://www.youtube.com/embed/MB8DaHEioEc?si=OnIwd0Nnl4C3-Ckm",
    icon: FigminXr,
    rating: 4.3,
    tags: {
      fr: ["Création du monde"],
      en: ["World creation"],
      es: ["Creación del mundo"],
      de: ["Weltenerschaffung"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/6849182851823457/",
    disabled: false,
  },
  {
    title: "Witchblood",
    trailer: "https://www.youtube.com/embed/CkJy6091330?si=UVRdsg9J4TUCGULy",
    icon: Witchblood,
    rating: 4.4,
    tags: {
      fr: ["Aventure"],
      en: ["Adventure"],
      es: ["Aventura"],
      de: ["Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/7221491444554579",
    disabled: false,
  },
  {
    title: "Human Fall Flat VR",
    trailer: "https://www.youtube.com/embed/wAccgs-goSs?si=8jZtAaYtE8vtkc5k",
    icon: HumanFallFlatVR,
    rating: 4.2,
    tags: {
      fr: ["Action", "Aventure", "Réflexion"],
      en: ["Action", "Adventure", "Puzzle"],
      es: ["Acción", "Aventura", "Reflexión"],
      de: ["Aktion", "Abenteuer", "Denken"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/7274779852571833",
    disabled: false,
  },
  {
    title: "A Fisherman's Tale",
    trailer: "https://www.youtube.com/embed/qfxByOgyWaY?si=yL20TCUhrdl9hmwl",
    icon: AFishermansTale,
    rating: 4.5,
    tags: {
      fr: ["Aventure", "Narratif"],
      en: ["Adventure", "Narrative"],
      es: ["Aventura", "Narrativo"],
      de: ["Abenteuer", "Erzählerisch"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/2299967930057156",
    disabled: false,
  },
  {
    title: "Dead Hook",
    trailer: "https://www.youtube.com/embed/o0-Ht3N2Wos?si=G1ehatZS67xT28fq",
    icon: DeadHook,
    rating: 4,
    tags: {
      fr: ["Action", "Tir", "RPG"],
      en: ["Action", "Shooter", "Role-playing"],
      es: ["Acción", "Tiroteo", "Juegos de rol"],
      de: ["Aktion", "Schießen", "Rollenspiel"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/8896303273744663",
    disabled: false,
  },
  {
    title: "Slowp",
    trailer: "https://www.youtube.com/embed/gu90ufTLNV8?si=K2ebyDXsRpRsM-DP",
    icon: Slowp,
    rating: 4.4,
    tags: {
      fr: ["Sport", "Simulation", "Courses"],
      en: ["Sports", "Simulation", "Racing"],
      es: ["Deportes", "Simulación", "Carreras"],
      de: ["Sport", "Simulation", "Rennen"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5324326507687177",
    disabled: false,
  },
  {
    title: "Broken Edge",
    trailer: "https://www.youtube.com/embed/dCxvk_AKcqY?si=RLq7_vzzFPW5Z_op",
    icon: BrokenEdge,
    rating: 4.2,
    tags: {
      fr: ["Combat", "Action"],
      en: ["Fighting", "Action"],
      es: ["Lucha", "Acción"],
      de: ["Kampf", "Aktion"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5136958036416423",
    disabled: false,
  },
  {
    title: "Into Black",
    trailer: "https://www.youtube.com/embed/xzKNIjss4Q8?si=wrlCiV2aI-9tOar_",
    icon: IntoBlack,
    rating: 4.7,
    tags: {
      fr: ["Jeux de rôles", "Action"],
      en: ["Role-playing", "Action"],
      es: ["Juegos de rol", "Acción"],
      de: ["Rollenspiel", "Aktion"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5289374691122516",
    disabled: false,
  },
  {
    title: "BONELAB",
    trailer: "https://www.youtube.com/embed/MJIkIHfEzJ4?si=l-FfZ8xTshLdk3fn",
    icon: BONELAB,
    rating: 4.6,
    tags: {
      fr: ["Action", "Tir", "SandBox"],
      en: ["Action", "Shooting", "Sandbox"],
      es: ["Acción", "Disparo", "Caja de arena"],
      de: ["Aktion", "Schießen", "Sandkasten"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/4215734068529064",
    disabled: false,
  },
  {
    title: "Vampire: The Masquerade - Justice",
    trailer: "https://www.youtube.com/embed/EOkoStz19yo?si=U_hbO0RKA8wzM9i7",
    icon: Vampire,
    rating: 4.2,
    tags: {
      fr: ["Aventure", "Jeux de rôles"],
      en: ["Adventure", "Role-playing"],
      es: ["Aventura", "Juegos de rol"],
      de: ["Abenteuer", "Rollenspiel"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/6179032068838054",
    disabled: false,
  },
  {
    title: "Virtual Virtual Reality",
    trailer: "https://www.youtube.com/embed/e5gg5b4wZSA?si=8wPWRFO2iDeE3rti",
    icon: VirtualVirtualReality,
    rating: 4.7,
    tags: {
      fr: ["Aventure", "Narratif"],
      en: ["Adventure", "Narrative"],
      es: ["Aventura", "Narrativo"],
      de: ["Abenteuer", "Erzählerisch"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/2111191602278229",
    disabled: false,
  },
  {
    title: "Deisim",
    trailer: "https://www.youtube.com/embed/6O80bMSR570?si=wLEYWPJVWy_nhkZy",
    icon: Deisim,
    rating: 4.6,
    tags: {
      fr: ["Sandbox", "Stratégie"],
      en: ["Sandbox", "Strategy"],
      es: ["Caja de arena", "Estrategia"],
      de: ["Sandkasten", "Strategie"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3526702020710931",
    disabled: false,
  },
  {
    title: "Red Matter 2",
    trailer: "https://www.youtube.com/embed/iH394hzIFJk?si=FJoDrwMKZW2SsAwr",
    icon: RedMatter2,
    rating: 4.8,
    tags: {
      fr: ["Action", "Aventure", "Réflexion"],
      en: ["Action", "Adventure", "Puzzle"],
      es: ["Acción", "Aventura", "Reflexión"],
      de: ["Aktion", "Abenteuer", "Denken"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/3682089508520212",
    disabled: false,
  },
  {
    title: "The Last Clockwinder",
    trailer: "https://www.youtube.com/embed/JUVjNLc_X2M?si=tkHJEC0TmRDTnFex",
    icon: TheLastClockwinder,
    rating: 4.8,
    tags: {
      fr: ["Aventure"],
      en: ["Adventure"],
      es: ["Aventura"],
      de: ["Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/4837365566303714",
    disabled: false,
  },
  {
    title: "HUMANITY",
    trailer: "https://www.youtube.com/embed/YRPe_NKmckk?si=VCzDtm8g_cnGta6u",
    icon: HUMANITY,
    rating: 4.8,
    tags: {
      fr: ["Réflexion"],
      en: ["Puzzle"],
      es: ["Reflexión"],
      de: ["Denken"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/10019544428070674",
    disabled: false,
  },
  {
    title: "Maskmaker",
    trailer: "https://www.youtube.com/embed/nBn-lpcicU0?si=JF0yx3L8ECLOjLhW",
    icon: Maskmaker,
    rating: 4.5,
    tags: {
      fr: ["Aventure", "Réflexion"],
      en: ["Adventure", "Puzzle"],
      es: ["Aventura", "Reflexión"],
      de: ["Abenteuer", "Denken"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/5028049290647430",
    disabled: false,
  },
  {
    title: "A Fisherman's Tale 2",
    trailer: "https://www.youtube.com/embed/vS7lZU--vPg?si=EIwS90BA0paoTqr2",
    icon: AFishermansTale2,
    rating: 4.6,
    tags: {
      fr: ["Aventure", "Réflexion"],
      en: ["Adventure", "Puzzle"],
      es: ["Aventura", "Reflexión"],
      de: ["Abenteuer", "Denken"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/4543286815791830",
    disabled: false,
  },
  {
    title: "Moss: Book II",
    trailer: "https://www.youtube.com/embed/jkXWbu2B-jY?si=HeKH9HHoST758Icx",
    icon: MossBookII,
    rating: 4.9,
    tags: {
      fr: ["Aventure"],
      en: ["Adventure"],
      es: ["Aventura"],
      de: ["Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/4395292760584049",
    disabled: false,
  },
  {
    title: "Moss",
    trailer: "https://www.youtube.com/embed/hrjly2M7KbA?si=513GvXB-vxaIhp1x",
    icon: Moss,
    rating: 4.8,
    tags: {
      fr: ["Aventure"],
      en: ["Adventure"],
      es: ["Aventura"],
      de: ["Abenteuer"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/1654565391314903",
    disabled: false,
  },
  {
    title: "Ghost Giant",
    trailer: "https://www.youtube.com/embed/nWsDpz4-Sd0?si=yLVPA213paEIDTKM",
    icon: GhostGiant,
    rating: 4.1,
    tags: {
      fr: ["Aventure", "Narratif"],
      en: ["Adventure", "Narrative"],
      es: ["Aventura", "Narrativo"],
      de: ["Abenteuer", "Erzählerisch"],
    },
    discount: 15,
    referralLinks:
      "https://www.meta.com/appreferrals/LenySauzet/2366136696841248",
    disabled: false,
  },
  {
    title: "Wooorld",
    trailer: "https://www.youtube.com/embed/dCTkp1synho?si=qe3J_WiAMM-Hvem9",
    icon: Wooorld,
    rating: 3.5,
    tags: {
      fr: ["Exploration et voyages", "Communauté", "Formation"],
      en: ["Exploration and travel", "Community", "Learning"],
      es: ["Exploración y viajes", "Comunidad", "Formación"],
      de: ["Erkundung und Reisen", "Gemeinschaft", "Lernen"],
    },
    discount: 15,
    referralLinks: "",
    disabled: true,
  },
  {
    title: "Laser Thief",
    trailer: "https://www.youtube.com/embed/X_w5lNnR8Gk?si=F1fk__qmcAflwbJI",
    icon: LaserThief,
    rating: 4.7,
    tags: {
      fr: ["Action", "Aventure", "Simulation"],
      en: ["Action", "Adventure", "Simulation"],
      es: ["Acción", "Aventura", "Simulación"],
      de: ["Aktion", "Abenteuer", "Simulation"],
    },
    discount: 15,
    referralLinks: "",
    disabled: true,
  },
  {
    title: "Airspace Defender",
    trailer: "https://www.youtube.com/embed/-VkbismODrU?si=7iUPzCFzvW1XEj1y",
    icon: AirspaceDefender,
    rating: 4.8,
    tags: {
      fr: ["Arcade", "Jeux de société", "Action"],
      en: ["Arcade", "Board games", "Action"],
      es: ["Arcade", "Juegos de mesa", "Acción"],
      de: ["Arcade", "Brettspiele", "Aktion"],
    },
    discount: 15,
    referralLinks: "",
    disabled: true,
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
    disabled: false,
  },
  {
    title: "Meta Quest 3s",
    trailer:
      "https://www.youtube.com/embed/oAf5M4Q0Pu8?si=IwtO-SUvYNcxOhE_&amp;controls=0&autoplay=1",
    icon: Quest3s,
    new: true,
    disabled: false,
  },
  {
    title: "Meta Quest 3",
    trailer:
      "https://www.youtube.com/embed/5AKl_cEB26c?si=dkqv0dn0zpUR66z8&amp;controls=0&autoplay=1",
    icon: Quest3,
    new: false,
    disabled: false,
  },
  {
    title: "Meta Quest 2",
    trailer:
      "https://www.youtube.com/embed/ATVGl9wOJsM?si=IqMMcd7-covY2ILZ&amp;controls=0&autoplay=1",
    icon: Quest2,
    new: false,
    disabled: false,
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
