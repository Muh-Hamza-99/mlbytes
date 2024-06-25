import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "mlbytes",
  description: "An ML Blog.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
      </body>
    </html>
  );
}
