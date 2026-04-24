'use client'
import { useState } from 'react'
import { useLang } from '@/context/LangContext'

const QUESTIONS = ['fq1','fq2','fq3','fq4','fq5','fq6','fq7','fq8']

export default function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState(null)

  function toggle(key) {
    setOpen(prev => prev === key ? null : key)
  }

  return (
    <section id="faq" className="section bg-cream" data-screen-label="09 FAQ">
      <div className="container container-sm">
        <div className="section-head reveal-up">
          <span className="tag">{t('fq.tag')}</span>
          <h2>{t('fq.title')}</h2>
        </div>
        <div className="faq-list">
          {QUESTIONS.map(key => {
            const isOpen = open === key
            return (
              <div key={key} className={`faq-item reveal-up${isOpen ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => toggle(key)}>
                  <span>{t(`${key}.q`)}</span>
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .3s' }}>
                    <path d="M5 8l5 5 5-5"/>
                  </svg>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height .4s ease' }}>
                  <p>{t(`${key}.a`)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
