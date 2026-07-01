import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mahadev Book - Mahadev Book ID | Mahadev Book Official",
  description: "Join Mahadev Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Win big with Mahadev Book.",
  keywords: "Mahadev Book, Mahadev Book ID, Mahadev Book Login, Mahadev Book Register, Buy Mahadev Book ID",
  authors: [{ name: "Mahadev Book" }],
  creator: "Mahadev Book",
  robots: "index, follow",
  verification: {
    google: "BHFGn8peF9o_kOZu8by53aeU2VwPXtzyT6_P5VMHrXg",
  },
  openGraph: {
    title: "Mahadev Book - India's Most Trusted Online Betting Platform",
    description: "Join Mahadev Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Win big with Mahadev Book.",
    url: "https://mahadeevbook.com",
    siteName: "Mahadev Book",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-rose-500/20 selection:text-rose-300">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
