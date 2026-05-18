import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MusicVideos from '@/components/MusicVideos'
import Press from '@/components/Press'
import Connect from '@/components/Connect'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <MusicVideos />
        <Press />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
