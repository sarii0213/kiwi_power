import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/favicon.ico";
import { FooterMenu } from "src/components/FooterMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiwi Power",
  description: "減量・ボディメイクをもっと楽しく",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[600px] mx-auto text-center">
          {children}
          <FooterMenu />
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
