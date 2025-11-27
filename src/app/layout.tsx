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
            <div className="text-xl font-bold text-white">Ebong Eric Etoe</div>
            <div className="space-x-6">
              <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition">Home</a>
              <a href="#about" className="text-cyan-400 hover:text-cyan-300 transition">About</a>
              <a href="#experience" className="text-cyan-400 hover:text-cyan-300 transition">Experience</a>
              <a href="#services" className="text-cyan-400 hover:text-cyan-300 transition">Services</a>
              <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition">Contact</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}