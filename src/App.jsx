import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#E8DCC0] text-[#3B2F2F]">
      <Navbar />
      <Hero />
      <main className="relative">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}}></div>
        <Projects />
        <About />
        <Contact />
        <footer className="bg-[#3B2F2F] text-[#E8DCC0] py-6 border-t-4 border-[#E8DCC0]">
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <span className="font-ui uppercase text-sm">© {new Date().getFullYear()} Brutal Web</span>
            <a href="#home" className="px-3 py-2 border-2 border-[#E8DCC0] hover:bg-[#E8DCC0] hover:text-[#3B2F2F] transition-colors uppercase text-sm">Haut de page</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
