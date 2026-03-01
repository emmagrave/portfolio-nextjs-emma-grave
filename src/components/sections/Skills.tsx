'use client'

import { useInView } from 'react-intersection-observer'
import { skillsData } from '@/data/portfolioData'
import Image from 'next/image'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
      <section
          id="skills"
          ref={ref}
          className={`py-20 px-6 bg-white transition-opacity duration-500 ${
              inView ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h2 className="text-center text-3xl md:text-4xl font-light tracking-[5px] mb-12">
          COMPÉTENCES
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
              <div key={idx} className="bg-[#fafafa] p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl text-accent mb-6 font-medium uppercase tracking-tight">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div className="flex justify-between mb-1 text-[10px] font-bold uppercase opacity-70">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-[3px] bg-gray-200 rounded-full">
                          <div
                              className="h-full bg-accent transition-all duration-1000 ease-out"
                              style={{ width: inView ? `${skill.level}%` : '0%' }}
                          />
                        </div>
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>

        <div className="max-w-[200px] mx-auto mt-16 text-center">
          <div className="mb-6 rounded shadow-sm border border-gray-50 overflow-hidden bg-gray-100">
            <Image
                src="images/cv.webp"
                alt="Aperçu CV"
                width={180}
                height={250}
                className="mx-auto grayscale opacity-80"
                loading="lazy"
                quality={40}
            />
          </div>

          <a
              href="cv/CV-EmmaGrave.pdf"
              download="CV-EmmaGrave.pdf"
              className="inline-block w-full py-3 bg-black text-white text-[10px] font-bold tracking-widest hover:bg-accent transition-colors uppercase"
          >
            Télécharger le CV
          </a>
        </div>
      </section>
  )
}