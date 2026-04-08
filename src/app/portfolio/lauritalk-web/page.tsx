'use client'

import Image from 'next/image'

export default function LauritalkWeb() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Lauritalk Web</h1>
        <p className="text-blue-300">
          Admin dashboard powering Lauritalk ecosystem.
        </p>

        <div className="mt-6">
          <a href="https://www.lauritalk.com" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg">
            Visit Platform
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <Image
          src="/projects/lauritalk-web/cover.png"
          alt=""
          width={1000}
          height={500}
          className="rounded-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Problem</h2>
        <p className="text-blue-200">
          Managing a global translation platform requires secure backend control and monitoring tools.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Solution</h2>
        <p className="text-blue-200">
          A robust admin dashboard to manage users, translations, and system operations.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl">User Management</div>
        <div className="bg-slate-800 p-6 rounded-xl">Subscription Control</div>
        <div className="bg-slate-800 p-6 rounded-xl">Data Processing</div>
        <div className="bg-slate-800 p-6 rounded-xl">Monitoring Tools</div>
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