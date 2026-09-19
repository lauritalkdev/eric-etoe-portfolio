import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dessetra | Web3 Education & Community Platform",
  description:
    "Dessetra is a Web3 education and community platform built around learning, connection, premium access, referrals and structured digital participation.",
};

const features = [
  {
    title: "User Dashboard",
    description:
      "A central area where users can manage their account, access platform sections and follow their activity.",
  },
  {
    title: "Web3 Learning",
    description:
      "Structured educational access covering Web3 tools, security, wallets, exchanges and digital participation.",
  },
  {
    title: "Referral System",
    description:
      "Referral tracking designed to support community growth and reward-based user acquisition.",
  },
  {
    title: "Premium Access",
    description:
      "Subscription-based access that unlocks additional learning and platform participation opportunities.",
  },
  {
    title: "Activity Tracking",
    description:
      "Dashboard functionality for giving users visibility into relevant platform records and participation.",
  },
  {
    title: "Admin Control",
    description:
      "Backend management functionality for monitoring users, access, activity and platform operations.",
  },
];

const platformFocus = [
  {
    title: "Learn",
    description:
      "Structured education designed to help users understand digital markets and Web3 before taking on risk.",
  },
  {
    title: "Connect",
    description:
      "Community infrastructure that brings users, learning and participation together within one ecosystem.",
  },
  {
    title: "Earn",
    description:
      "Structured opportunities and platform systems designed around participation, referrals and progression.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hi Eric, I saw the Dessetra project on your portfolio. I have a platform or digital product I'd like to discuss with you."
);

const whatsappUrl = `https://wa.me/237693066656?text=${whatsappMessage}`;

export default function Dessetra() {
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
                  Web3
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Fintech
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  EdTech
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-cyan-400">Dessetra</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                A Web3 education and community platform designed around a
                simple idea: help people learn before taking on risk, connect
                within a structured ecosystem and participate through one
                integrated digital platform.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Full-Stack Development • Platform Architecture
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.dessetra.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Visit Live Platform ↗
                </a>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Discuss a Project
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/dessetra/cover.png"
                alt="Dessetra Web3 education and community platform"
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
              Making Web3 participation easier to understand
            </h2>

            <p className="leading-relaxed text-slate-300">
              People entering Web3 can face a fragmented experience involving
              education, wallets, exchanges, security practices, subscriptions
              and community participation. Without a clear structure,
              onboarding can quickly become confusing.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Solution
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              One structured platform for learning and participation
            </h2>

            <p className="leading-relaxed text-slate-300">
              Dessetra brings learning, user accounts, premium access,
              referrals, activity tracking and administrative functionality
              into one organized platform. The result is a clearer experience
              for users and a more manageable system for platform operations.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Focus */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Platform Focus
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Learn. Connect. Earn.
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              The product experience is organized around three core pillars
              that guide how users interact with the Dessetra ecosystem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {platformFocus.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-lg font-bold text-cyan-400">
                  {item.title.charAt(0)}
                </div>

                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Core Functionality
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              More than a public-facing website
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Dessetra combines the public experience with authenticated user
              functionality and backend systems needed to operate a growing
              digital platform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition hover:border-cyan-500/50"
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

      {/* Role */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Contribution
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                From platform structure to implementation
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                I worked on the platform implementation, architecture, user
                experience, dashboard flow and key functional areas required
                to support Dessetra&apos;s education and community model.
              </p>

              <p>
                The project required balancing a straightforward user
                experience with backend logic for accounts, access,
                subscriptions, referrals, tracking and administrative
                operations.
              </p>
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
                Live and accessible online
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                Dessetra is a live client platform with its learning,
                community and account experience available through the
                production website.
              </p>
            </div>

            <a
              href="https://www.dessetra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore Dessetra ↗
            </a>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Have a Similar Idea?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s turn it into a working product.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            I build practical web platforms, dashboards and digital systems
            for businesses, startups and communities. Choose whichever way is
            easiest to start the conversation.
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