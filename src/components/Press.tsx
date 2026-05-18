'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { pressQuotes, type PressQuote } from '@/lib/content'
import { ExternalLink } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const INITIAL_GRID = 3

function FeaturedCard({ quote }: { quote: PressQuote }) {
  return (
    <a
      href={quote.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-border hover:border-accent/40 transition-colors duration-300 mb-px overflow-hidden"
    >
      <div className={quote.image ? 'lg:grid lg:grid-cols-[1fr_360px]' : ''}>
        {/* Text panel */}
        <div
          className="relative p-8 lg:p-14"
          style={{ background: 'rgba(200,169,110,0.03)' }}
        >
          {/* Label row */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent">Featured</span>
            <div className="h-px flex-1 bg-border" />
            {quote.year && (
              <span className="text-xs text-text-muted/60 font-sans tabular-nums">{quote.year}</span>
            )}
          </div>

          <blockquote className="max-w-2xl">
            <p
              className="font-display italic text-text-primary leading-relaxed"
              style={{ fontSize: 'clamp(20px, 2.6vw, 32px)', fontWeight: 400 }}
            >
              &ldquo;{quote.quote}&rdquo;
            </p>
          </blockquote>

          <div className="mt-10 flex items-center justify-between gap-6 flex-wrap">
            <p
              className="font-display text-text-primary"
              style={{ fontSize: 'clamp(17px, 1.5vw, 22px)', fontWeight: 700 }}
            >
              {quote.publication}
            </p>
            <div className="inline-flex items-center gap-2 text-text-muted/50 group-hover:text-accent transition-colors duration-200">
              <span className="text-xs font-sans tracking-widest uppercase">Read Article</span>
              <ExternalLink size={12} />
            </div>
          </div>
        </div>

        {/* Photo panel — desktop only, bleeds in from the right */}
        {quote.image && (
          <div className="hidden lg:block relative overflow-hidden min-h-[280px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={quote.image}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: 0.55 }}
            />
            {/* Left-edge blend into the text panel */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(12,12,12,1) 0%, rgba(12,12,12,0.6) 30%, rgba(12,12,12,0.1) 100%)',
              }}
            />
            {/* Bottom blend into footer */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(12,12,12,0.7) 0%, transparent 50%)',
              }}
            />
          </div>
        )}
      </div>
    </a>
  )
}

function PressCard({ quote }: { quote: PressQuote }) {
  return (
    <a
      href={quote.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden bg-surface border border-border p-7 hover:border-accent/30 transition-colors duration-300 h-full"
    >
      {/* Subtle atmospheric photo (selected cards only) */}
      {quote.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={quote.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500"
            style={{ opacity: 0.1 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 40%, rgba(20,20,20,0.75) 100%)' }}
          />
        </>
      )}

      {/* Content — above the image layers */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-sans tracking-[0.25em] uppercase text-accent">
            {quote.publication}
          </span>
          <div className="flex items-center gap-2">
            {quote.year && (
              <span className="text-xs text-text-muted/60 font-sans tabular-nums">{quote.year}</span>
            )}
            <ExternalLink
              size={12}
              className="text-text-muted/30 group-hover:text-accent/60 transition-colors duration-200"
            />
          </div>
        </div>

        <div
          className="font-display leading-none mb-3 select-none"
          style={{ fontSize: '64px', fontWeight: 900, color: 'rgba(200,169,110,0.14)', lineHeight: 1 }}
          aria-hidden
        >
          &ldquo;
        </div>

        <p
          className="font-display italic text-text-primary leading-relaxed flex-1"
          style={{ fontSize: '16px', fontWeight: 400 }}
        >
          {quote.quote}
        </p>
      </div>
    </a>
  )
}

export default function Press() {
  const [showAll, setShowAll] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const featured = pressQuotes[0]
  const gridItems = pressQuotes.slice(1)
  const visible = showAll ? gridItems : gridItems.slice(0, INITIAL_GRID)
  const hasMore = !showAll && gridItems.length > INITIAL_GRID

  return (
    <section id="press" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs text-accent tracking-[0.3em] uppercase font-sans">In the Media</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl text-text-primary" style={{ fontWeight: 700 }}>
            Press
          </h2>
        </div>

        {/* Featured */}
        <FeaturedCard quote={featured} />

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          <AnimatePresence initial={false}>
            {visible.map((q, i) => (
              <motion.div
                key={`${q.publication}-${i}`}
                className="bg-background"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.38, ease, delay: shouldReduceMotion ? 0 : i * 0.07 }}
                layout
              >
                <PressCard quote={q} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-widest uppercase font-medium font-sans border border-accent/50 text-accent hover:bg-accent hover:text-background transition-colors duration-200"
              style={{ letterSpacing: '0.12em' }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
