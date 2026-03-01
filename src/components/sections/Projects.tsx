// src/components/sections/Projects.tsx
'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { projectsData } from '@/data/portfolioData'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [flipped, setFlipped] = useState<number[]>([])

  const toggleFlip = (idx: number) => {
    if (flipped.includes(idx)) {
      setFlipped(flipped.filter((i) => i !== idx))
    } else {
      setFlipped([...flipped, idx])
    }
  }

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-28 px-16 max-md:px-6 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-accent">
        PROJETS PERSONNELS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="perspective-1000 cursor-pointer"
            onClick={() => toggleFlip(idx)}
            style={{ perspective: '1000px' }}
          >
            <div
              className={`relative w-full h-[440px] transition-transform duration-700 transform-style-3d ${
                flipped.includes(idx) ? 'rotate-y-180' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped.includes(idx) ? 'rotateY(180deg)' : 'rotateY(0deg)',  // ← Change ça
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden'}}
              >
                <div
                  className="w-full h-[58%] flex items-center justify-center text-white text-lg"
                  style={{ background: project.imagePlaceholder }}
                >
                  <Image
                      src={`images/${project.imagePlaceholder}`}
                      alt={project.title}
                      fill
                      className="object-cover !relative"
                      quality={75}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    {project.status && (
                      <p className="text-accent italic text-sm mt-1">
                        {project.status}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary to-accent text-white p-9 flex flex-col justify-between rotate-y-180"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div>
                  <p className="text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-white/20 rounded-full text-xs tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block px-7 py-3 bg-white text-accent rounded-full font-semibold text-sm hover:bg-dark hover:text-white transition-colors self-start"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.link.includes('github') ? 'Voir sur GitHub' : 'Visiter le site'}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
