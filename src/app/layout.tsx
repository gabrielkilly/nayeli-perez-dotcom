import type { Metadata } from "next";
import { IBM_Plex_Serif, Work_Sans, Familjen_Grotesk, Yarndings_12 } from "next/font/google";
import "../styles/globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: "400"
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-familjen-grotesk",
  subsets: ["latin"],
});

const yarndings12 = Yarndings_12({
  variable: "--font-familjen-grotesk",
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
        className={`${ibmPlexSerif.variable} ${workSans.variable} ${yarndings12.variable} ${familjenGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
