'use client'
import { useLang } from '@/context/LangContext'

function handleScroll(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const SERVICES = [
  { tkey: 's1', icon: 'search', color: 'teal',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg> },
  { tkey: 's2', icon: 'smile', color: 'gold',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { tkey: 's3', icon: 'implant', color: 'teal',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="5" r="3"/><path d="M12 8v14M5 12H2a10 10 0 0020 0h-3"/></svg> },
  { tkey: 's4', icon: 'star', color: 'gold',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3 6.5 7 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.4 2 9.5l7-1z"/></svg> },
  { tkey: 's5', icon: 'flag', color: 'teal',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg> },
  { tkey: 's6', icon: 'heart', color: 'gold',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
  { tkey: 's7', icon: 'phone', color: 'teal',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13 19.79 19.79 0 011.62 4.35 2 2 0 013.6 2.18h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.18 6.18l.91-.91a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg> },
  { tkey: 's8', icon: 'lock', color: 'gold',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> },
]

export default function Services() {
  const { t } = useLang()
  return (
    <section id="servicii" className="section bg-cream" data-screen-label="03 Servicii">
      <div className="container">
        <div className="section-head reveal-up">
          <span className="tag">{t('srv.tag')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('srv.title').replace('\n', '<br>') }} />
          <p>{t('srv.sub')}</p>
        </div>
        <div className="services-grid">
          {SERVICES.map(({ tkey, svg, color }, i) => (
            <div key={tkey} className="scard reveal-up" style={{ '--d': `${i * 0.06}s` }}>
              <div className={`scard-icon ${color}`}>{svg}</div>
              <h3>{t(`${tkey}.t`)}</h3>
              <p>{t(`${tkey}.d`)}</p>
              <a href="#programare" className="scard-link" onClick={e => handleScroll(e, '#programare')}>{t(`${tkey}.l`)}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
