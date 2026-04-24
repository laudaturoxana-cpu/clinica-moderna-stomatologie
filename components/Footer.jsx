'use client'
import { useLang } from '@/context/LangContext'

function handleScroll(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer" data-screen-label="12 Footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo logo-light">
              <div className="logo-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3C10 3 6 8 6 13.5c0 3.5 1.5 6.5 4 8.5V29h12v-7c2.5-2 4-5 4-8.5C26 8 22 3 16 3z"
                    fill="rgba(184,149,90,0.15)" stroke="rgba(184,149,90,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <line x1="11" y1="22" x2="21" y2="22" stroke="rgba(184,149,90,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="13" y1="26" x2="19" y2="26" stroke="rgba(184,149,90,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">Clinica Dentara</span>
                <span className="logo-sub">Demo</span>
              </div>
            </a>
            <p className="footer-tag">{t('ft.tag')}</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
              </a>
              <a href="https://wa.me/40721000000" aria-label="WhatsApp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413zm-5.422 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z"/></svg>
              </a>
            </div>
          </div>

          {[
            { label: 'ft.srv', links: [['#servicii','ft.l1'],['#servicii','ft.l2'],['#servicii','ft.l3'],['#servicii','ft.l4'],['#servicii','ft.l5']] },
            { label: 'ft.cl',  links: [['#despre','ft.l6'],['#tehnologie','ft.l7'],['#preturi','ft.l8'],['#testimoniale','ft.l9'],['#faq','ft.l10']] },
            { label: 'ft.leg', links: [['#','ft.l11'],['#','ft.l12'],['#','ft.l13']] },
          ].map(({ label, links }) => (
            <div key={label} className="footer-col">
              <strong>{t(label)}</strong>
              {links.map(([href, key]) => (
                <a key={key} href={href} onClick={e => handleScroll(e, href)}>{t(key)}</a>
              ))}
              {label === 'ft.leg' && (
                <a href="#programare" className="btn btn-gold btn-sm" style={{ marginTop: '1rem' }}
                  onClick={e => handleScroll(e, '#programare')}>{t('ft.cta')}</a>
              )}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© {year} Clinica Dentara Demo. {t('ft.rights')}</p>
          <p>{t('ft.built')}</p>
        </div>
      </div>
    </footer>
  )
}
