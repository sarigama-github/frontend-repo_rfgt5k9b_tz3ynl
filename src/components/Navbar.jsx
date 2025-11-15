import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#E8DCC0] border-b-4 border-[#3B2F2F]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-display text-3xl tracking-tight text-[#3B2F2F] select-none hover:opacity-80 transition-opacity">
          PORTFOLIO
        </a>
        <nav className="flex items-center gap-6 text-[#3B2F2F] font-ui text-sm uppercase">
          <a href="#projects" className="px-2 py-1 border-2 border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#E8DCC0] transition-colors">Projets</a>
          <a href="#about" className="px-2 py-1 border-2 border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#E8DCC0] transition-colors">À propos</a>
          <a href="#contact" className="px-2 py-1 border-2 border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-[#E8DCC0] transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
