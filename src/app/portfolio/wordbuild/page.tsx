import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WordBuild | Personal Branding Platform",
  description:
    "WordBuild is a professional personal-branding platform designed to help professionals present their expertise, services and authority through a strong digital presence.",
};

const services = [
  {
    title: "Content Strategy",
    description:
      "Presents a structured approach to helping professionals communicate their expertise and ideas effectively.",
  },
  {
    title: "Ghostwriting",
    description:
      "Showcases professional writing support designed to turn expertise and ideas into compelling content.",
  },
  {
    title: "Brand Voice Development",
    description:
      "Communicates services focused on developing a clear and recognizable professional voice.",
  },
  {
    title: "Authority Building",
    description:
      "Positions the brand around helping professionals strengthen their credibility and digital presence.",
  },
];

const developmentFocus = [
  "Responsive Web Development",
  "UI Implementation",
  "Personal Brand Presentation",
  "Service Presentation",
  "Content Structure",
  "Conversion-Focused Experience",
];

const whatsappMessage = encodeURIComponent(
  "Hi Eric, I saw the WordBuild project on your portfolio. I need a professional website or personal brand platform and I'd like to discuss it with you."
);

const whatsappUrl = `https://wa.me/237693066656?text=${whatsappMessage}`;

export default function WordBuild() {
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
                  Personal Brand
                </span>

                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300">
                  Web Development
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-cyan-400">WordBuild</span>
              </h1>

              <p className="mb-6 text-xl leading-relaxed text-slate-300">
                A professional personal-branding platform designed to present
                expertise, services and thought leadership through a clear and
                credible digital presence.
              </p>

              <div className="mb-8 border-l-2 border-cyan-500 pl-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  My Role
                </p>

                <p className="font-semibold text-slate-100">
                  Web Development • UI Implementation
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.emmanuellatheophilus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Visit Website ↗
                </a>

                <Link
                  href="/#contact"
                  className="rounded-lg border border-cyan-400 px-6 py-3 text-center font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  Discuss a Website
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
              <Image
                src="/projects/wordbuild/cover.png"
                alt="WordBuild personal branding website"
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
              Expertise needs a strong digital presence
            </h2>

            <p className="leading-relaxed text-slate-300">
              Professionals may have valuable knowledge, experience and
              services but still struggle to present that expertise clearly
              online. Without a structured digital presence, potential clients
              and audiences may not immediately understand who they are, what
              they offer or why their expertise matters.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Solution
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Turn professional expertise into a digital brand
            </h2>

            <p className="leading-relaxed text-slate-300">
              WordBuild provides a focused web presence for presenting
              professional expertise and personal-branding services. The
              website organizes the brand, message and service offering into
              an experience that visitors can quickly understand and explore.
            </p>
          </div>
        </div>
      </section>

      {/* Services Presented */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Platform Focus
            </p>

            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Building professional authority online
            </h2>

            <p className="text-lg leading-relaxed text-slate-300">
              The platform presents a range of personal-branding services
              designed around communicating expertise, developing a
              recognizable voice and strengthening professional visibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-7 transition hover:border-cyan-500/50"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 font-bold text-cyan-400">
                  ✓
                </div>

                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

                <p className="leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Development Contribution */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                My Contribution
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Turning the brand into a professional web experience
              </h2>
            </div>

            <div>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                My role focused on translating the personal-brand concept and
                content into a working digital experience. The development
                work centered on presenting the brand clearly, structuring the
                website around its services and creating an interface that
                supports professional credibility.
              </p>

              <div className="flex flex-wrap gap-3">
                {developmentFocus.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover / Product View */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Website Experience
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              A focused home for the professional brand
            </h2>

            <p className="max-w-3xl leading-relaxed text-slate-300">
              The website brings the professional identity, positioning and
              service offering together within one accessible online
              destination.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
            <Image
              src="/projects/wordbuild/cover.png"
              alt="WordBuild professional personal branding platform"
              width={1400}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Value */}
      <section className="border-y border-slate-800 bg-slate-950/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Project Value
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                More than simply putting information online
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                A professional website should help visitors understand the
                person behind the brand, the value they provide and the next
                action to take. WordBuild demonstrates how development and
                presentation can work together to create a stronger digital
                identity.
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
                Live and publicly accessible
              </h2>

              <p className="max-w-3xl leading-relaxed text-slate-300">
                The WordBuild website is live and serves as the online
                destination for the professional brand and its personal
                branding services.
              </p>
            </div>

            <a
              href="https://www.emmanuellatheophilus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-7 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Visit Website ↗
            </a>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Need a Professional Digital Presence?
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Let&apos;s build something that represents your value.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Whether you need a professional website, personal brand platform
            or another digital product, I can help turn the idea into a
            polished working experience.
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