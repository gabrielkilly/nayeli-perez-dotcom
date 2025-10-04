import "../styles/globals.css";
import * as React from "react"
import { ThemeProvider } from "@/components/ThemeProvider";
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import ClientLayout from "@/components/ClientLayout";

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
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
