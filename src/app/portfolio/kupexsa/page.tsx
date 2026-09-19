import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KUPEXSA Connect | Alumni & Community Platform",
  description:
    "KUPEXSA Connect is a digital alumni and community platform built to connect ex-students, improve participation and modernize chapter activities.",
};

const features = [
  {
    title: "Alumni Accounts",
    description:
      "Ex-students can create accounts and become part of the digital KUPEXSA community.",
  },
  {
    title: "Community Connection",
    description:
      "A central digital platform that helps bring members and chapter activities into one connected environment.",
  },
  {
    title: "Meeting Attendance",
    description:
      "Digital attendance functionality helps chapters record participation during physical chapter meetings.",
  },
  {
    title: "Chapter Participation",
    description:
      "The platform supports a more organized approach to member participation and association activities.",
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
];

const screenshots = [
  {
    src: "/projects/kupexsa/screen1.png",
    alt: "KUPEXSA Connect platform screen",
  },
  {
    src: "/projects/kupexsa/screen2.png",
    alt: "KUPEXSA Connect member experience",
  },
  {
    src: "/projects/kupexsa/screen3.png",
    alt: "KUPEXSA Connect platform functionality",
  },
];

export default function KupexsaCaseStudy() {
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
                  Community Tech
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Alumni
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Web Platform
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                KUPEXSA <span className="text-cyan-400">Connect</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                A digital alumni and community platform built to connect
                ex-students, improve participation and bring key association
                activities into one accessible digital environment.
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
                  href="https://www.kupexsa.org"
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
                  Build Something Similar
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/kupexsa/cover.png"
                alt="KUPEXSA Connect platform"
                width={1200}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mt-24 border-y border-slate-800 bg-slate-950/40 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Challenge
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Moving alumni participation beyond disconnected processes
            </h2>

            <p className="leading-relaxed text-slate-300">
              Alumni associations depend on participation, communication and
              accurate member information. When activities such as member
              onboarding and meeting attendance rely heavily on manual or
              disconnected processes, managing an active community becomes
              more difficult as participation grows.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Solution
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              One digital platform for the KUPEXSA community
            </h2>

            <p className="leading-relaxed text-slate-300">
              KUPEXSA Connect provides ex-students with a dedicated digital
              platform where they can create accounts, connect with the
              association and participate in digitized community processes.
              Meeting attendance functionality also helps chapters move away
              from purely manual attendance recording.
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
              Built around the alumni community
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              The platform focuses on making membership and chapter
              participation easier to manage digitally while keeping the
              experience straightforward for ex-students.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              Platform Experience
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              A closer look at KUPEXSA Connect
            </h2>
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

      {/* Technology */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Technology
              </p>

              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Built for a modern web experience
              </h2>

              <p className="leading-relaxed text-slate-300">
                The platform combines a modern web interface with backend and
                database infrastructure designed to support member accounts,
                community data and digital participation.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status / Result */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-500/20 bg-slate-800 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Current Status
              </p>

              <h2 className="mb-4 text-3xl font-bold">
                Live and available to the KUPEXSA community
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                KUPEXSA Connect is live, giving ex-students a dedicated online
                platform for registration and digital participation while
                supporting the association&apos;s move toward more organized
                technology-enabled community processes.
              </p>
            </div>

            <a
              href="https://www.kupexsa.org"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore KUPEXSA ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Have a Similar Idea?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s turn it into a working product.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether it&apos;s a community platform, business system, AI
            product or Web3 application, I&apos;m open to development and
            technical partnership opportunities.
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