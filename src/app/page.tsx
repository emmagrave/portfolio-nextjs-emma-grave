import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import News from '@/components/sections/News'
import Skills from '@/components/sections/Skills'
import Alternance from '@/components/sections/Alternance'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import CVModal from '@/components/CVModal'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <News />
        <Skills />
        <Alternance />
        <Projects />
        <Contact />
      </main>
      <CVModal />
    </>
  )
}
