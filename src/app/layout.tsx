import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import localFont from 'next/font/local'

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

const iransans = localFont({
  src: [
    {
      path: "../assets/fonts/iransans/IRANSansWeb(FaNum)_UltraLight.ttf",
      weight: "200",
    },
    {
      path: "../assets/fonts/iransans/IRANSansWeb(FaNum)_Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/iransans/IRANSansWeb(FaNum).ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/iransans/IRANSansWeb(FaNum)_Medium.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/iransans/IRANSansWeb(FaNum)_Bold.ttf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning dir="rtl" lang="fa">
      <head />
      <body className={clsx(`min-h-screen   antialiased ${iransans.className}`, fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>{children}</Providers>
      </body>
    </html>
  );
}
