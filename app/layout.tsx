import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { NetworkError } from "@/components/web3/NetworkError";
import { DonateModal } from "@/components/donation/DonateModal";
import { CreateProjectModal } from "@/components/project/CreateProjectModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transparent Charity Tracker",
  description: "A transparent blockchain-based charity tracking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          <NetworkError />
          <DonateModal />
          <CreateProjectModal />
        </Providers>
      </body>
    </html>
  );
}
