import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lumora Wallet | Decentralized Multi-Chain Web3 Wallet",
  description:
    "Lumora Wallet is a decentralized multi-chain Web3 wallet in development, designed to support 14 major blockchain networks, token management, swaps and an upcoming decentralized launchpad.",
};

const features = [
  {
    title: "14 Blockchain Networks",
    description:
      "Designed to support 14 major blockchain networks from its initial release, creating a broader multi-chain wallet experience.",
  },
  {
    title: "Multi-Asset Management",
    description:
      "Users can manage supported blockchain assets from one wallet experience instead of relying on separate wallets for individual networks.",
  },
  {
    title: "Same-Chain Swaps",
    description:
      "Built to support token swaps between compatible assets operating within the same blockchain ecosystem.",
  },
  {
    title: "Cross-Chain Swaps",
    description:
      "Designed to enable swaps across supported blockchain networks, extending the wallet beyond basic asset storage and transfers.",
  },
  {
    title: "Lauric Coin Integration",
    description:
      "Lauric Coin is integrated as one of the wallet's default supported tokens within the Lumora ecosystem.",
  },
  {
    title: "Decentralized Architecture",
    description:
      "Built around a decentralized wallet model that gives users direct interaction with supported blockchain networks and digital assets.",
  },
];

const networks = [
  "Bitcoin",
  "Ethereum",
  "BNB Chain",
  "Electroneum",
  "10 Additional Networks",
];

const screenshots = [
  {
    src: "/projects/lumora/screen1.png",
    alt: "Lumora Wallet interface",
  },
  {
    src: "/projects/lumora/screen2.png",
    alt: "Lumora Wallet multi-chain asset experience",
  },
  {
    src: "/projects/lumora/screen3.png",
    alt: "Lumora Wallet Web3 functionality",
  },
];

export default function LumoraCaseStudy() {
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
                <span className="rounded-full border border-amber-400/40 bg-amber-950/60 px-3 py-1 text-xs font-bold tracking-wide text-amber-300">
                  IN DEVELOPMENT
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Web3
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  DeFi
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Multi-Chain
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Lumora <span className="text-cyan-400">Wallet</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                A decentralized multi-chain wallet being built to bring asset
                management, blockchain interaction and token swaps across
                multiple networks into one Web3 experience.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Product Architecture • Full-Stack Web3 Development
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <span className="rounded-lg bg-amber-500/10 px-6 py-3 text-center font-semibold text-amber-300 ring-1 ring-inset ring-amber-400/30">
                  Play Store Release Coming Soon
                </span>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Discuss a Web3 Project
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/lumora/cover.png"
                alt="Lumora decentralized multi-chain wallet"
                width={1200}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Vision */}
      <section className="mt-24 border-y border-slate-800 bg-slate-950/40 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Challenge
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Web3 assets increasingly exist across multiple networks
            </h2>

            <p className="leading-relaxed text-slate-300">
              A multi-chain Web3 user may interact with different blockchain
              networks, assets and decentralized services. Managing those
              interactions across separate environments creates unnecessary
              fragmentation in the wallet experience.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Vision
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              One decentralized wallet across multiple ecosystems
            </h2>

            <p className="leading-relaxed text-slate-300">
              Lumora Wallet is being developed as a multi-chain environment
              where supported assets and blockchain interactions can be
              managed through a unified experience, while expanding into
              additional decentralized financial functionality over time.
            </p>
          </div>
        </div>
      </section>

      {/* Network Support */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Multi-Chain Foundation
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                14 major blockchain networks from the start
              </h2>

              <p className="leading-relaxed text-slate-300">
                Lumora&apos;s initial architecture is designed around support
                for 14 major blockchain networks, giving the wallet a
                multi-chain foundation rather than limiting it to a single
                ecosystem.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {networks.map((network) => (
                <div
                  key={network}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 font-semibold text-slate-200"
                >
                  {network}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Wallet Capabilities
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Built beyond basic asset storage
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              The wallet is being designed as a broader Web3 product where
              users can manage supported assets and interact across multiple
              blockchain ecosystems.
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

      {/* Lauric Coin */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-slate-800 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Ecosystem Integration
                </p>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Lauric Coin built into the wallet experience
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-slate-300">
                Alongside supported blockchain assets, Lauric Coin is included
                as a default token within Lumora Wallet, giving it native
                visibility within the wallet&apos;s growing digital-asset
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Product Preview
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Inside Lumora Wallet
            </h2>

            <p className="max-w-3xl leading-relaxed text-slate-300">
              A preview of the wallet experience while the product continues
              through development ahead of its public release.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launchpad */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-purple-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Coming Next
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Lumora Launchpad
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                A decentralized launchpad is planned as part of Lumora&apos;s
                next stage of development, expanding the product beyond wallet
                functionality into a broader Web3 ecosystem.
              </p>
            </div>

            <span className="rounded-full border border-purple-400/30 bg-purple-950/30 px-5 py-3 text-center text-sm font-bold text-purple-300">
              UPCOMING
            </span>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-amber-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                Current Status
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                In development ahead of public release
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                Lumora Wallet is currently under development and is not yet
                listed on Google Play. Development is focused on completing
                the wallet experience and its initial multi-chain
                functionality before public release.
              </p>
            </div>

            <div className="rounded-xl border border-amber-400/30 bg-amber-950/20 px-6 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Google Play
              </p>

              <p className="mt-1 font-bold text-amber-200">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Building in Web3?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s turn the concept into a working product.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            I&apos;m open to Web3 development, blockchain products, technical
            partnerships and selected venture opportunities.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Conversation
            </Link>

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