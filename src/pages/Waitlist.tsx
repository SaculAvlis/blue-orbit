import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Loader2, ArrowLeft, Sparkles, Shield, Bell } from 'lucide-react'

function Waitlist() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('email', email)

    try {
      const response = await fetch('https://formspree.io/f/xvzqeeyn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-deep overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 30%, rgba(59, 142, 165, 0.1) 0%, transparent 50%), linear-gradient(180deg, #0c0f16 0%, #0a0d13 100%)'}} />
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.3}} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div className="w-full h-full rounded-full bg-orbital/8 blur-[100px]" />
      </div>

      {/* Back link */}
      <div className="absolute top-6 left-4 sm:left-6 lg:left-8 z-20">
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2.5 glass-card text-sm text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-5 gap-6">
          
          {/* Main Form Panel */}
          <div className="lg:col-span-3 glass-panel p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-orbital/10 flex items-center justify-center">
                <Sparkles size={18} className="text-orbital" />
              </div>
              <div>
                <h1 className="font-heading text-xl text-white">Join the Blue Orbit waitlist</h1>
                <p className="text-xs text-white/40">Get early access updates</p>
              </div>
            </div>

            <p className="text-sm text-white/50 mb-6">Be the first to access Blue Orbit.</p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase text-white/40 mb-3 tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full pl-4 pr-4 py-4 glass-input"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-orbital text-deep font-medium rounded-xl hover:bg-orbital-light transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join waitlist'
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-white/40">
                  <Shield size={12} />
                  <span>Early access will be released gradually. No spam — just progress updates.</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orbital/15 flex items-center justify-center">
                  <Check className="text-orbital" size={28} />
                </div>
                <h2 className="font-heading text-xl text-white mb-3">Thank you — we'll keep you updated.</h2>
                <p className="text-white/50">You're on the list. We'll be in touch soon.</p>
              </div>
            )}
          </div>

          {/* Side Info Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card p-5 hover:bg-white/[0.04] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Bell size={16} className="text-orbital" />
                <span className="text-sm font-medium text-white">What to expect</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-orbital/60 mt-2 flex-shrink-0" />
                  Early access to the platform
                </li>
                <li className="flex items-start gap-3 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-orbital/60 mt-2 flex-shrink-0" />
                  Product updates and milestones
                </li>
                <li className="flex items-start gap-3 text-sm text-white/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-orbital/60 mt-2 flex-shrink-0" />
                  Opportunity to provide feedback
                </li>
              </ul>
            </div>

            <div className="glass-card p-5 hover:bg-white/[0.04] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="status-dot" />
                <span className="text-sm font-medium text-white">Current status</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Research</span>
                  <span className="text-orbital font-mono text-xs">Done</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Design</span>
                  <span className="text-amber-400 font-mono text-xs">In Progress</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Development</span>
                  <span className="text-white/30 font-mono text-xs">Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Waitlist
