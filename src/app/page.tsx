export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-950 text-white">
      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden border-4 border-cyan-400/20">
            <img 
              src="/profile-photo.png" 
              alt="Ebong Eric Etoe - Professional Photo"
              className="w-full h-full object-cover"
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
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base">
              View My Work
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all text-sm md:text-base">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-full h-64 md:h-80 bg-slate-700/50 rounded-xl flex items-center justify-center">
                <span className="text-slate-400 text-sm md:text-base">Personal/Lifestyle Photo</span>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed">
                Born in 1991, my journey from education to technology has been driven by 
                continuous learning and adaptation. Starting as a teacher, I developed 
                strong leadership and communication skills that later proved invaluable 
                in the crypto and tech world.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                My crypto journey began in 2017, and since then I've evolved from a 
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
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Let's Work Together</h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Interested in collaborating on a Web3 project? Need expert crypto consultancy? 
                Looking for a co-founder or technical lead? Let's discuss how we can bring 
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
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base">
                    <option>Web3 Development</option>
                    <option>AI Solutions</option>
                    <option>Crypto Consultancy</option>
                    <option>Co-Founding Role</option>
                    <option>Forex & Crypto Trading</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400 transition text-sm md:text-base"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-all text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}