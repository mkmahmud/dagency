import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Lato } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/shared/nav/Navbar";
import Footer from "@/components/shared/footer/footer";



// Lato font
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
// Barlow font
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});


export const metadata: Metadata = {
  title: "ZevroT a modern software development company",
  description: "ZevroT is a cutting-edge software development company specializing in innovative solutions for businesses worldwide. Our expertise spans web development, mobile applications, and custom software tailored to meet your unique needs.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${lato.variable} ${barlow.variable} antialiased container mx-auto px-4`}
      >
        <Navbar />
        <div className="border-l border-r border-sidebar ">

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
