'use client'
import { useLang } from '@/context/LangContext'

function handleScroll(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (!target) return
  window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l3 3 7-7"/></svg>
)
const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4l8 8M12 4l-8 8"/></svg>
)

const PLANS = [
  {
    key: 'p1', featured: false,
    features: [
      { key: 'f1', ok: true }, { key: 'f2', ok: true }, { key: 'f3', ok: true },
      { key: 'f4', ok: true }, { key: 'f5', ok: false }, { key: 'f6', ok: false },
    ],
  },
  {
    key: 'p2', featured: true,
    features: [
      { key: 'f1', ok: true }, { key: 'f2', ok: true }, { key: 'f3', ok: true },
      { key: 'f4', ok: true }, { key: 'f5', ok: true }, { key: 'f6', ok: false },
    ],
  },
  {
    key: 'p3', featured: false,
    features: [
      { key: 'f1', ok: true }, { key: 'f2', ok: true }, { key: 'f3', ok: true },
      { key: 'f4', ok: true }, { key: 'f5', ok: true }, { key: 'f6', ok: true },
    ],
  },
]

export default function Pricing() {
  const { t } = useLang()
  return (
    <section id="preturi" className="section bg-white" data-screen-label="07 Prețuri">
      <div className="container">
        <div className="section-head reveal-up">
          <span className="tag">{t('pr.tag')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('pr.title').replace('\n', '<br>') }} />
          <p>{t('pr.sub')}</p>
        </div>
        <div className="pricing-grid">
          {PLANS.map(({ key, featured, features }, i) => (
            <div key={key} className={`pcard reveal-up${featured ? ' pcard-feat' : ''}`} style={{ '--d': `${i * 0.1}s` }}>
              {featured && <div className="pcard-badge">{t(`${key}.badge`)}</div>}
              <div className="pcard-head">
                <span className="ptier">{t(`${key}.tier`)}</span>
                <div className="pprice">
                  <sup>RON</sup>
                  <strong>{key === 'p1' ? '299' : key === 'p2' ? '549' : '999'}</strong>
                  <span>{t(`${key}.per`)}</span>
                </div>
                <p>{t(`${key}.desc`)}</p>
              </div>
              <ul className="pfeatures">
                {features.map(({ key: fk, ok }) => (
                  <li key={fk} className={ok ? 'ok' : 'no'}>
                    {ok ? <CheckIcon /> : <XIcon />}
                    <span>{t(`${key}.${fk}`)}</span>
                  </li>
                ))}
              </ul>
              <a href="#programare"
                className={`btn ${featured ? 'btn-gold' : 'btn-outline-dark'} w100`}
                onClick={e => handleScroll(e, '#programare')}>{t('pr.cta')}</a>
            </div>
          ))}
        </div>
        <p className="pr-note reveal-up">{t('pr.note')}</p>
      </div>
    </section>
  )
}
