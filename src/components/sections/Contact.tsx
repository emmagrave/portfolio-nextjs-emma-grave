'use client'

import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
      <section
          id="contact"
          ref={ref}
          className={`py-20 px-6 text-center bg-accent text-white transition-opacity duration-500 ${
              inView ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-12">
          CONTACT
        </h2>

        <div className="max-w-xl mx-auto">
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Vous avez un projet en tête ?<br />
            N'hésitez pas à me contacter !
          </p>

          <a
              href="mailto:graveemma842@gmail.com"
              className="inline-block text-xl md:text-2xl font-medium border-b border-white/30 hover:border-white transition-colors duration-300"
          >
            graveemma842@gmail.com
          </a>
        </div>
      </section>
  )
}