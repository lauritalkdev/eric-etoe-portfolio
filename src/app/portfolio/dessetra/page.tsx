'use client'

import Image from 'next/image'

export default function Dessetra() {
  return (
    <main className="min-h-screen bg-slate-900 text-white px-6 py-20">

      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Dessetra</h1>
        <p className="text-blue-300 max-w-3xl mx-auto">
          Client project: a Web3 education, connection, and community platform designed to help users learn, connect, earn, and participate in digital opportunities with better structure and guidance.
        </p>

        <div className="mt-6">
          <a href="https://www.dessetra.com" target="_blank" className="bg-green-600 px-6 py-3 rounded-lg">
            Visit Platform
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <Image
          src="/projects/dessetra/cover.png"
          alt="Dessetra platform preview"
          width={1000}
          height={500}
          className="rounded-xl"
        />
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">Project Overview</h2>
        <p className="text-blue-200 leading-7">
          Dessetra is a client web platform built around Web3 education, community growth, user onboarding, premium access, referrals, and investment participation. The goal was to create a clean and structured digital experience where users can understand the platform, access learning resources, manage their account, track activity, and engage with the Dessetra ecosystem from one place.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Problem</h2>
        <p className="text-blue-200 leading-7">
          Many people are interested in Web3 but lack a clear path for learning, safe participation, and community support. Without proper onboarding, users can easily feel confused by wallets, exchanges, security practices, referrals, subscriptions, and investment-related information. Dessetra needed a platform that could simplify this journey while keeping the experience professional and easy to navigate.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">The Solution</h2>
        <p className="text-blue-200 leading-7">
          I developed a platform structure that brings education, user accounts, premium access, referral activity, wallet information, investment tracking, and admin control into a single organized system. The platform supports both user-facing features and backend management, making it easier for the client to operate the community while giving users a clearer Web3 learning and participation experience.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-6">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">User Dashboard</h3>
            <p className="text-blue-200">A central area where users can view their account, access platform sections, and track their activity.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Web3 Learning Access</h3>
            <p className="text-blue-200">Structured educational access for users learning about Web3 tools, security, wallets, exchanges, and digital participation.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Referral System</h3>
            <p className="text-blue-200">Referral tracking designed to support community growth and reward-based user acquisition.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Premium Access</h3>
            <p className="text-blue-200">Subscription-based access structure for users who want deeper platform participation and learning resources.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Investment Tracking</h3>
            <p className="text-blue-200">A dashboard experience for investment-related records, visibility, and user participation tracking.</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="font-bold mb-2">Admin Control</h3>
            <p className="text-blue-200">Backend management tools for monitoring users, activity, access, and platform operations.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-4">My Role</h2>
        <p className="text-blue-200 leading-7">
          I worked on the platform implementation, structure, user experience, dashboard flow, and key functional areas needed to support the client’s Web3 education and community model. The project required a balance between clean design, practical user navigation, and backend logic for accounts, access, referrals, and tracking.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-cyan-400 text-2xl mb-6">Platform Focus</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl text-center">Learn</div>
          <div className="bg-slate-800 p-6 rounded-xl text-center">Connect</div>
          <div className="bg-slate-800 p-6 rounded-xl text-center">Earn</div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Need a platform like this?</h2>
        <p className="text-blue-300 mb-6">
          I build practical web platforms, dashboards, and digital systems for businesses and communities.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="https://wa.me/237693066656" className="bg-green-600 px-6 py-3 rounded-lg">WhatsApp</a>
          <a href="mailto:godsgeneraleric247@gmail.com" className="border border-cyan-400 px-6 py-3 rounded-lg">Email</a>
        </div>
      </section>

    </main>
  )
}