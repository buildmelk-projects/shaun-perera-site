'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { socials } from '@/lib/content'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-[70vh] lg:min-h-[90vh] flex items-start overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 bg-background">
        <Image
          src="/images/shaun-portrait.jpg"
          alt="Shaun."
          fill
          priority
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(12,12,12,0.92) 35%, rgba(12,12,12,0.15) 100%), linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.3) 45%, rgba(12,12,12,0.05) 100%)',
        }}
      />

      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 20% 60%, rgba(200,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)' }}
      />

      {/* Decorative large italic "Music" */}
      <div
        className="absolute right-0 top-1/2 select-none pointer-events-none hidden lg:block"
        aria-hidden
        style={{
          fontSize: 'clamp(140px, 18vw, 260px)',
          lineHeight: 1,
          fontFamily: 'var(--font-playfair)',
          fontStyle: 'italic',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(200,169,110,0.10)',
          letterSpacing: '-0.04em',
          whiteSpace: 'nowrap',
          transform: 'translateX(8%) translateY(-50%)',
        }}
      >
        Music
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-10 lg:pt-28 lg:pb-16">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="h-px w-10 bg-accent" />
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-sans">
            Colombo, Sri Lanka
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-display text-text-primary leading-none mb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{
            fontSize: 'clamp(52px, 9vw, 130px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            transitionDelay: '200ms',
          }}
        >
          Shaun
          <br />
          <span className="italic font-normal" style={{ color: 'var(--accent)' }}>
            Perera{' '}
          </span>
          <span className="italic font-normal text-white">
            de Mel
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-sans text-text-muted max-w-md mb-10 leading-relaxed transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ fontSize: 'clamp(14px, 1.5vw, 17px)', transitionDelay: '350ms' }}
        >
          Singer-songwriter. Voice of Magic Box Mixup.<br />
          Bilingual originals in English &amp; Sinhala.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            href={socials.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase font-medium transition-colors duration-200 bg-accent hover:bg-accent-hover"
            style={{ color: '#0c0c0c', letterSpacing: '0.12em' }}
          >
            Listen Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs tracking-widest uppercase text-text-muted font-sans">Scroll</span>
        <div className="w-px h-8 bg-text-muted animate-pulse" />
      </div>
    </section>
  )
}
