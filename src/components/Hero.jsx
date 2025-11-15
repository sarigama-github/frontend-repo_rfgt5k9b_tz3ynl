import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#3B2F2F]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E8DCC0]/85 pointer-events-none"></div>
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-end">
        <div className="mb-10 grid md:grid-cols-2 gap-6 w-full">
          <h1 className="font-display text-[16vw] md:text-[10rem] leading-none text-[#E8DCC0] tracking-[-0.04em] uppercase select-none">
            Brutal<br/>Web
          </h1>
          <div className="flex flex-col justify-end">
            <p className="text-[#E8DCC0] md:text-lg leading-tight font-ui">
              Portfolio personnel au style néo-brutaliste: blocs massifs, contraste tranché et micro-animations abruptes. Inspiré par les interfaces dures et la matière digitale.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="bg-[#2E5E3A] text-[#E8DCC0] px-6 py-3 border-4 border-[#3B2F2F] uppercase tracking-wide hover:opacity-90 active:translate-y-[2px] transition-all">
                Voir les projets
              </a>
              <a href="#contact" className="bg-[#E8DCC0] text-[#3B2F2F] px-6 py-3 border-4 border-[#3B2F2F] uppercase tracking-wide hover:bg-[#3B2F2F] hover:text-[#E8DCC0] transition-colors">
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{backgroundImage:'radial-gradient(#000 1px, transparent 1px)', backgroundSize:'10px 10px'}}></div>
    </section>
  )
}

export default Hero
