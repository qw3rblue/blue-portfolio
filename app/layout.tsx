import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue | Portfolio",
  description:
    "Roblox Developer with 5+ Years of Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
