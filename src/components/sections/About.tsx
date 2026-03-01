'use client'

import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 px-16 max-md:px-6 bg-white transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
      }`}
    >
      <h2 className="text-center text-4xl md:text-5xl font-light tracking-[7px] mb-16 relative after:content-[''] after:absolute after:bottom-[-1rem] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-accent">
        À PROPOS
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-16 md:gap-20 items-center">
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            <span className="font-cursive text-5xl leading-none inline-block mb-2">
              Salut !{' '}
            </span>
            <br />
            Je m'appelle Emma, j'ai 20 ans et je suis alternante chez{' '}
            <Link
              href="https://www.adexos.fr/"
              target="_blank"
              className="text-accent underline hover:text-dark transition-colors"
            >
              Adexos
            </Link>
            . J'étudie l'informatique en BUT à l'IUT de Lens, parcours
            "Développement d'Application".
          </p>

          <p>
            Passionnée par le développement web, j'ai acquis des compétences
            solides en programmation, gestion de bases de données et outils de
            développement.
          </p>

          <p>
            Toujours curieuse et en quête d'apprentissage, je réalise également
            des projets personnels pour mettre en pratique mes connaissances.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-8">
            {[
              {
                href: 'https://www.linkedin.com/in/emma-grave/',
                label: 'LinkedIn',
                d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
              {
                href: 'https://github.com/emmagrave',
                label: 'GitHub',
                d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
              },
              {
                href: 'mailto:graveemma842@gmail.com',
                label: 'Email',
                d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center border-2 border-dark rounded-full hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                <svg className="w-5 h-5 fill-dark" viewBox="0 0 24 24">
                  <path d={social.d} />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
          <Image
              src="images/me.jpg"
              alt="Emma Grave"
              width={500}
              height={625}
              className="w-full h-full object-cover"
              quality={75}
          />
        </div>
      </div>
    </section>
  )
}
