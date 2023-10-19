import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Traveling by SarthakXO",
  description: "Traveling/camping website made by SarthakXO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
