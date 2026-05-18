import Image from 'next/image'
import { artist } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-sans">The Artist</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-10" style={{ fontWeight: 700 }}>
              About
            </h2>
            <div className="space-y-5">
              {artist.longBio.map((paragraph, i) => (
                <p key={i} className="font-sans text-text-muted leading-relaxed" style={{ fontSize: '15px' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 border-l-2 pl-6 py-2"
              style={{ borderColor: 'var(--accent)' }}
            >
              <p className="font-display italic text-text-primary" style={{ fontSize: '18px' }}>
                "For me, music is a communication tool and it is how I communicate."
              </p>
              <p className="text-xs text-text-muted mt-2 font-sans tracking-widest uppercase">
                - Shaun Perera, The Morning
              </p>
            </div>
          </div>

          {/* Visual panel */}
          <div className="relative lg:sticky lg:top-24">
            {/* Artist photo */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface border border-border">
              <Image
                src="/images/shaun-hero.jpg"
                alt="Shaun Perera"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(12,12,12,0.7) 0%, transparent 50%)',
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-text-primary text-xl" style={{ fontWeight: 500 }}>
                  {artist.name}
                </p>
                <p className="text-xs text-text-muted font-sans tracking-widest uppercase mt-1">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-px bg-border mt-8">
              {[
                { value: '2005', label: 'Band Est.' },
                { value: '7+', label: 'Originals' },
                { value: '#1', label: 'YES FM Chart' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-surface py-6 px-4 text-center">
                  <div className="font-display text-2xl text-accent" style={{ fontWeight: 700 }}>
                    {value}
                  </div>
                  <div className="text-xs text-text-muted font-sans tracking-widest uppercase mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
