import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-[#3B2F2F] text-[#E8DCC0] py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-6">À propos</h2>
          <p className="font-ui max-w-prose">Designer / développeur qui aime les interfaces taillées au couteau. J'explore une esthétique brutaliste contemporaine : grilles visibles, contrastes violents, typographies massives et micro-animations abruptes pour une présence forte et minimale.</p>
        </div>
        <div className="border-4 border-[#E8DCC0] p-6 bg-[#2E5E3A] text-[#E8DCC0]">
          <p className="font-ui">Compétences clés</p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <li className="px-3 py-2 bg-[#E8DCC0] text-[#3B2F2F] uppercase">UI Brutaliste</li>
            <li className="px-3 py-2 bg-[#E8DCC0] text-[#3B2F2F] uppercase">Prototypage</li>
            <li className="px-3 py-2 bg-[#E8DCC0] text-[#3B2F2F] uppercase">Motion sec</li>
            <li className="px-3 py-2 bg-[#E8DCC0] text-[#3B2F2F] uppercase">Front React</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
