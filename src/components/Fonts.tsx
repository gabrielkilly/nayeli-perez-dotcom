import { Work_Sans, Familjen_Grotesk, Yarndings_12, Lora } from "next/font/google";


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
});

export const fontLora = Lora({
  variable: "--font-lora",
  subsets: ['latin'],
  style: "italic",

});