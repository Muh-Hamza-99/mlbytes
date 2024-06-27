import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

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
      <body className={poppins.className}>
        <div className="w-full min-h-screen">
            <Navbar />
            {children}
            <Toaster />
        </div>
        <Footer />
      </body>
    </html>
  );
}
