'use client'

import Image from 'next/image'

export default function Lauritalk() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Lauritalk
        </h1>
        <p className="text-blue-300 text-lg md:text-xl">
          AI-powered multilingual translation app supporting 150+ languages including African dialects.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.luminix.lauritalk"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            View on PlayStore
          </a>

          <a
            href="#"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg"
          >
            GitHub (Coming Soon)
          </a>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section className="max-w-5xl mx-auto mb-16">
        <Image
          src="/projects/lauritalk/cover.png"
          alt="Lauritalk App"
          width={1000}
          height={500}
          className="rounded-xl w-full object-cover"
        />
      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Problem</h2>

        <ul className="space-y-3 text-blue-200">
          <li>• Language barriers hinder communication in travel, business, and daily life.</li>
          <li>• Most translation tools ignore African dialects.</li>
          <li>• Over 2000 African languages exist, but less than 5% are digitally represented.</li>
          <li>• Many native speakers cannot write or spell their own dialects.</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">The Solution</h2>

        <p className="text-blue-200 leading-relaxed">
          Lauritalk is a full-featured AI-powered mobile application designed to eliminate language barriers by enabling seamless communication across global and African languages through text, voice, and real-time chat translation.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🌍 150+ Languages</h3>
            <p className="text-blue-300">Supports global and African dialects.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">💬 Chat Translation</h3>
            <p className="text-blue-300">Real-time messaging across languages.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🎤 Voice-to-Text</h3>
            <p className="text-blue-300">Speak and get instant translations.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">🗣 Voice-to-Voice</h3>
            <p className="text-blue-300">Natural conversation translation.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl md:col-span-2">
            <h3 className="font-semibold mb-2">📚 Learn Feature</h3>
            <p className="text-blue-300">Integrated language learning system.</p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">App Screenshots</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Image src="/projects/lauritalk/screen1.png" alt="" width={500} height={500} className="rounded-lg" />
          <Image src="/projects/lauritalk/screen2.png" alt="" width={500} height={500} className="rounded-lg" />
          <Image src="/projects/lauritalk/screen3.png" alt="" width={500} height={500} className="rounded-lg" />
          <Image src="/projects/lauritalk/screen4.png" alt="" width={500} height={500} className="rounded-lg" />
        </div>
      </section>

      {/* IMPACT */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Impact</h2>

        <ul className="space-y-3 text-blue-200">
          <li>• Bridges communication gaps across cultures and regions.</li>
          <li>• Enables inclusion of underserved African language communities.</li>
          <li>• Supports global business and cross-border interaction.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-20">
        <h3 className="text-2xl mb-6">Want something like this built?</h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/237693066656?text=Hello%20Eric,%20I%20saw%20Lauritalk%20and%20I’d%20like%20something%20similar."
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            Contact on WhatsApp
          </a>

          <a
            href="mailto:godsgeneraleric247@gmail.com?subject=Lauritalk%20Project%20Inquiry"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg"
          >
            Send Email
          </a>
        </div>
      </section>

    </main>
  )
}