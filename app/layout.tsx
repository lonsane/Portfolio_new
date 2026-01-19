import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Onkar Lonsane - Product Developer",
  description: "Portfolio of Onkar Lonsane, a Product Developer and Motion Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
