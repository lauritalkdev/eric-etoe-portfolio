import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lauritalk | AI-Powered Multilingual Translation App",
  description:
    "Lauritalk is an AI-powered multilingual translation app supporting 150+ languages, including African dialects, with text, voice, chat and language-learning experiences.",
};

const features = [
  {
    title: "150+ Languages",
    description:
      "Translation support across major global languages while extending access to selected African dialects.",
  },
  {
    title: "Text Translation",
    description:
      "Translate written text across supported languages through a straightforward mobile experience.",
  },
  {
    title: "Chat Translation",
    description:
      "Translate conversations to help people communicate across different languages.",
  },
  {
    title: "Voice Translation",
    description:
      "Use speech-based translation modes for more natural multilingual communication.",
  },
  {
    title: "Text & Speech Modes",
    description:
      "Multiple translation modes support different communication situations, including text and spoken interactions.",
  },
  {
    title: "Language Learning",
    description:
      "An integrated learning experience helps users go beyond translation and begin learning new languages.",
  },
];

const impactAreas = [
  {
    title: "Communication",
    description:
      "Helps reduce language barriers in everyday conversations, travel and cross-border interaction.",
  },
  {
    title: "African Language Inclusion",
    description:
      "Extends the product beyond major international languages by supporting selected African dialects.",
  },
  {
    title: "Learning",
    description:
      "Combines translation with language-learning experiences to make the product useful beyond one-time translations.",
  },
];

const screenshots = [
  {
    src: "/projects/lauritalk/screen1.png",
    alt: "Lauritalk multilingual translation interface",
  },
  {
    src: "/projects/lauritalk/screen2.png",
    alt: "Lauritalk translation modes",
  },
  {
    src: "/projects/lauritalk/screen3.png",
    alt: "Lauritalk mobile translation experience",
  },
  {
    src: "/projects/lauritalk/screen4.png",
    alt: "Lauritalk voice translation experience",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hi Eric, I saw the Lauritalk AI translation app on your portfolio. I have an AI or mobile app project I'd like to discuss with you."
);

const whatsappUrl = `https://wa.me/237693066656?text=${whatsappMessage}`;

export default function Lauritalk() {
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
                  AI
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Translation
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Mobile App
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-cyan-400">Lauritalk</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                An AI-powered multilingual translation application built to
                make communication easier across 150+ languages while
                extending digital language access to selected African
                dialects.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Co-Founder • Full-Stack / AI Product Development
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.luminix.lauritalk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  View on Google Play ↗
                </a>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Discuss an AI Project
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/lauritalk/cover.png"
                alt="Lauritalk AI-powered multilingual translation app"
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
              Language technology doesn&apos;t serve every community equally
            </h2>

            <p className="leading-relaxed text-slate-300">
              Language barriers affect travel, business and everyday
              communication. While mainstream translation tools cover many
              major languages, numerous African language communities remain
              less represented in widely used digital translation products.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Solution
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Translation built for broader language inclusion
            </h2>

            <p className="leading-relaxed text-slate-300">
              Lauritalk combines AI-powered translation with text, voice and
              conversational experiences in a single mobile application. It
              supports more than 150 languages while incorporating selected
              African dialects into the product experience.
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
              Multiple ways to communicate across languages
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              Lauritalk was designed around different real-world communication
              needs rather than limiting users to a single translation mode.
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

      {/* Screenshots */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Product Experience
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Inside the Lauritalk app
            </h2>

            <p className="max-w-3xl leading-relaxed text-slate-300">
              The mobile experience brings different translation modes into
              one interface so users can choose the interaction that best fits
              the situation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-xl"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1000}
                  height={700}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Product Impact
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Technology designed around communication and inclusion
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {impactAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7"
              >
                <h3 className="mb-3 text-xl font-bold text-cyan-300">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Contribution */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Contribution
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Building the product across mobile, AI and backend systems
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              <p>
                As Co-Founder and developer, I worked across the product
                experience, application architecture and translation
                functionality required to bring Lauritalk from concept into a
                working mobile product.
              </p>

              <p>
                The project combines mobile development, AI-powered language
                services, backend infrastructure and product design while
                keeping the user experience straightforward for everyday
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Status */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Current Status
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Available on Google Play
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                Lauritalk has progressed from product concept and development
                into a publicly available mobile application, with continued
                development focused on expanding its language and product
                experience.
              </p>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.luminix.lauritalk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              View on Google Play ↗
            </a>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Have an AI Product Idea?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s turn it into a working product.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you&apos;re building an AI application, mobile product,
            SaaS platform or another intelligent digital solution, I&apos;m
            open to development and technical partnership opportunities.
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