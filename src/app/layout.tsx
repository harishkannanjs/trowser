import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Trowser",
  description: "The next-generation browser engineered for speed, privacy, and precision — without the clutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-black text-white font-sans"
      >
          {children}
          <Toaster />
      </body>
    </html>
  );
}
