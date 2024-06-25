import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "mlbytes",
  description: "An ML Blog.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full">
            <Navbar />
            {children}
        </div>
      </body>
    </html>
  );
}
