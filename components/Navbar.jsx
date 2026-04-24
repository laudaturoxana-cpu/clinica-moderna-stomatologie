'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/context/LangContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavLink(e, href) {
    e.preventDefault()
    setDrawerOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 3C10 3 6 8 6 13.5c0 3.5 1.5 6.5 4 8.5V29h12v-7c2.5-2 4-5 4-8.5C26 8 22 3 16 3z"
                fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <line x1="11" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="13" y1="26" x2="19" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Clinica Dentara</span>
            <span className="logo-sub">Demo</span>
          </div>
        </a>

        <div className="nav-links" id="navLinks">
          {[['#servicii','nav.services'],['#despre','nav.about'],['#preturi','nav.pricing'],
            ['#testimoniale','nav.reviews'],['#contact','nav.contact']].map(([href, key]) => (
            <a key={href} href={href} onClick={e => handleNavLink(e, href)}>{t(key)}</a>
          ))}
        </div>

        <div className="nav-right">
          <button className="lang-btn" onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'ro' ? 'lang-active' : ''}>RO</span>
            <span className="lang-sep">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>
          <a href="#programare" className="btn btn-gold nav-cta"
            onClick={e => handleNavLink(e, '#programare')}>{t('nav.cta')}</a>
          <button className="hamburger" onClick={() => setDrawerOpen(o => !o)} aria-label="Meniu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`}>
        {[['#servicii','nav.services'],['#despre','nav.about'],['#preturi','nav.pricing'],
          ['#testimoniale','nav.reviews'],['#contact','nav.contact']].map(([href, key]) => (
          <a key={href} href={href} onClick={e => handleNavLink(e, href)}>{t(key)}</a>
        ))}
        <a href="#programare" className="btn btn-gold"
          onClick={e => handleNavLink(e, '#programare')}>{t('nav.cta')}</a>
      </div>
    </nav>
  )
}
