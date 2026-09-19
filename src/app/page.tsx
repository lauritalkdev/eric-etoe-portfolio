'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')

  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    setFormMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xqarbyoy', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        setFormMessage(
          'Thank you! Your message has been sent successfully. I will get back to you soon.'
        )
        form.reset()
      } else {
        setFormStatus('error')
        setFormMessage(
          'Something went wrong. Please try again or email me directly at lauritalkdev@gmail.com'
        )
      }
    } catch {
      setFormStatus('error')
      setFormMessage(
        'Network error. Please check your connection and try again.'
      )
    }
  }

  const handleViewWork = () => {
    router.push('/portfolio')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden border-4 border-cyan-400/20">
            <Image
              src="/profile-photo.png"
              alt="Ebong Eric Etoe - Professional Headshot"
              className="w-full h-full object-cover"
              width={192}
              height={192}
              priority
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Ebong Eric <span className="text-cyan-400">Etoe</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-5 text-blue-200 font-semibold">
            Turning Ideas & Business Problems Into Intelligent Products
          </p>

          <p className="text-base md:text-lg text-cyan-300 mb-5 font-medium">
            Full-Stack Developer • AI & Web3 Architect • Technical Partner •
            Entrepreneur
          </p>

          <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-slate-200 mb-8 md:mb-0">
            I design and build scalable digital products across AI, Web3,
            fintech and business technology, helping founders, businesses and
            organizations move from ideas and real-world challenges to working
            products.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={handleViewWork}
              className="bg-cyan-600 hover:bg-cyan-700 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base text-center"
            >
              View My Work
            </button>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base text-center"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="px-4 md:px-6 pb-10 md:pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                8+ Years
              </p>
              <p className="text-xs md:text-sm text-blue-200 mt-1">
                Crypto & Web3
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                AI + Web3
              </p>
              <p className="text-xs md:text-sm text-blue-200 mt-1">
                Product Development
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                $1M+
              </p>
              <p className="text-xs md:text-sm text-blue-200 mt-1">
                Sales Volume
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                700+
              </p>
              <p className="text-xs md:text-sm text-blue-200 mt-1">
                Team Built
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center col-span-2 md:col-span-1">
              <p className="text-xl md:text-2xl font-bold text-cyan-400">
                Full-Stack
              </p>
              <p className="text-xs md:text-sm text-blue-200 mt-1">
                Product Builder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-20 px-4 md:px-6 bg-slate-800/30"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border-2 border-cyan-400/20">
                <Image
                  src="/about-professional.jpg"
                  alt="Ebong Eric Etoe at a Dubai crypto conference"
                  className="w-full h-full object-cover"
                  width={400}
                  height={224}
                />
              </div>

              <p className="text-sm text-center text-blue-300">
                Receiving an award at a Dubai Crypto Conference
              </p>

              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border-2 border-cyan-400/20">
                <Image
                  src="/about-personal.jpg"
                  alt="Ebong Eric Etoe at Miracle Garden, Dubai"
                  className="w-full h-full object-cover"
                  width={400}
                  height={224}
                />
              </div>

              <p className="text-sm text-center text-blue-300">
                Finding inspiration at Miracle Garden, Dubai
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                I&apos;m a full-stack developer, AI & Web3 architect,
                entrepreneur and technical partner focused on turning
                real-world problems and ambitious ideas into practical digital
                products.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                My journey started in education before expanding into
                entrepreneurship, cryptocurrency, team building and technology.
                Since entering the crypto space in 2017, I&apos;ve combined
                business experience with software engineering to build products
                across AI, Web3, fintech, translation, education and community
                technology.
              </p>

              <div className="pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-400">
                  How I Build
                </h3>

                <p className="text-base md:text-lg leading-relaxed">
                  I approach technology from the problem first—not the feature
                  list. Whether I&apos;m building my own product or working
                  with a client or partner, the goal is to understand the real
                  challenge, design the right system and turn it into technology
                  people can actually use.
                </p>
              </div>

              <div className="pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-400">
                  Beyond Development
                </h3>

                <p className="text-base md:text-lg leading-relaxed">
                  My experience also spans entrepreneurship, strategic
                  leadership, community building and international exposure
                  through crypto and technology events in Dubai. This allows me
                  to contribute beyond code—from product thinking and technical
                  architecture to execution, partnerships and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            My <span className="text-cyan-400">Journey</span>
          </h2>

          <div className="space-y-8 md:space-y-12">
            {/* Luminix */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>

              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  2025 - Present
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">
                  Co-Founder & Lead Developer
                </h3>

                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">
                  Luminix
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Co-leading an AI and Web3 technology company focused on
                  turning real-world problems into intelligent products. I lead
                  product development and technical execution across digital
                  platforms including Lauritalk and other emerging AI, Web3 and
                  fintech solutions.
                </p>
              </div>
            </div>

            {/* Grace Ventures */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>

              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  2022 - 2025
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">
                  Co-Founder
                </h3>

                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">
                  Grace Ventures Ltd
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Co-founded and helped lead a multi-sector venture spanning
                  real estate, automobiles, blockchain, trading, e-commerce and
                  project execution, strengthening my experience in
                  entrepreneurship, operations and business development across
                  different markets.
                </p>
              </div>
            </div>

            {/* Crypto Leadership */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>

              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  2021
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">
                  Network Marketing Leader
                </h3>

                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">
                  Crypto Industry
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Generated over $1 million in sales volume in under 10 months
                  while building and leading a network of 700+ people,
                  including 400+ active members. The experience strengthened my
                  capabilities in leadership, sales, community building and
                  large-team coordination.
                </p>
              </div>
            </div>

            {/* Teaching */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>

              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  2013 - 2018
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">
                  Teacher
                </h3>

                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">
                  Education
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  Began my professional journey in education, developing
                  communication, leadership and mentoring skills while also
                  building early experience in documentation and graphic
                  design—skills that later became valuable in entrepreneurship,
                  technology and product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 md:py-20 px-4 md:px-6 bg-slate-800/30"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I Can <span className="text-cyan-400">Help</span>
            </h2>

            <p className="text-blue-200 text-base md:text-lg">
              From building products to joining ambitious ventures as a
              technical partner, I work across technology, strategy and digital
              markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Full-Stack Product Development */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🌐</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Full-Stack Product Development
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                End-to-end development of web platforms, mobile applications,
                dashboards and business systems—from product architecture and
                frontend experience to backend infrastructure and deployment.
              </p>
            </div>

            {/* AI Solutions */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🤖</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                AI Solutions & Integration
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                AI-powered applications and intelligent features designed
                around real business problems, including language technology,
                automation, AI integrations and custom product experiences.
              </p>
            </div>

            {/* Web3 */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Web3 & Blockchain Development
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Development and integration of blockchain-based products,
                wallets, smart contracts, decentralized applications and Web3
                infrastructure using modern full-stack technologies.
              </p>
            </div>

            {/* Technical Partnership */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🚀</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Technical Partnership & Venture Building
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Technical partnership with founders and organizations that need
                more than a developer—from product architecture and MVP
                execution to technical leadership, scaling and long-term
                product development.
              </p>
            </div>

            {/* Strategy */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">💼</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Technology & Web3 Strategy
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Practical guidance for businesses and project owners evaluating
                digital products, blockchain implementation, technology
                architecture and the path from an idea to an executable
                product.
              </p>
            </div>

            {/* Forex & Crypto */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">📈</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Forex & Crypto Markets
              </h3>

              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Trading education, market analysis, strategy and account
                management for qualified clients. Managed accounts start from
                $10,000 and can extend up to $5 million, with profit-sharing
                terms structured according to account size.
              </p>

              <p className="text-xs md:text-sm text-slate-400 mt-4 leading-relaxed">
                Trading involves substantial risk. Returns are not guaranteed.
                Account-management availability is subject to eligibility,
                agreed risk terms and applicable requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Build Something{' '}
              <span className="text-cyan-400">Meaningful</span>
            </h2>

            <p className="text-blue-200 text-base md:text-lg">
              Whether you have a product to build, need a technical partner,
              want to explore a strategic collaboration or have another
              opportunity in mind, I&apos;d like to hear about it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                Start a Conversation
              </h3>

              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Tell me what you&apos;re working on, the problem you&apos;re
                trying to solve, or the kind of partnership you&apos;re
                exploring. I&apos;ll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>

                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <a
                      href="mailto:lauritalkdev@gmail.com"
                      className="text-blue-200 hover:text-cyan-400 transition text-sm md:text-base"
                    >
                      lauritalkdev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex space-x-3 md:space-x-4 pt-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ebong-eric"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/evangeliste.eric"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/godsgeneraleric?igsh=NDR6bHMyMHRoeXZn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.23 14.815 3.74 13.664 3.74 12.367s.49-2.448 1.386-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.896.875 1.386 2.026 1.386 3.323s-.49 2.448-1.386 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl">
              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 font-medium">{formMessage}</p>

                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-2 text-sm text-green-300 hover:text-green-200"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 font-medium">{formMessage}</p>

                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-2 text-sm text-red-300 hover:text-red-200"
                  >
                    Try again
                  </button>
                </div>
              )}

              {formStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      What would you like to discuss?
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select an opportunity...</option>
                      <option value="Product Development">
                        I have a product to build
                      </option>
                      <option value="Technical Partnership">
                        Technical Partnership / Co-Founder Opportunity
                      </option>
                      <option value="AI Solutions">
                        AI Solutions & Integration
                      </option>
                      <option value="Web3 Development">
                        Web3 / Blockchain Development
                      </option>
                      <option value="Investor or Strategic Partnership">
                        Investor / Strategic Partnership
                      </option>
                      <option value="Technology Strategy">
                        Technology / Web3 Strategy
                      </option>
                      <option value="Forex and Crypto Markets">
                        Forex & Crypto Markets
                      </option>
                      <option value="Account Management">
                        Forex / Crypto Account Management
                      </option>
                      <option value="Speaking or Event">
                        Speaking / Event Opportunity
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project, opportunity or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 disabled:cursor-not-allowed py-3 rounded-lg font-semibold transition-all text-sm md:text-base flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>

                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/50 border-t border-slate-700">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-blue-300 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Ebong Eric Etoe. All rights
            reserved.
          </p>

          <p className="text-slate-500 text-xs md:text-sm mt-2">
            Full-Stack Developer • AI & Web3 Architect • Technical Partner •
            Entrepreneur
          </p>
        </div>
      </footer>
    </main>
  )
}