import React, { useEffect, useRef, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop',
]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2200)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  return (
    <div className="relative border-4 border-[#3B2F2F] overflow-hidden" style={{imageRendering:'pixelated'}}> 
      <div className="flex transition-all duration-200 ease-linear" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-72 md:h-96 bg-[#3B2F2F]">
            <img src={src} alt="slide" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-8 h-8 border-2 border-[#3B2F2F] bg-[#E8DCC0] text-[#3B2F2F] font-bold ${i===index?'opacity-100':'opacity-60'} active:translate-y-[1px] transition-all`}>{i+1}</button>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-[#2E5E3A] text-[#E8DCC0] px-3 py-2 text-xs uppercase tracking-wider">Snap Cut</div>
    </div>
  )
}

export default Carousel
