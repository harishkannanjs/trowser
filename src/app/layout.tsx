import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Miraweb",
  description: "Rewriting the rules of browsing",
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
