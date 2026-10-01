import type { Metadata } from "next";
import { Inter } from "next/font/google";

import RootHeader from "../components/layout/root-header";
import RootFooter from "../components/layout/root-footer";

import "./globals.css";
import NotificationBar from "@/components/utils/notification-bar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheDevIko",
  description: "TheDevIko Portfolio Website"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="mx-auto min-h-screen flex flex-col bg-background text-foreground">
        <NotificationBar />
        <RootHeader />
        { children }
        <RootFooter />
      </body>
    </html>
  );
}
