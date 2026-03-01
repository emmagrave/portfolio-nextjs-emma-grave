'use client'

import { useInView } from 'react-intersection-observer'
import { alternancePhases, alternanceCards } from '@/data/portfolioData'

export default function Alternance() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="alternance"
      ref={ref}
      className={`py-28 px-16 max-md:px-6 bg-light transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-accent">
        ALTERNANCE
      </h2>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 pb-8 border-b border-border flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="font-cursive text-5xl md:text-6xl block leading-tight mb-1">
            Adexos
          </span>
          <span className="text-sm text-muted tracking-wide">
            E-commerce & Web · Depuis février 2025
          </span>
        </div>
        <div className="px-6 py-2 border-2 border-accent rounded-full text-accent text-sm font-medium">
          Développeuse web Full-Stack
        </div>
      </div>

      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed mb-16">
        Mon alternance chez Adexos m'a permis de progresser rapidement dans un
        environnement e-commerce exigeant, en passant d'une maîtrise de Magento 2
        à la réalisation de projets clients concrets en autonomie croissante.
      </p>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mb-20 relative pl-10">
        <div className="absolute left-2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent via-border to-transparent" />

        {alternancePhases.map((phase, idx) => (
          <div key={idx} className="relative pl-10 pb-12 last:pb-0">
            <div
              className={`absolute left-[-2.55rem] top-1.5 w-[17px] h-[17px] rounded-full border-[3px] border-light ${
                phase.status === 'current'
                  ? 'bg-primary shadow-[0_0_0_2px_theme(colors.primary),0_0_14px_rgba(201,160,168,0.55)] animate-pulse-dot'
                  : phase.status === 'next'
                  ? 'bg-light shadow-[0_0_0_2px_#ccc]'
                  : 'bg-accent shadow-[0_0_0_2px_theme(colors.accent)]'
              }`}
            />

            <p className="text-xs uppercase tracking-widest text-accent mb-2">
              {phase.period}
            </p>
            <h3 className="font-cursive text-3xl mb-3">{phase.title}</h3>
            <p
              className={`text-lg leading-relaxed max-w-2xl mb-4 ${
                phase.status === 'next' ? 'text-muted' : ''
              }`}
            >
              {phase.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {phase.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className={`px-3 py-1 text-xs rounded-full ${
                    phase.status === 'next'
                      ? 'bg-transparent border border-dashed border-gray-300 text-muted'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {phase.highlight && (
              <div className="inline-flex items-center gap-2 text-sm italic text-gray-600">
                <svg
                  className="w-4 h-4 stroke-accent"
                  fill="none"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {phase.highlight}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Skills Cards */}
      <div className="max-w-5xl mx-auto">
        <h3 className="font-cursive text-4xl text-accent text-center mb-8">
          Ce que j'ai appris
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alternanceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-border hover:-translate-y-2 hover:shadow-xl hover:border-accent transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                {/* Icon placeholder */}
                <span className="text-2xl">•</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
              <p className="text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
