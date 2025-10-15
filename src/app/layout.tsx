import "../styles/globals.css";
import * as React from "react"
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { fontFamiljenGrotesk, fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nayeli Perez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${fontLora.variable} ${fontWorkSans.variable} ${fontYarndings12.variable} ${fontFamiljenGrotesk.variable} antialiased`}
      >
        <Script
          src="https://t.contentsquare.net/uxa/79d198fbdbd04.js"
          strategy="afterInteractive"
        />
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
