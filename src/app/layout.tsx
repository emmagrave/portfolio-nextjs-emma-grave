import type { Metadata } from 'next'
import { Crimson_Pro, Allura } from 'next/font/google'
import './globals.css'

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-crimson',
  display: 'swap',
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Emma Grave — Développeuse Web',
  description: 'Portfolio d\'Emma Grave, développeuse web full-stack alternante chez Adexos. Découvrez mes compétences, projets et parcours en développement web.',
  keywords: ['Emma Grave', 'Développeuse Web', 'Portfolio', 'Next.js', 'React', 'Full-Stack', 'Magento', 'PHP'],
  authors: [{ name: 'Emma Grave' }],
  openGraph: {
    title: 'Emma Grave — Développeuse Web',
    description: 'Portfolio professionnel - Alternante en développement web',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${crimsonPro.variable} ${allura.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
