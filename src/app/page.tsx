'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [showComingSoon, setShowComingSoon] = useState(false)

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
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormStatus('success')
        setFormMessage('Thank you! Your message has been sent successfully. I will get back to you soon.')
        form.reset()
      } else {
        setFormStatus('error')
        setFormMessage('Something went wrong. Please try again or email me directly at lauritalkdev@gmail.com')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Network error. Please check your connection and try again.')
    }
  }

  const handleViewWork = () => {
    setShowComingSoon(true)
    // Auto-hide the message after 5 seconds
    setTimeout(() => setShowComingSoon(false), 5000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
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
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-blue-200 font-light">
            Web3 Innovator | AI Developer | Strategic Leader
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 md:mb-0">
            Co-Founder & Lead Developer at Luminix, building AI-powered Web3 solutions 
            to solve real-world problems.
          </p>
          
          {/* Coming Soon Modal */}
          {showComingSoon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
              <div className="bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl max-w-md w-full border border-cyan-400/30 animate-fadeIn">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
                  <p className="text-blue-200 mb-6">
                    My portfolio section is currently under construction. I&apos;m working on showcasing my latest Web3 and AI projects.
                  </p>
                  <button
                    onClick={() => setShowComingSoon(false)}
                    className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button 
              onClick={handleViewWork}
              className="bg-cyan-600 hover:bg-cyan-700 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base text-center"
            >
              View My Work
            </button>
            <a href="#contact" className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base text-center">
              Contact Me
            </a>
          </div>

          {/* Inline Coming Soon Notification */}
          {showComingSoon && (
            <div className="mt-6 animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-cyan-300">Portfolio section coming soon!</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              {/* Image 1: Professional/Conference Setting */}
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border-2 border-cyan-400/20">
                <Image 
                  src="/about-professional.jpg" 
                  alt="Ebong Eric Etoe speaking at Dubai Crypto Conference 2022"
                  className="w-full h-full object-cover"
                  width={400}
                  height={224}
                />
              </div>
              <p className="text-sm text-center text-blue-300">
                Receiving Award at a Dubai Crypto Conference
              </p>
              
              {/* Image 2: Personal/Casual Setting */}
              <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border-2 border-cyan-400/20">
                <Image 
                  src="/about-personal.jpg" 
                  alt="Ebong Eric Etoe working on AI/Web3 development"
                  className="w-full h-full object-cover"
                  width={400}
                  height={224}
                />
              </div>
              <p className="text-sm text-center text-blue-300">
                Receiving Inspiration from nature at Miracle Garden, Dubai
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                Born in 1991, my journey from education to technology has been driven by 
                continuous learning and adaptation. Starting as a teacher, I developed 
                strong leadership and communication skills that later proved valuable 
                in the crypto and tech world.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My crypto journey began in 2017, and since then I&apos;ve evolved from a 
                curious enthusiast to a Web3 developer and AI innovator, with proven 
                success in building teams and delivering million-dollar results.
              </p>
              <div className="pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-400">Core Philosophy</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  I believe in leveraging cutting-edge technology—blockchain and AI—to 
                  create practical solutions that empower people and transform industries.
                </p>
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-400">International Experience</h3>
                <p className="text-base md:text-lg leading-relaxed">
                  I&apos;ve attended and spoken at crypto conferences in Dubai (2021, 2022, 2023), 
                  connecting with global blockchain innovators and staying at the forefront 
                  of Web3 technology.
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
            {/* Recent Experience */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>
              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">2025 - Present</span>
                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">Co-Founder & Lead Developer</h3>
                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">Luminix</p>
                <p className="text-base md:text-lg">Leading development of AI-powered Web3 solutions including Lauritalk App, an AI-powered Web3 inclusive language translation application.</p>
              </div>
            </div>

            {/* Grace Ventures */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>
              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">2022 - 2025</span>
                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">Co-Founder</h3>
                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">Grace Ventures Ltd</p>
                <p className="text-base md:text-lg">Multi-purpose company dealing with Real Estate, Automobiles, Blockchain, Trading, E-commerce, and project execution.</p>
              </div>
            </div>

            {/* Crypto Leadership */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>
              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">2021</span>
                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">Network Marketing Leader</h3>
                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">Crypto Company</p>
                <p className="text-base md:text-lg">Generated over $1,000,000 in volume sales in under 10 months. Built and led a team of 700+ people with 400+ active members.</p>
              </div>
            </div>

            {/* Teaching Period */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-400">
              <div className="absolute -left-1.5 md:-left-2 top-0 w-3 h-3 md:w-4 md:h-4 bg-cyan-400 rounded-full"></div>
              <div className="bg-slate-800/50 p-4 md:p-6 rounded-lg hover:bg-slate-800/70 transition">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">2013 - 2018</span>
                <h3 className="text-xl md:text-2xl font-bold mt-1 md:mt-2">Teacher</h3>
                <p className="text-lg md:text-xl text-blue-200 mb-2 md:mb-4">Various Schools</p>
                <p className="text-base md:text-lg">Taught at Little Angels School and Moukam Memorial Bilingual School while developing documentation and graphic design skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Web3 Development */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">⚡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Web3 Development</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Full-stack Web3 solutions including dApps, smart contracts, and blockchain integration using JavaScript, TypeScript, React Native, and Ethers.js.
              </p>
            </div>

            {/* AI Solutions */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🤖</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">AI Solutions</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Building AI-powered applications like Lauritalk, combining artificial intelligence with Web3 for innovative real-world solutions.
              </p>
            </div>

            {/* Consultancy */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">💼</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Crypto Consultancy</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Expert guidance on crypto investments, blockchain strategy, and Web3 implementation for businesses and individuals.
              </p>
            </div>

            {/* Co-Founding */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🚀</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Co-Founding Roles</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Strategic partnership and leadership in tech startups, bringing technical expertise and business acumen to innovative ventures.
              </p>
            </div>

            {/* Forex Trading */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">📈</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Forex & Crypto Trading</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Professional trading services and training in Forex and Crypto markets, with proven track record of doubling client capital.
              </p>
            </div>

            {/* Web Development */}
            <div className="bg-slate-800/50 p-6 md:p-8 rounded-xl hover:bg-slate-800/70 transition group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-cyan-500/30 transition">
                <span className="text-xl md:text-2xl">🌐</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Web Development</h3>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">
                Full-stack web development using modern technologies including React, Next.js, Node.js, Python, and responsive design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Let&apos;s Work Together</h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Interested in collaborating on a Web3 project? Need expert crypto consultancy? 
                Looking for a co-founder or technical lead? Let&apos;s discuss how we can bring 
                your vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">Email</p>
                    <p className="text-blue-200 text-sm md:text-base">lauritalkdev@gmail.com</p>
                  </div>
                </div>
                <div className="flex space-x-3 md:space-x-4 pt-4">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/ebong-eric" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/evangeliste.eric" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="#" className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/godsgeneraleric?igsh=NDR6bHMyMHRoeXZn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center hover:bg-cyan-500/30 transition">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.23 14.815 3.74 13.664 3.74 12.367s.49-2.448 1.386-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.896.875 1.386 2.026 1.386 3.323s-.49 2.448-1.386 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
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
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
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
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select 
                      id="service"
                      name="service"
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select a service...</option>
                      <option value="Web3 Development">Web3 Development</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Crypto Consultancy">Crypto Consultancy</option>
                      <option value="Co-Founding Role">Co-Founding Role</option>
                      <option value="Forex & Crypto Trading">Forex & Crypto Trading</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 disabled:cursor-not-allowed py-3 rounded-lg font-semibold transition-all text-sm md:text-base flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
            &copy; {new Date().getFullYear()} Ebong Eric Etoe. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs md:text-sm mt-2">
            Web3 Innovator | AI Developer | Crypto Consultant
          </p>
        </div>
      </footer>
    </main>
  );
}