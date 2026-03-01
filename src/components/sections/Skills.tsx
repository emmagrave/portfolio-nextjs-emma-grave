'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { skillsData } from '@/data/portfolioData'
import Image from 'next/image'

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [modalOpen, setModalOpen] = useState(false)

  const downloadCV = () => {
    const fileName = 'CV-EmmaGrave.pdf'
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
      <div className="max-w-xs mx-auto mt-16 text-center">
        <Image
            src="/images/cv.webp"
            alt="Aperçu CV"
            width={200}
            height={280}
            className="rounded-lg shadow-lg mb-6 mx-auto grayscale hover:grayscale-0 transition-all"
            loading="lazy"
            quality={60}
        />
        <button
            onClick={downloadCV}
            className="w-full py-3 bg-dark text-white rounded-lg hover:bg-accent transition-colors"
        >
          Télécharger le CV (PDF)
        </button>
      </div>
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
