import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-[#E8DCC0] text-[#3B2F2F] py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_1.2fr] gap-8">
        <div>
          <h2 className="font-display text-6xl md:text-7xl uppercase leading-none mb-6">Contact</h2>
          <p className="font-ui max-w-prose">Envie de collaborer ? Ecrivez-moi. Réponse rapide, style tranchant.</p>
        </div>
        <form className="grid grid-cols-1 gap-4 border-4 border-[#3B2F2F] p-6 bg-white/60">
          <input className="px-4 py-3 border-4 border-[#3B2F2F] bg-[#E8DCC0] text-[#3B2F2F] placeholder-[#3B2F2F]/70 focus:outline-none focus:bg-white transition-colors" placeholder="Votre nom" />
          <input className="px-4 py-3 border-4 border-[#3B2F2F] bg-[#E8DCC0] text-[#3B2F2F] placeholder-[#3B2F2F]/70 focus:outline-none focus:bg-white transition-colors" placeholder="Email" />
          <textarea rows="4" className="px-4 py-3 border-4 border-[#3B2F2F] bg-[#E8DCC0] text-[#3B2F2F] placeholder-[#3B2F2F]/70 focus:outline-none focus:bg-white transition-colors" placeholder="Message"></textarea>
          <button className="bg-[#2E5E3A] text-[#E8DCC0] px-6 py-3 border-4 border-[#3B2F2F] uppercase tracking-wide hover:opacity-90 active:translate-y-[2px] transition-all w-fit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
