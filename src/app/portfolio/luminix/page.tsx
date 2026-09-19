import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luminix | AI, Web3 & Intelligent Product Development",
  description:
    "Luminix is a technology company turning real-world problems into intelligent products through AI, Web3, full-stack development and strategic technology partnerships.",
};

const capabilities = [
  {
    title: "AI Solutions",
    description:
      "Applying artificial intelligence to build practical products, automate workflows and solve real business and user problems.",
  },
  {
    title: "Web3 Development",
    description:
      "Building blockchain-enabled products and decentralized solutions designed around real-world use cases.",
  },
  {
    title: "Web & Mobile Products",
    description:
      "Developing complete digital products across modern web and mobile experiences, from concept through implementation.",
  },
  {
    title: "Product Architecture",
    description:
      "Designing the technical structure, systems and workflows required to turn an idea into a scalable working product.",
  },
  {
    title: "Technology Integration",
    description:
      "Connecting APIs, payment systems, backend services and other technologies into unified digital experiences.",
  },
  {
    title: "Strategic Tech Partnerships",
    description:
      "Working with founders, businesses and organizations as a technical partner to build and evolve digital products.",
  },
];

const products = [
  {
    name: "Lauritalk",
    category: "AI Translation",
    description:
      "An AI-powered multilingual translation product supporting 150+ languages while extending access to selected African dialects.",
    href: "/portfolio/lauritalk",
  },
  {
    name: "Lauriplay",
    category: "Learn & Earn",
    description:
      "A product within the wider Luminix ecosystem focused on combining digital learning with participation and earning opportunities.",
  },
  {
    name: "Lauriconnect",
    category: "Digital Marketplace",
    description:
      "A marketplace concept within the Luminix ecosystem designed around digital connection and commerce.",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hi Eric, I saw Luminix on your portfolio. I have a technology product, AI/Web3 project or strategic partnership opportunity I'd like to discuss with you."
);

const whatsappUrl = `https://wa.me/237693066656?text=${whatsappMessage}`;

export default function Luminix() {
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
                  ACTIVE
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  AI
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Web3
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Technology
                </span>
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-cyan-400">Luminix</span>
              </h1>

              <p className="mb-4 text-2xl font-semibold leading-relaxed text-slate-100">
                Turning problems into intelligent products.
              </p>

              <p className="mb-7 text-lg leading-relaxed text-slate-300 md:text-xl">
                A technology company focused on building practical digital
                products and solutions at the intersection of AI, Web3 and
                modern software development.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Founder / Lead Developer • Product & Technology Strategy
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.luminix.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Visit Luminix ↗
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
                src="/projects/luminix/cover.png"
                alt="Luminix technology company website"
                width={1200}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Approach */}
      <section className="mt-24 border-y border-slate-800 bg-slate-950/40 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Problem
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Technology only matters when it solves something
            </h2>

            <p className="leading-relaxed text-slate-300">
              Businesses, founders and organizations often know they need
              better technology, but the real challenge is identifying what
              should be built and connecting the right systems around the
              underlying problem. Adding more features alone does not
              necessarily create a better product or business.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Luminix Approach
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Start with the problem. Then build the product.
            </h2>

            <p className="leading-relaxed text-slate-300">
              Luminix approaches technology from a product-first perspective:
              understand the problem, identify where technology creates real
              value, design the right solution and then build the systems
              required to make that solution work.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              What We Build
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              From ideas to working technology
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              Luminix combines product thinking, software engineering and
              emerging technologies to build practical solutions for
              businesses, founders and organizations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7 transition hover:border-cyan-500/50"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 font-bold text-cyan-400">
                  ✓
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {capability.title}
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Role */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Contribution
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Founder, builder and technical lead
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                As Founder and Lead Developer, my role spans both the technical
                and product sides of Luminix — from identifying opportunities
                and shaping product direction to architecture, development and
                implementation.
              </p>

              <p>
                The goal is not simply to deliver features. It is to understand
                the problem being solved, determine the technology required
                and turn that thinking into products people and organizations
                can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Product Ecosystem
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Products being built under Luminix
            </h2>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Luminix also serves as the product-building environment behind
              technology initiatives designed around communication, learning,
              digital participation and commerce.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col rounded-2xl border border-slate-700 bg-slate-800 p-7"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {product.category}
                </p>

                <h3 className="mb-3 text-2xl font-bold">{product.name}</h3>

                <p className="mb-6 flex-1 leading-relaxed text-slate-300">
                  {product.description}
                </p>

                {product.href && (
                  <Link
                    href={product.href}
                    className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    View Case Study →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Beyond Development
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Technology partnership, not just coding
              </h2>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-slate-300">
                Luminix is positioned to work with founders, startups,
                businesses and organizations that need more than isolated
                development tasks. That can include product development,
                technical architecture, AI or Web3 implementation and
                longer-term strategic technology collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Have a Problem Worth Solving?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s turn it into an intelligent product.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you&apos;re building an AI product, Web3 platform,
            business system or looking for a technical partner, let&apos;s
            discuss what you&apos;re trying to create.
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