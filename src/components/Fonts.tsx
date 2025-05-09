import { IBM_Plex_Serif, Work_Sans, Familjen_Grotesk, Yarndings_12 } from "next/font/google";


export const fontIbmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: "400"
});

export const fontWorkSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
});

export const fontFamiljenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen",
  subsets: ["latin"],
});

export const fontYarndings12 = Yarndings_12({
  variable: "--font-yarndings",
  weight: "400",
  subsets: ["symbols"],
})