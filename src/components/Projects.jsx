import React from 'react'
import Carousel from './Carousel'

const projects = [
  { title: 'Interface Monolithique', tag: 'Web App', year: '2025' },
  { title: 'Identité Géométrique', tag: 'Branding', year: '2024' },
  { title: 'Console Minimaliste', tag: 'Experimental', year: '2023' },
  { title: 'Système de Grille', tag: 'UI Kit', year: '2025' },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#E8DCC0] text-[#3B2F2F] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div>
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-6">Projets</h2>
            <p className="font-ui max-w-prose">Sélection de travaux avec une esthétique dure et assumée. Transitions sèches, blocs pleins, typographies géométriques. Chaque projet explore une matérialité digitale crue.</p>
            <div className="mt-8">
              <Carousel />
            </div>
          </div>
          <ul className="grid grid-cols-1 border-4 border-[#3B2F2F] divide-y-4 divide-[#3B2F2F]">
            {projects.map((p, i) => (
              <li key={i} className="p-4 hover:bg-[#3B2F2F] hover:text-[#E8DCC0] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wide font-bold">{p.title}</span>
                  <span className="text-sm">{p.tag} · {p.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
