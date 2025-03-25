import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      {/* Diğer section'lar buraya eklenecek */}
    </main>
  )
} 