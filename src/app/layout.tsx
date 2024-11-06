import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const poppinsSans = localFont({
  src: "./fonts/Poppins-regular-webfont.woff2",
  variable: "--font-poppins-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ECOMMERCE",
  description: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body
          className="bg-slate-200"
        >
          <Navbar />

          <main className="bg-slate-200 h-screen p-16">
            {children}
          </main>
        </body>
      </html >
    </ClerkProvider>
  );
}
