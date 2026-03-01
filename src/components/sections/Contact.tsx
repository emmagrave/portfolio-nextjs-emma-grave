'use client'

import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-28 px-8 text-center bg-gradient-to-br from-primary to-accent text-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-white">
        CONTACT
      </h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl leading-relaxed mb-10">
          Vous avez un projet en tête ?<br />
          N'hésitez pas à me contacter !
        </p>
        <a
          href="mailto:graveemma842@gmail.com"
          className="inline-block text-2xl md:text-3xl border-b-2 border-white/50 hover:border-white pb-2 transition-all duration-300"
        >
          graveemma842@gmail.com
        </a>
      </div>
    </section>
  )
}
