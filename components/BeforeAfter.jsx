'use client'
import { useRef, useCallback } from 'react'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'

const CASES = [
  {
    key: 'c1',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=700&q=80',
    cap: 'ba.c1',
  },
  {
    key: 'c2',
    img: 'https://images.unsplash.com/photo-1607990281513-1a9efbf81c38?auto=format&fit=crop&w=700&q=80',
    cap: 'ba.c2',
  },
  {
    key: 'c3',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffbb4cdc9ba?auto=format&fit=crop&w=700&q=80',
    cap: 'ba.c3',
  },
]

function Slider({ imgSrc, beforeLabel, afterLabel }) {
  const sliderRef = useRef(null)
  const beforeRef = useRef(null)
  const dividerRef = useRef(null)
  const dragging = useRef(false)

  const setPos = useCallback((pct) => {
    pct = Math.max(5, Math.min(95, pct))
    if (beforeRef.current) beforeRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`
    if (dividerRef.current) dividerRef.current.style.left = pct + '%'
  }, [])

  const getPercent = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect()
    if (!rect) return 50
    return ((clientX - rect.left) / rect.width) * 100
  }, [])

  return (
    <div
      className="ba-slider"
      ref={sliderRef}
      onMouseMove={e => { if (!dragging.current) setPos(getPercent(e.clientX)) }}
      onMouseLeave={() => { if (!dragging.current) setPos(50) }}
    >
      {/* After (before treatment — yellowish filter) */}
      <div className="ba-after-layer" style={{ position: 'absolute', inset: 0 }}>
        <Image src={imgSrc} alt="Înainte" fill
          style={{ objectFit: 'cover', filter: 'sepia(0.5) brightness(0.78) contrast(1.1) saturate(0.65)' }} />
      </div>
      {/* Before (after treatment — bright) */}
      <div ref={beforeRef} className="ba-before-layer" style={{ position: 'absolute', inset: 0, clipPath: 'inset(0 50% 0 0)' }}>
        <Image src={imgSrc} alt="După" fill
          style={{ objectFit: 'cover', filter: 'brightness(1.08) contrast(1.03) saturate(0.88)' }} />
      </div>
      <div ref={dividerRef} className="ba-divider" style={{ left: '50%' }}
        onMouseDown={e => { dragging.current = true; e.preventDefault() }}
        onTouchStart={() => { dragging.current = true }}
        onMouseUp={() => { dragging.current = false }}
        onTouchEnd={() => { dragging.current = false }}
        onMouseMove={e => { if (dragging.current) setPos(getPercent(e.clientX)) }}
        onTouchMove={e => { if (dragging.current) setPos(getPercent(e.touches[0].clientX)) }}
      >
        <div className="ba-handle-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18L3 12l6-6M15 6l6 6-6 6"/></svg>
        </div>
      </div>
      <span className="ba-lbl ba-lbl-l">{beforeLabel}</span>
      <span className="ba-lbl ba-lbl-r">{afterLabel}</span>
    </div>
  )
}

export default function BeforeAfter() {
  const { t } = useLang()
  return (
    <section id="galerie" className="section bg-cream" data-screen-label="06 Galerie">
      <div className="container">
        <div className="section-head reveal-up">
          <span className="tag">{t('ba.tag')}</span>
          <h2 dangerouslySetInnerHTML={{ __html: t('ba.title').replace('\n', '<br>') }} />
          <p>{t('ba.sub')}</p>
        </div>
        <div className="ba-cases">
          {CASES.map(({ key, img, cap }, i) => (
            <div key={key} className="ba-case reveal-up" style={{ '--d': `${i * 0.1}s` }}>
              <Slider imgSrc={img} beforeLabel={t('ba.before')} afterLabel={t('ba.after')} />
              <p className="ba-cap">{t(cap)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
