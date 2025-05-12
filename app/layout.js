import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/ui/Navbar"; // Import Navbar
import Footer from "@/Components/ui/Footer"; // Import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Classic Veneer - Premium Wood Veneers & Plywood",
  description: "Premium quality veneer and plywood manufacturer from Gabon, Africa. Sustainable Okoumé wood products crafted with precision and care.",
  keywords: ["veneer", "plywood", "Okoumé", "wood", "Gabon", "Africa", "wood products", "sustainable"],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#7B3F00",
  openGraph: {
    title: "Classic Veneer - Premium Wood Products",
    description: "Premium quality veneer and plywood manufacturer from Gabon, Africa. Sustainable Okoumé wood products.",
    url: "https://classicveneer.org",
    siteName: "Classic Veneer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* Navbar will appear on all pages */}
        <main>{children}</main> {/* Main content */}
        <Footer /> {/* Footer will appear on all pages */}
      </body>
    </html>
  );
}