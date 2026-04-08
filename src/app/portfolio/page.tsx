'use client'

import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'Lauritalk',
    category: 'Mobile App',
    image: '/projects/lauritalk/cover.png',
    link: '/portfolio/lauritalk',
    live: 'https://play.google.com/store/apps/details?id=com.luminix.lauritalk',
    description: 'AI-powered translation app supporting 150+ languages including African dialects.'
  },
  {
    title: 'Luminix',
    category: 'Website',
    image: '/projects/luminix/cover.png',
    link: '/portfolio/luminix',
    live: 'https://www.luminix.space',
    description: 'AI & Web3 infrastructure company.'
  },
  {
    title: 'Lauritalk Web',
    category: 'Website',
    image: '/projects/lauritalk-web/cover.png',
    link: '/portfolio/lauritalk-web',
    live: 'https://www.lauritalk.com',
    description: 'Dashboard and backend system for Lauritalk.'
  },
  {
    title: 'WordBuild',
    category: 'Website',
    image: '/projects/wordbuild/cover.png',
    link: '/portfolio/wordbuild',
    live: 'https://www.emmanuellatheophilus.com',
    description: 'Personal branding and portfolio website.'
  }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-cyan-400">Portfolio</span>
      </h1>

      {/* Mobile Apps */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Mobile Apps</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => p.category === 'Mobile App').map((project, i) => (
            <div key={i} className="bg-slate-800 rounded-xl overflow-hidden group hover:scale-105 transition">

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-blue-300 mt-2">{project.description}</p>

                <div className="flex gap-4 mt-4">
                  <Link href={project.link} className="text-cyan-400 hover:underline">
                    Case Study →
                  </Link>

                  <a href={project.live} target="_blank" className="text-green-400 hover:underline">
                    Live App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Websites */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Websites</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => p.category === 'Website').map((project, i) => (
            <div key={i} className="bg-slate-800 rounded-xl overflow-hidden group hover:scale-105 transition">

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-blue-300 mt-2">{project.description}</p>

                <div className="flex gap-4 mt-4">
                  <Link href={project.link} className="text-cyan-400 hover:underline">
                    Case Study →
                  </Link>

                  <a href={project.live} target="_blank" className="text-green-400 hover:underline">
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl mb-6">Let’s work together</h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/237693066656?text=Hello%20Eric,%20I%20saw%20your%20portfolio%20and%20I’d%20like%20to%20work%20with%20you."
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            WhatsApp Me
          </a>

          <a
            href="mailto:godsgeneraleric247@gmail.com?subject=Project%20Inquiry"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg"
          >
            Send Email
          </a>
        </div>
      </div>

    </main>
  )
}