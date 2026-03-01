'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { skillsData } from '@/data/portfolioData'
import Image from 'next/image'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [modalOpen, setModalOpen] = useState(false)

  const downloadCV = (lang: 'fr' | 'en') => {
    const fileName = lang === 'fr' ? 'CV-EmmaGrave.pdf' : 'CV-EmmaGrave-EN.pdf'
    const link = document.createElement('a')
    link.href = `/cv/${fileName}`
    link.download = fileName
    link.click()
    setModalOpen(false)
  }

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 px-16 max-md:px-6 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-accent">
        COMPÉTENCES
      </h2>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {skillsData.map((category, idx) => (
          <SkillCategory key={idx} category={category} inView={inView} />
        ))}
      </div>

      {/* CV Section */}
      <div className="max-w-xl mx-auto mt-16 text-center">
        <div className="w-full max-w-sm mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="aspect-[4/5.5] bg-white flex items-center justify-center">
            <Image
                src="images/cv.png"
                alt="Aperçu CV"
                width={400}
                height={550}
                className="w-full"
            />
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-4 px-9 py-4 bg-accent text-white rounded-full text-lg hover:bg-dark hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Télécharger mon CV
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-xl z-[2000] flex items-center justify-center p-6 top-40"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-11 rounded-2xl max-w-md w-full text-center animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl mb-8">Télécharger</h3>
            <div className="flex flex-col gap-4">
              <button
                  onClick={() => downloadCV('fr')}
                  className="py-4 px-7 bg-accent text-white rounded-full text-lg hover:bg-dark hover:-translate-y-1 transition-all">
                CV en Français
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="py-4 px-7 bg-transparent border-2 border-dark text-dark rounded-full text-lg hover:bg-dark hover:text-white transition-all"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function SkillCategory({
  category,
  inView,
}: {
  category: (typeof skillsData)[0]
  inView: boolean
}) {
  return (
    <div className="bg-light p-9 rounded-2xl border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
      <h3 className="font-cursive text-3xl text-accent mb-7">
        {category.title}
      </h3>
      <div className="space-y-5">
        {category.skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-primary to-accent rounded-full relative overflow-hidden transition-all duration-1000 ${
                  inView ? `w-[${skill.level}%]` : 'w-0'
                }`}
                style={{ width: inView ? `${skill.level}%` : '0%' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
