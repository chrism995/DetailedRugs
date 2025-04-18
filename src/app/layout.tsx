import Header from "@/app/components/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DetailedRugs - Premium Handcrafted Rugs",
  description:
    "Discover handcrafted luxury rugs that blend timeless tradition with contemporary design.",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">{children}</main>
          {/* Footer would go here */}
        </div>
      </body>
    </html>
  );
}
