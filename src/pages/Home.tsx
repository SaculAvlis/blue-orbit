import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Target, Lightbulb, Users, Layers, Eye, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const conceptRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-content', 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', delay: 0.2 }
    )
    gsap.fromTo('.hero-side-cards',
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.4 }
    )

    // About section
    gsap.fromTo('.about-content',
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: aboutRef.current, start: 'top 75%' }, y: 0, opacity: 1, duration: 0.7 }
    )

    // Concept section
    gsap.fromTo('.concept-content',
      { y: 30, opacity: 0 },
      { scrollTrigger: { trigger: conceptRef.current, start: 'top 75%' }, y: 0, opacity: 1, duration: 0.7 }
    )
  }, [])

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-deep">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-deep/90 backdrop-blur-xl">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 px-2">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.jpg" alt="Blue Orbit" className="w-8 h-8 rounded-full" />
              <span className="font-heading text-lg font-medium">Blue Orbit</span>
            </Link>
            <div className="hidden md:flex items-center gap-1 glass-panel px-2 py-1.5">
              <button onClick={scrollToAbout} className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all">About</button>
              <a href="#concept" className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all">Concept</a>
              <Link to="/waitlist" className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all">Waitlist</Link>
              <div className="w-px h-5 bg-white/10 mx-1" />
              <Link to="/waitlist" className="px-4 py-2 bg-orbital text-deep text-sm font-medium rounded-lg hover:bg-orbital-light transition-all">Join waitlist</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 142, 165, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(59, 142, 165, 0.05) 0%, transparent 40%), linear-gradient(180deg, #0c0f16 0%, #0a0d13 100%)'}} />
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.5}} />
        </div>

        {/* Logo Sphere */}
        <div className="absolute top-[28%] right-[-10%] lg:right-[-5%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] pointer-events-none animate-slow-rotate">
          <div className="absolute inset-0 rounded-full bg-orbital/8 blur-[80px] animate-pulse-glow" />
          <img src="/logo-sphere.jpg" alt="" className="absolute inset-0 w-full h-full object-contain opacity-[0.12]" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-[10%] right-[5%] w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] pointer-events-none">
          <div className="absolute inset-0 rounded-full bg-orbital/12 blur-[80px] animate-pulse-glow" />
        </div>
        <div className="absolute bottom-[15%] left-[8%] w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] pointer-events-none animate-float" style={{animationDelay: '3s'}}>
          <div className="absolute inset-0 rounded-full bg-orbital/15 blur-[40px]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Main Card */}
            <div className="lg:col-span-8 hero-content glass-panel bg-black/30 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="status-dot" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/50">Blue Orbit</span>
              </div>

              <h1 className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl text-white/90 mb-6 leading-tight">
                Understand what you can do with your home — before you make costly decisions.
              </h1>

              <p className="text-lg font-normal text-white/75 max-w-lg mb-10 leading-[1.7]">
                Blue Orbit helps homeowners in Ireland make sense of planning rules, extensions, and constraints — so they know what's possible and what to do next, with clarity and confidence.
              </p>

              <div className="hairline mb-8" />

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/waitlist" className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-orbital text-deep font-medium rounded-xl hover:bg-orbital-light transition-all">
                  <Sparkles size={16} />
                  Join the waitlist
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button onClick={scrollToAbout} className="inline-flex items-center justify-center px-6 py-3.5 text-white hover:text-orbital rounded-xl hover:bg-white/5 transition-all">
                  Why Blue Orbit exists
                </button>
              </div>
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-4 hero-side-cards space-y-4">
              <div className="glass-card p-5 hover:bg-white/[0.04] hover:border-orbital/20 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orbital/10 flex items-center justify-center">
                    <span className="text-orbital text-sm font-mono">01</span>
                  </div>
                  <span className="text-sm font-medium text-white">Planning Intelligence</span>
                </div>
                <p className="text-sm text-white/50">Mapping complexity before automation</p>
              </div>

              <div className="glass-card p-5 hover:bg-white/[0.04] hover:border-orbital/20 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orbital/10 flex items-center justify-center">
                    <span className="text-orbital text-sm font-mono">02</span>
                  </div>
                  <span className="text-sm font-medium text-white">Decision Support</span>
                </div>
                <p className="text-sm text-white/50">Systems that work with people</p>
              </div>

              <div className="glass-card p-5 hover:bg-white/[0.04] hover:border-orbital/20 transition-all cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orbital/10 flex items-center justify-center">
                    <span className="text-orbital text-sm font-mono">03</span>
                  </div>
                  <span className="text-sm font-medium text-white">Built Deliberately</span>
                </div>
                <p className="text-sm text-white/50">Clarity before code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="relative py-20 lg:py-28 bg-deep">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-orbital/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="about-content mb-10">
            <div className="tag mb-4">Why Blue Orbit exists</div>
            <h2 className="font-heading text-3xl md:text-4xl text-white">Why Blue Orbit exists</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-8 lg:p-10">
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>Blue Orbit is being built to bring clarity to one of the most confusing parts of home ownership in Ireland: planning and development decisions.</p>
                <p>Too often, people are left guessing — relying on hearsay, outdated advice, or expensive consultations just to understand what's possible.</p>
                <p>We believe homeowners deserve a clearer starting point.</p>
                <p>Blue Orbit is being built in public, starting with understanding the problem deeply before writing code — so the solution earns its place.</p>
                <p className="text-white/80">Simple by design. Honest in intent. Built to earn trust.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-sm text-white/40">Starting with home extensions. Expanding thoughtfully from there.</p>
              </div>
            </div>

            <div className="glass-panel p-3 lg:mt-12">
              <div className="relative rounded-xl overflow-hidden min-h-[280px]">
                <img src="/working-photo.jpg" alt="Mapping the Blue Orbit vision" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <p className="text-xs font-mono uppercase text-white/40 tracking-wider">Building in public</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, title: 'Clarity First', desc: 'Understanding before building' },
              { icon: Lightbulb, title: 'Earned Solutions', desc: 'Not rushed features' },
              { icon: Users, title: 'Human-Centered', desc: 'Working with people' },
              { icon: Layers, title: 'Systems Thinking', desc: 'Reducing uncertainty' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5 hover:bg-white/[0.04] hover:border-orbital/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orbital/10 flex items-center justify-center mb-4">
                  <item.icon size={18} className="text-orbital" />
                </div>
                <h3 className="text-sm font-medium text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section ref={conceptRef} id="concept" className="relative py-20 lg:py-28 bg-deep">
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-orbital/4 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="concept-content mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="tag">Concept Preview</div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <AlertCircle size={12} className="text-amber-400" />
                <span className="text-xs text-amber-400/80">Early and non-final</span>
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-3">Early direction</h2>
            <p className="text-lg text-white/60 max-w-xl">These visuals represent our current thinking and exploratory direction, not the final product.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="glass-panel p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orbital/10 flex items-center justify-center">
                    <Eye size={14} className="text-orbital" />
                  </div>
                  <span className="text-sm font-medium text-white">Wireframe</span>
                </div>
                <span className="text-xs font-mono text-white/40">v0.1</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-white/5 border border-white/5">
                <img src="/wireframe-sketch.jpg" alt="Early wireframe exploration" className="w-full h-auto" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-1/4 rounded-full bg-orbital/40" />
                </div>
                <span className="text-xs text-white/40">Exploration</span>
              </div>
            </div>

            <div className="glass-panel p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orbital/10 flex items-center justify-center">
                    <Eye size={14} className="text-orbital" />
                  </div>
                  <span className="text-sm font-medium text-white">Concept</span>
                </div>
                <span className="text-xs font-mono text-white/40">v0.2</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-white/5 border border-white/5">
                <img src="/concept-mockup.jpg" alt="Concept exploration" className="w-full h-auto" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-1/2 rounded-full bg-orbital/40" />
                </div>
                <span className="text-xs text-white/40">In Progress</span>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle size={18} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-2">Work in progress</h3>
                <p className="text-sm text-white/50 leading-relaxed">The designs shown here are exploratory and subject to significant change. We're sharing our process transparently as we iterate toward the right solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-deep border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glass-panel p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <Link to="/" className="flex items-center gap-3">
                <img src="/logo.jpg" alt="Blue Orbit" className="w-9 h-9 rounded-full" />
                <div>
                  <span className="font-heading text-lg font-medium text-white block">Blue Orbit</span>
                  <span className="text-xs text-white/40">Clarity in complex decisions</span>
                </div>
              </Link>

              <nav className="flex flex-wrap items-center gap-1">
                <button onClick={scrollToAbout} className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">About</button>
                <a href="mailto:hello@blueorbit.ai" className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">Contact</a>
                <button onClick={() => alert('Privacy Policy - Coming soon')} className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">Privacy Policy</button>
                <button onClick={() => alert('Terms of Service - Coming soon')} className="px-4 py-2 text-sm text-white/50 hover:text-white rounded-lg hover:bg-white/5 transition-all">Terms of Service</button>
              </nav>

              <div className="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/lucas-silva-530ba43a3" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white/50 hover:text-orbital rounded-lg hover:bg-white/5 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.instagram.com/blue0rbit" target="_blank" rel="noopener noreferrer" className="p-2.5 text-white/50 hover:text-orbital rounded-lg hover:bg-white/5 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            <div className="hairline my-6" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/40">© {new Date().getFullYear()} Blue Orbit. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <div className="status-dot" />
                <span className="text-xs text-white/40">Building in public</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
