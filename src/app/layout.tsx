
import { IBM_Plex_Serif, Work_Sans, Familjen_Grotesk, Yarndings_12 } from "next/font/google";
import "../styles/globals.css";
import * as React from "react"
import { ThemeProvider } from "@/components/ThemeProvider";

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
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
