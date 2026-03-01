'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#alternance', label: 'Alternance' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleMenuClick = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] h-[72px] px-16 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-light/95 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        } max-md:px-6`}
      >
        <Link href="/" className="font-cursive text-3xl text-dark">
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-11 list-none">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-dark text-sm tracking-wider transition-colors duration-300 hover:text-accent after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Burger Button */}
        <button
          onClick={toggleMobileMenu}
          className={`md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer z-[1100] ${
            mobileMenuOpen ? 'open' : ''
          }`}
          aria-label="Menu"
        >
          <span
            className={`block h-[2px] bg-dark rounded-sm transition-all duration-300 origin-center ${
              mobileMenuOpen
                ? 'translate-y-[7px] rotate-45 w-7'
                : 'w-7'
            }`}
          />
          <span
            className={`block h-[2px] bg-dark rounded-sm transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0 w-5' : 'opacity-100 w-5'
            }`}
          />
          <span
            className={`block h-[2px] bg-dark rounded-sm transition-all duration-300 origin-center ${
              mobileMenuOpen
                ? '-translate-y-[7px] -rotate-45 w-7'
                : 'w-7'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-light/98 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center gap-10 md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleMenuClick}
              className="text-dark text-3xl font-sans tracking-[3px] uppercase transition-colors duration-300 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
