'use client'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'

const TEAM = [
  { key: 't1', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=400&q=80' },
  { key: 't2', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=400&q=80' },
  { key: 't3', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=400&q=80' },
  { key: 't4', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=400&q=80' },
]

const VALUES = [
  { tKey: 'av1', icon: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4"/><circle cx="10" cy="10" r="8"/></svg> },
  { tKey: 'av2', icon: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 18s-7-5-7-10a7 7 0 0114 0c0 5-7 10-7 10z"/></svg> },
  { tKey: 'av3', icon: <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10l5 5 11-10"/></svg> },
]

export default function About() {
  const { t } = useLang()
  return (
    <section id="despre" className="section bg-navy" data-screen-label="04 Despre">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal-up">
            <span className="tag tag-light">{t('ab.tag')}</span>
            <h2 className="light" dangerouslySetInnerHTML={{ __html: t('ab.title').replace('\n', '<br>') }} />
            <p className="light-muted">{t('ab.p1')}</p>
            <p className="light-muted">{t('ab.p2')}</p>
            <div className="about-vals">
              {VALUES.map(({ tKey, icon }) => (
                <div key={tKey} className="aval">
                  <div className="aval-icon">{icon}</div>
                  <div>
                    <strong>{t(`${tKey}.t`)}</strong>
                    <span>{t(`${tKey}.d`)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="team-grid reveal-right" style={{ '--d': '.15s' }}>
            {TEAM.map(({ key, img }) => (
              <div key={key} className="tcard">
                <div className="tcard-photo">
                  <Image src={img} alt={t(`${key}.n`)} width={400} height={400}
                    style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }} />
                </div>
                <strong>{t(`${key}.n`)}</strong>
                <span>{t(`${key}.r`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
