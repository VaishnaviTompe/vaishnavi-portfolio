import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenAI Full Stack Developer | Portfolio",
  description: "Portfolio of a GenAI Full Stack Developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased h-full`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-50 font-sans">
        {children}
      </body>
    </html>
  );
}
