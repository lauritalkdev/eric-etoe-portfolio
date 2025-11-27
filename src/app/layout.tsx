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
            {/* Desktop Name */}
            <div className="text-xl font-bold text-white hidden md:block">
              Ebong Eric Etoe
            </div>
            {/* Mobile Abbreviated Name */}
            <div className="text-xl font-bold text-white md:hidden">
              E. Eric E
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition">Home</a>
              <a href="#about" className="text-cyan-400 hover:text-cyan-300 transition">About</a>
              <a href="#experience" className="text-cyan-400 hover:text-cyan-300 transition">Experience</a>
              <a href="#services" className="text-cyan-400 hover:text-cyan-300 transition">Services</a>
              <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button id="mobile-menu-button" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown - Perfect 75% transparency */}
          <div id="mobile-menu" className="md:hidden hidden absolute top-full left-0 w-full bg-slate-900/75 backdrop-blur-lg border-b border-slate-600/40">
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
              <a href="#home" className="text-cyan-400 hover:text-cyan-300 transition py-2 text-lg font-semibold">Home</a>
              <a href="#about" className="text-cyan-400 hover:text-cyan-300 transition py-2 text-lg font-semibold">About</a>
              <a href="#experience" className="text-cyan-400 hover:text-cyan-300 transition py-2 text-lg font-semibold">Experience</a>
              <a href="#services" className="text-cyan-400 hover:text-cyan-300 transition py-2 text-lg font-semibold">Services</a>
              <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition py-2 text-lg font-semibold">Contact</a>
            </div>
          </div>
        </nav>
        {children}

        {/* Mobile Menu Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const menuButton = document.getElementById('mobile-menu-button');
              const mobileMenu = document.getElementById('mobile-menu');
              
              if (menuButton && mobileMenu) {
                menuButton.addEventListener('click', function(e) {
                  e.stopPropagation();
                  mobileMenu.classList.toggle('hidden');
                });
                
                // Close menu when clicking on links
                document.querySelectorAll('#mobile-menu a').forEach(link => {
                  link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                  });
                });
                
                // Close menu when clicking outside
                document.addEventListener('click', function(e) {
                  if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                  }
                });
              }
            });
          `
        }} />
      </body>
    </html>
  );
}