export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-accent/40" />
          <span className="font-display italic text-text-muted text-sm">Shaun Perera</span>
        </div>

        <p className="text-xs font-sans text-text-muted/50 tracking-wide text-center">
          &copy; {year} Shaun Perera. All rights reserved.
        </p>

        <p className="text-xs font-sans text-text-muted/40 tracking-wide">
          Made with love in Sri Lanka 🇱🇰
        </p>
      </div>
    </footer>
  )
}
