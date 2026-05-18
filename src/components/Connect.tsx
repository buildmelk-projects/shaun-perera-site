import { socials } from '@/lib/content'
import { Play, Music, ExternalLink, MessageCircle } from 'lucide-react'

const platformLinks = [
  {
    label: 'YouTube',
    href: socials.youtube,
    icon: Play,
    description: 'Solo channel',
  },
  {
    label: 'YouTube',
    href: socials.youtubeBand,
    icon: Play,
    description: 'Magic Box Mixup',
  },
  {
    label: 'Instagram',
    href: socials.instagram,
    icon: ExternalLink,
    description: '@shaunagain',
  },
  {
    label: 'Instagram',
    href: socials.instagramBand,
    icon: ExternalLink,
    description: '@magicboxmixup',
  },
  {
    label: 'Facebook',
    href: socials.facebook,
    icon: ExternalLink,
    description: 'Shaun Perera-de Mel',
  },
  {
    label: 'Apple Music',
    href: socials.appleMusic,
    icon: Music,
    description: 'Stream on Apple Music',
  },
]

export default function Connect() {
  return (
    <section id="connect" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Header + WhatsApp */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="text-xs text-accent tracking-[0.3em] uppercase font-sans">Find Shaun</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-6" style={{ fontWeight: 700 }}>
              Connect
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-10" style={{ fontSize: '15px' }}>
              Follow along for new music, live moments, and behind-the-scenes. Available on all major streaming platforms. For bookings and enquiries, reach out directly on WhatsApp.
            </p>

            {/* WhatsApp card */}
            <div
              className="border border-border p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8"
              style={{ background: 'rgba(200,169,110,0.04)' }}
            >
              {/* QR Code */}
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={socials.whatsappQr}
                  alt="WhatsApp QR code for Shaun Perera"
                  width={120}
                  height={120}
                  className="rounded"
                  style={{ imageRendering: 'pixelated' }}
                />
                <p className="text-xs text-text-muted/50 font-sans mt-2 text-center">Scan to chat</p>
              </div>

              {/* Text + button */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-sans tracking-[0.25em] uppercase text-accent mb-1">WhatsApp</p>
                  <p className="font-display text-text-primary text-lg">Let&apos;s Talk</p>
                  <p className="text-sm text-text-muted font-sans mt-1">+94 77 153 3277</p>
                </div>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wider uppercase font-medium font-sans transition-colors duration-200 self-start bg-accent hover:bg-accent-hover"
                  style={{ color: '#0c0c0c', letterSpacing: '0.1em' }}
                >
                  <MessageCircle size={14} />
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Accent line */}
            <div
              className="mt-10 h-px w-full"
              style={{
                background: 'linear-gradient(90deg, var(--accent), transparent)',
                opacity: 0.3,
              }}
            />
          </div>

          {/* Social/streaming grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {platformLinks.map(({ label, href, icon: Icon, description }) => (
              <a
                key={`${label}-${description}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-surface p-6 hover:bg-surface-elevated transition-colors duration-200"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border group-hover:border-accent/40 transition-colors duration-200"
                  style={{ background: 'rgba(200,169,110,0.05)' }}
                >
                  <Icon size={16} className="text-text-muted group-hover:text-accent transition-colors duration-200" />
                </div>
                <div>
                  <div className="text-sm font-sans text-text-primary group-hover:text-accent transition-colors duration-200">
                    {label}
                  </div>
                  <div className="text-xs text-text-muted font-sans mt-0.5">{description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
