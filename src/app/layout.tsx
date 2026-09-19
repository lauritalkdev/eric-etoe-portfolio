import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.ebongeric.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ebong Eric Etoe | Full-Stack Developer, AI & Web3 Architect",
    template: "%s | Ebong Eric Etoe",
  },

  description:
    "Portfolio of Ebong Eric Etoe, a Full-Stack Developer, AI & Web3 Architect, Technical Partner and Entrepreneur building intelligent digital products across AI, Web3, fintech and business technology.",

  keywords: [
    "Ebong Eric Etoe",
    "Full-Stack Developer",
    "AI Developer",
    "AI Architect",
    "Web3 Developer",
    "Web3 Architect",
    "Blockchain Developer",
    "Technical Partner",
    "Product Developer",
    "Software Developer",
    "Fintech Developer",
    "Technology Entrepreneur",
    "AI Solutions",
    "Web3 Solutions",
    "Blockchain Development",
    "Full-Stack Development",
    "Cameroon Developer",
    "African Tech Entrepreneur",
  ],

  authors: [
    {
      name: "Ebong Eric Etoe",
      url: siteUrl,
    },
  ],

  creator: "Ebong Eric Etoe",
  publisher: "Ebong Eric Etoe",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ebong Eric Etoe",
    title: "Ebong Eric Etoe | Full-Stack Developer, AI & Web3 Architect",
    description:
      "Full-Stack Developer, AI & Web3 Architect, Technical Partner and Entrepreneur building intelligent products across AI, Web3, fintech and business technology.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ebong Eric Etoe | Full-Stack Developer, AI & Web3 Architect",
    description:
      "Full-Stack Developer, AI & Web3 Architect, Technical Partner and Entrepreneur building intelligent digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <nav
          className="fixed top-0 z-50 w-full border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm"
          aria-label="Main navigation"
        >
          <div className="container mx-auto flex items-center justify-between px-6 py-4">
            {/* Desktop Name */}
            <Link
              href="/#home"
              className="hidden text-xl font-bold text-white transition hover:text-cyan-300 md:block"
              aria-label="Ebong Eric Etoe - Home"
            >
              Ebong Eric Etoe
            </Link>

            {/* Mobile Abbreviated Name */}
            <Link
              href="/#home"
              className="text-xl font-bold text-white transition hover:text-cyan-300 md:hidden"
              aria-label="Ebong Eric Etoe - Home"
            >
              E. Eric E
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-6 md:flex">
              <Link
                href="/#home"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                About
              </Link>

              <Link
                href="/#experience"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Experience
              </Link>

              <Link
                href="/#services"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Portfolio
              </Link>

              <Link
                href="/#contact"
                className="text-cyan-400 transition hover:text-cyan-300"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-button"
                type="button"
                className="text-cyan-400 transition hover:text-cyan-300"
                aria-label="Open navigation menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            id="mobile-menu"
            className="absolute left-0 top-full hidden w-full border-b border-slate-600/40 bg-slate-900/75 backdrop-blur-lg md:hidden"
          >
            <div className="container mx-auto flex flex-col space-y-5 px-6 py-6">
              <Link
                href="/#home"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                About
              </Link>

              <Link
                href="/#experience"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Experience
              </Link>

              <Link
                href="/#services"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Portfolio
              </Link>

              <Link
                href="/#contact"
                className="py-2 text-lg font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {children}

        {/* Mobile Navigation Behaviour */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function () {
                const menuButton = document.getElementById('mobile-menu-button');
                const mobileMenu = document.getElementById('mobile-menu');

                if (!menuButton || !mobileMenu) return;

                function closeMenu() {
                  mobileMenu.classList.add('hidden');
                  menuButton.setAttribute('aria-expanded', 'false');
                  menuButton.setAttribute('aria-label', 'Open navigation menu');
                }

                function openMenu() {
                  mobileMenu.classList.remove('hidden');
                  menuButton.setAttribute('aria-expanded', 'true');
                  menuButton.setAttribute('aria-label', 'Close navigation menu');
                }

                menuButton.addEventListener('click', function (event) {
                  event.stopPropagation();

                  const isOpen =
                    menuButton.getAttribute('aria-expanded') === 'true';

                  if (isOpen) {
                    closeMenu();
                  } else {
                    openMenu();
                  }
                });

                mobileMenu.querySelectorAll('a').forEach(function (link) {
                  link.addEventListener('click', closeMenu);
                });

                document.addEventListener('click', function (event) {
                  const target = event.target;

                  if (
                    target instanceof Node &&
                    !mobileMenu.contains(target) &&
                    !menuButton.contains(target)
                  ) {
                    closeMenu();
                  }
                });

                document.addEventListener('keydown', function (event) {
                  if (event.key === 'Escape') {
                    closeMenu();
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}