import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ebong Eric Etoe - Web3 Innovator & AI Developer",
  description: "Professional portfolio of Ebong Eric Etoe, Co-Founder and Web3 Developer specializing in AI solutions and blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Ebong Eric Etoe</div>
            <div className="space-x-6">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}