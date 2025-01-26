import type { Metadata } from "next";
import { IBM_Plex_Serif, Work_Sans, Familjen_Grotesk, Yarndings_12 } from "next/font/google";
import "../styles/globals.css";

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
  weight: "400"
})

export const metadata: Metadata = {
  title: "Nayeli Perez | Product Designer",
  description: "Need to fill this out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontIbmPlexSerif.variable} ${fontWorkSans.variable} ${fontYarndings12.variable} ${fontFamiljenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
