'use client'

import Image from 'next/image'

export default function WordBuild() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">WordBuild</h1>
        <p className="text-blue-300">
          Personal branding platform for professionals.
        </p>

        <div className="mt-6">
          <a href="https://www.emmanuellatheophilus.com" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg">
            Visit Website
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <Image
          src="/projects/wordbuild/cover.png"
          alt=""
          width={1000}
          height={500}
          className="rounded-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Problem</h2>
        <p className="text-blue-200">
          Skilled professionals struggle to showcase their expertise online.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Solution</h2>
        <p className="text-blue-200">
          A platform that transforms expertise into strong personal branding.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-slate-800 p-6 rounded-xl">Content Strategy</div>
        <div className="bg-slate-800 p-6 rounded-xl">Ghostwriting</div>
        <div className="bg-slate-800 p-6 rounded-xl">Brand Voice Development</div>
        <div className="bg-slate-800 p-6 rounded-xl">Authority Building</div>
      </section>

      <section className="text-center">
        <div className="flex gap-4 justify-center">
          <a href="https://wa.me/237693066656" className="bg-green-600 px-6 py-3 rounded-lg">WhatsApp</a>
          <a href="mailto:godsgeneraleric247@gmail.com" className="border border-cyan-400 px-6 py-3 rounded-lg">Email</a>
        </div>
      </section>

    </main>
  )
}