import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chilling Zone Hotel | Lagos – Open 24 Hours",
  description: "Experience comfort and hospitality at Chilling Zone Hotel in Ifako-Ijaiye, Lagos.",
  keywords: "hotel Lagos, bar Lagos, Ifako-Ijaiye hotel, 24 hour hotel Lagos",
  openGraph: {
    title: "Chilling Zone Hotel | Lagos",
    description: "Your 24-Hour Lagos Escape. Rooms, dining, bar – all night, every night.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
