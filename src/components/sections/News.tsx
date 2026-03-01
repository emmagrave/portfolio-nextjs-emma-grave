// src/components/sections/News.tsx
'use client'

import { useInView } from 'react-intersection-observer'
import { newsData } from '@/data/portfolioData'

export default function News() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="news"
      ref={ref}
      className={`py-28 px-16 max-md:px-6 bg-light transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-accent">
        ACTUALITÉS
      </h2>

      <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray mb-16">
        Au fil des années, j'ai eu la chance de prendre part à de nombreuses
        activités qui ont enrichi mon parcours et m'ont permis de développer mes
        compétences personnelles et professionnelles.
      </p>

      <div className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent -translate-x-1/2" />

        {newsData.map((yearGroup, yIdx) => (
          <div key={yIdx}>
            <div className="text-center my-14 relative">
              <span className="inline-block px-6 py-2 bg-light text-accent font-semibold text-lg tracking-wide relative z-10 md:mb-11">
                {yearGroup.year}
              </span>
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-[0_0_0_5px_theme(colors.light)] z-10" />
            </div>

            {yearGroup.items.map((item, iIdx) => (
              <div
                key={iIdx}
                className={`mb-7 ${
                  iIdx % 2 === 0
                    ? 'md:pr-[calc(50%+2.5rem)] md:text-right'
                    : 'md:pl-[calc(50%+2.5rem)] md:text-left'
                }`}
              >
                <div className="bg-white p-7 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted italic mb-4">{item.date}</p>
                  <p className="leading-relaxed text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
