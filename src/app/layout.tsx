import type { Metadata } from "next";
import { Playfair_Display, Fraunces, Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zeon",
  description: "Bring your orders, customers, inventory, and team together in one seamless workspace. Stay organized, simplify daily operations, and focus on growing your business.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${fraunces.variable} ${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-[#141414] antialiased selection:bg-amber-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}
