'use client'

import Image from 'next/image'

export default function Luminix() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Luminix</h1>
        <p className="text-blue-300 text-lg">
          AI & Web3 infrastructure company building scalable tech solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.luminix.space"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            Visit Website
          </a>
        </div>
      </section>

      {/* COVER */}
      <section className="max-w-5xl mx-auto mb-16">
        <Image
          src="/projects/luminix/cover.png"
          alt="Luminix Website"
          width={1000}
          height={500}
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Problem</h2>
        <ul className="space-y-3 text-blue-200">
          <li>• Businesses struggle to scale in a Web3 + AI world.</li>
          <li>• No single provider offers complete infrastructure solutions.</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Solution</h2>
        <p className="text-blue-200">
          Luminix provides end-to-end AI and Web3 infrastructure, helping businesses build scalable and future-proof digital solutions.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">Tech Infrastructure Development</div>
          <div className="bg-slate-800 p-6 rounded-xl">Web & Mobile App Development</div>
          <div className="bg-slate-800 p-6 rounded-xl">Payment System Integration</div>
          <div className="bg-slate-800 p-6 rounded-xl">Strategic Tech Partnerships</div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Impact</h2>
        <ul className="space-y-3 text-blue-200">
          <li>• Enables faster product launches.</li>
          <li>• Reduces cost of building separate infrastructures.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h3 className="text-2xl mb-6">Need infrastructure like this?</h3>

        <div className="flex gap-4 justify-center">
          <a href="https://wa.me/237693066656" className="bg-green-600 px-6 py-3 rounded-lg">WhatsApp</a>
          <a href="mailto:godsgeneraleric247@gmail.com" className="border border-cyan-400 px-6 py-3 rounded-lg">Email</a>
        </div>
      </section>

    </main>
  )
}