import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lauritalk Web | Admin & Management Platform",
  description:
    "Lauritalk Web is the web-based administration and management platform supporting the Lauritalk ecosystem, including users, subscriptions, data processing and platform monitoring.",
};

const features = [
  {
    title: "User Management",
    description:
      "Administrative tools for managing users and supporting account-related operations across the Lauritalk ecosystem.",
  },
  {
    title: "Subscription Control",
    description:
      "Centralized functionality for managing subscription access and supporting the platform's paid user experience.",
  },
  {
    title: "Data Processing",
    description:
      "Backend-connected functionality designed to support the processing and management of platform data.",
  },
  {
    title: "Monitoring Tools",
    description:
      "Administrative visibility into important platform activity and operational information.",
  },
];

const responsibilities = [
  "Web Platform Architecture",
  "Admin Dashboard Development",
  "Backend Integration",
  "User Management",
  "Subscription Management",
  "Operational Workflows",
];

const whatsappMessage = encodeURIComponent(
  "Hi Eric, I saw the Lauritalk Web platform on your portfolio. I have a web platform, dashboard or backend system I'd like to discuss with you."
);

const whatsappUrl = `https://wa.me/237693066656?text=${whatsappMessage}`;

export default function LauritalkWeb() {
  return (
    <main className="min-h-screen bg-slate-900 pb-20 pt-28 text-white">
      {/* Hero */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Portfolio
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-emerald-400/40 bg-emerald-950/60 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300">
                  LIVE
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Web Platform
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Admin Dashboard
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  SaaS
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Lauritalk <span className="text-cyan-400">Web</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                The web-based administration and management platform
                supporting the Lauritalk ecosystem behind the mobile
                translation experience.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Full-Stack Development • Product Architecture
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.lauritalk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Visit Platform ↗
                </a>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Discuss a Web Platform
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/lauritalk-web/cover.png"
                alt="Lauritalk Web administration platform"
                width={1200}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="mt-24 border-y border-slate-800 bg-slate-950/40 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Challenge
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              A mobile product also needs an operational backbone
            </h2>

            <p className="leading-relaxed text-slate-300">
              Running a multilingual translation product involves more than
              the user-facing mobile application. The ecosystem also requires
              tools for managing users, subscriptions, platform data and
              day-to-day operations from a centralized environment.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Solution
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              A dedicated web platform behind Lauritalk
            </h2>

            <p className="leading-relaxed text-slate-300">
              Lauritalk Web provides the administrative layer needed to
              support the wider Lauritalk ecosystem. It centralizes important
              management functions so platform operations can be handled
              through a structured web-based experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Core Functionality
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Managing the platform behind the product
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              The web platform brings important administrative and operational
              functions into one environment rather than leaving them
              scattered across disconnected processes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7 transition hover:border-cyan-500/50"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 font-bold text-cyan-400">
                  ✓
                </div>

                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>

                <p className="leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Relationship */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Product Ecosystem
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                The operational side of Lauritalk
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                While the Lauritalk mobile application focuses on the
                translation experience for end users, Lauritalk Web supports
                the management and operational side of the ecosystem. Together
                they form different parts of the same product infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Contribution
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Building the systems behind the user experience
              </h2>
            </div>

            <div>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                My work on Lauritalk Web focused on the architecture and
                implementation of the web-based systems required to support
                the wider product, including administrative workflows and
                connections between the platform&apos;s user-facing and
                operational components.
              </p>

              <div className="flex flex-wrap gap-3">
                {responsibilities.map((responsibility) => (
                  <span
                    key={responsibility}
                    className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200"
                  >
                    {responsibility}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Status */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Current Status
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Live as part of the Lauritalk ecosystem
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                Lauritalk Web provides the web-based platform supporting
                administrative and operational functions within the wider
                Lauritalk product ecosystem.
              </p>
            </div>

            <a
              href="https://www.lauritalk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Visit Platform ↗
            </a>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Need a Platform Behind Your Product?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s build the systems that make it work.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            I build web platforms, dashboards, backend-connected systems and
            digital products for startups, businesses and growing technology
            ecosystems.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Conversation
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-500"
            >
              Contact on WhatsApp
            </a>

            <Link
              href="/portfolio"
              className="rounded-lg border border-slate-600 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}