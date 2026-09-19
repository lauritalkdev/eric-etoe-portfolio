import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  tags: string[];
  status: string;
  image: string;
  link?: string;
  live?: string;
  liveLabel?: string;
  description: string;
  role: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Lauritalk",
    tags: ["AI", "Translation", "Mobile"],
    status: "LIVE",
    image: "/projects/lauritalk/cover.png",
    link: "/portfolio/lauritalk",
    live:
      "https://play.google.com/store/apps/details?id=com.luminix.lauritalk",
    liveLabel: "View on Play Store",
    description:
      "AI-powered translation platform supporting 150+ languages, including African dialects, with a focus on making communication more inclusive.",
    role: "Co-Founder • Full-Stack / AI Product Development",
    featured: true,
  },
  {
    title: "Dessetra",
    tags: ["Fintech", "EdTech", "Web Platform"],
    status: "LIVE",
    image: "/projects/dessetra/cover.png",
    link: "/portfolio/dessetra",
    live: "https://www.dessetra.com",
    liveLabel: "Visit Platform",
    description:
      "A digital learning and fintech platform combining financial education, community participation and structured earning opportunities.",
    role: "Full-Stack Development • Platform Architecture",
    featured: true,
  },
  {
    title: "KUPEXSA Connect",
    tags: ["Community Tech", "Alumni", "Web Platform"],
    status: "LIVE",
    image: "/projects/kupexsa/cover.png",
    live: "https://www.kupexsa.org",
    liveLabel: "Visit Platform",
    description:
      "A digital platform built to connect ex-students, support alumni participation and modernize community activities including chapter meeting attendance.",
    role: "Full-Stack Development • Product Architecture",
    featured: true,
  },
  {
    title: "Lumora Wallet",
    tags: ["Web3", "DeFi", "Multi-Chain Wallet"],
    status: "IN DEVELOPMENT",
    image: "/projects/lumora/cover.png",
    description:
      "A decentralized multi-chain wallet being built to support 14 major blockchain networks, token management and same-chain and cross-chain swaps.",
    role: "Product Architecture • Full-Stack Web3 Development",
    featured: true,
  },
  {
    title: "Luminix",
    tags: ["AI", "Web3", "Technology"],
    status: "LIVE",
    image: "/projects/luminix/cover.png",
    link: "/portfolio/luminix",
    live: "https://www.luminix.space",
    liveLabel: "Visit Website",
    description:
      "Technology company focused on turning real-world problems into intelligent products using AI, Web3 and modern digital infrastructure.",
    role: "Founder / Lead Developer • Product & Technology Strategy",
  },
  {
    title: "Lauritalk Web",
    tags: ["AI", "SaaS", "Web Platform"],
    status: "LIVE",
    image: "/projects/lauritalk-web/cover.png",
    link: "/portfolio/lauritalk-web",
    live: "https://www.lauritalk.com",
    liveLabel: "Visit Platform",
    description:
      "The web platform and supporting digital infrastructure behind the Lauritalk translation ecosystem.",
    role: "Full-Stack Development • Product Architecture",
  },
  {
    title: "WordBuild",
    tags: ["Personal Brand", "Web Development"],
    status: "LIVE",
    image: "/projects/wordbuild/cover.png",
    link: "/portfolio/wordbuild",
    live: "https://www.emmanuellatheophilus.com",
    liveLabel: "Visit Website",
    description:
      "A professional personal-branding and portfolio website designed to establish a strong digital presence.",
    role: "Web Development • UI Implementation",
  },
];

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-slate-900 px-6 pb-20 pt-28 text-white">
      {/* Hero */}
      <section className="mx-auto mb-16 max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Selected Work
        </p>

        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Products & Platforms{" "}
          <span className="text-cyan-400">I&apos;ve Built</span>
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          From AI and Web3 to fintech, business platforms and community
          technology — a selection of products I&apos;ve built, led or helped
          bring to life.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto mb-20 max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-3xl font-bold">
            Products solving real problems
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/20"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`${project.title} project cover`}
                  width={1200}
                  height={720}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.02] md:h-72"
                />

                <div className="absolute right-4 top-4">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wide backdrop-blur-md ${
                      project.status === "LIVE"
                        ? "border-emerald-400/40 bg-emerald-950/80 text-emerald-300"
                        : "border-amber-400/40 bg-amber-950/80 text-amber-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-2xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-5 leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 border-l-2 border-cyan-500/60 pl-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    My Role
                  </p>

                  <p className="text-sm font-medium text-slate-200">
                    {project.role}
                  </p>
                </div>

                {project.title === "Lumora Wallet" && (
                  <div className="mb-6 rounded-xl border border-slate-700 bg-slate-900/60 p-4">
                    <p className="text-sm leading-relaxed text-slate-300">
                      Initial scope includes support for 14 major blockchain
                      networks such as BNB Chain, Ethereum, Bitcoin and
                      Electroneum, with Lauric Coin available as a default
                      token. A decentralized launchpad is also planned as part
                      of the platform&apos;s future expansion.
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="rounded-lg bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      View Case Study
                    </Link>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-600 px-5 py-2.5 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                    >
                      {project.liveLabel}
                    </a>
                  )}

                  {project.title === "Lumora Wallet" && (
                    <span className="text-sm font-medium text-amber-300">
                      Play Store release coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More Work */}
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            More Work
          </p>

          <h2 className="text-3xl font-bold">
            Websites, platforms & digital products
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={`${project.title} project cover`}
                  width={1000}
                  height={600}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute right-4 top-4">
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-950/80 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300 backdrop-blur-md">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-3 text-xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-5 flex-1 leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 border-l-2 border-cyan-500/60 pl-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    My Role
                  </p>

                  <p className="text-sm font-medium text-slate-200">
                    {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <Link
                      href={project.link}
                      className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                    >
                      Case Study →
                    </Link>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-400 transition hover:text-emerald-300"
                    >
                      {project.liveLabel} ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Opportunity CTA */}
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-12 text-center shadow-2xl md:px-12 md:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Build With Me
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Have a product, platform or venture in mind?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            I&apos;m open to product development, AI and Web3 projects,
            technical partnerships, strategic collaborations and selected
            venture opportunities.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Start a Conversation
            </Link>

            <a
              href="mailto:godsgeneraleric247@gmail.com?subject=Project%20or%20Partnership%20Inquiry"
              className="rounded-lg border border-cyan-400 px-7 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              Email Me
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            godsgeneraleric247@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}