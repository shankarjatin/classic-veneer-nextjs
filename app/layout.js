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
  title: "Classic Veneer",
  description: "Veneer and Plywood Manufacturer",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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