'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { discography, comingSoon, videos, socials, type Track, type Video } from '@/lib/content'
import { Play, ExternalLink, Music2, Sparkles } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const INITIAL_TRACK_COUNT = 4

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
}

const videoGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const videoCellVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

function AlbumCard({ track, index }: { track: Track; index: number }) {
  const primaryLink = track.links.youtube || track.links.appleMusic

  return (
    <motion.div variants={cardVariants} className="group relative aspect-[3/4] overflow-hidden">
      {/* Photo background (selected tracks) */}
      {track.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={track.image}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ opacity: 0.55 }}
        />
      )}

      {/* Colour wash — lighter when photo present so the image reads through */}
      <div
        className="absolute inset-0"
        style={{
          background: track.image
            ? `linear-gradient(155deg, ${track.accentColor}28 0%, ${track.accentColor}10 45%, #0c0c0c 80%)`
            : `linear-gradient(155deg, ${track.accentColor}55 0%, ${track.accentColor}22 45%, #0c0c0c 100%)`,
        }}
      />
      {/* Subtle dark vignette */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

      {/* Top row: track number + genre tag */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-4">
        <span className="font-mono text-white/20 tabular-nums select-none" style={{ fontSize: '11px' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {track.genre && (
          <span
            className="font-sans tracking-wider uppercase"
            style={{
              fontSize: '9px',
              letterSpacing: '0.12em',
              padding: '3px 8px',
              background: 'rgba(12,12,12,0.6)',
              color: 'rgba(240,236,228,0.45)',
              backdropFilter: 'blur(6px)',
            }}
          >
            {track.genre}
          </span>
        )}
      </div>

      {/* Centre: play button on hover */}
      {primaryLink && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label={`Play ${track.title}`}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease }}
            className="flex items-center justify-center w-14 h-14 rounded-full"
            style={{
              border: '1.5px solid rgba(200,169,110,0.75)',
              background: 'rgba(200,169,110,0.15)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Play size={18} className="text-accent ml-0.5" fill="currentColor" />
          </motion.div>
        </a>
      )}

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3/5 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(12,12,12,0.97) 0%, rgba(12,12,12,0.7) 55%, transparent 100%)',
        }}
      />

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3
            className="font-display text-text-primary leading-tight"
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', fontWeight: 500 }}
          >
            {track.title}
          </h3>
          {track.titleSinhala && (
            <p className="mt-0.5" style={{ fontSize: '12px', color: `${track.accentColor}cc` }}>
              {track.titleSinhala}
            </p>
          )}
          <p className="text-text-muted/40 font-sans mt-1.5" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>
            {track.type}&nbsp;&nbsp;·&nbsp;&nbsp;{track.year}
          </p>
        </div>

        {/* Streaming links — fade in on hover */}
        <div className="flex-shrink-0 flex flex-col gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
          {track.links.youtube && (
            <a
              href={track.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/35 hover:text-accent transition-colors duration-150"
              aria-label={`Watch ${track.title} on YouTube`}
            >
              <Play size={12} />
            </a>
          )}
          {track.links.appleMusic && (
            <a
              href={track.links.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/35 hover:text-accent transition-colors duration-150"
              aria-label={`Listen to ${track.title} on Apple Music`}
            >
              <Music2 size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function VideoEmbed({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
  )

  return (
    <motion.div variants={videoCellVariants} className="group bg-surface border border-border overflow-hidden flex flex-col">
      <div className="relative aspect-video bg-background overflow-hidden flex-shrink-0">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumbSrc}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              loading="lazy"
              onError={() =>
                setThumbSrc(`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`)
              }
            />
            <div className="absolute inset-0 bg-background/30" />
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full border border-accent/60 transition-all duration-300 group-hover:scale-105 group-hover:border-accent"
              style={{ background: 'rgba(200,169,110,0.15)' }}
            >
              <Play size={22} className="text-accent ml-1" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
      <div className="p-5 flex-1">
        <h3 className="font-display text-base text-text-primary leading-snug mb-1" style={{ fontWeight: 500 }}>
          {video.title}
        </h3>
        <p className="text-xs text-text-muted font-sans leading-relaxed">{video.description}</p>
      </div>
    </motion.div>
  )
}

export default function MusicVideos() {
  const [activeTab, setActiveTab] = useState<'tracks' | 'videos'>('videos')
  const [showAll, setShowAll] = useState(false)

  const displayedTracks = showAll ? discography : discography.slice(0, INITIAL_TRACK_COUNT)
  const hasMore = discography.length > INITIAL_TRACK_COUNT && !showAll

  return (
    <section id="music" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-sans">Discography</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-text-primary" style={{ fontWeight: 700 }}>
            Music
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-8 border-b border-border mb-10">
          {(['videos', 'tracks'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-4 text-xs tracking-[0.25em] uppercase font-sans transition-colors duration-200 ${
                activeTab === tab ? 'text-text-primary' : 'text-text-muted hover:text-text-primary/70'
              }`}
            >
              {tab === 'tracks' ? 'Tracks' : 'Videos'}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                  transition={{ duration: 0.25, ease }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'tracks' ? (
            <motion.div
              key="tracks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Album grid */}
              <motion.div
                variants={gridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 lg:grid-cols-4 gap-1"
              >
                <AnimatePresence>
                  {displayedTracks.map((track, i) => (
                    <AlbumCard key={`${track.title}-${track.year}`} track={track} index={i} />
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* More Music / Coming Soon row */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                {comingSoon && (
                  <div className="flex items-center gap-3">
                    <Sparkles size={14} className="text-accent flex-shrink-0" />
                    <p className="text-text-muted font-sans" style={{ fontSize: '15px' }}>
                      <span className="font-display italic text-accent" style={{ fontSize: '17px' }}>New music is cooking.</span>
                      {' '}Follow{' '}
                      <a
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-accent transition-colors underline underline-offset-2"
                      >
                        @shaunagain
                      </a>
                      {' '}for the first look.
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-6 flex-shrink-0">
                  {hasMore && (
                    <button
                      onClick={() => setShowAll(true)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-widest uppercase font-medium font-sans bg-accent hover:bg-accent-hover transition-colors duration-200"
                      style={{ color: '#0c0c0c', letterSpacing: '0.12em' }}
                    >
                      More Music
                    </button>
                  )}
                  <a
                    href={socials.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-sans tracking-widest uppercase text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2"
                  >
                    <ExternalLink size={12} />
                    Apple Music
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <motion.div
                variants={videoGridVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border"
              >
                {videos.map((video) => (
                  <div key={video.youtubeId} className="bg-background">
                    <VideoEmbed video={video} />
                  </div>
                ))}
              </motion.div>
              <div className="mt-10 flex justify-center">
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans tracking-widest uppercase text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2"
                >
                  <Play size={13} />
                  More on YouTube
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
