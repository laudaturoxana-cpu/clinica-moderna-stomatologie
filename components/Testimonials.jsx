'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useLang } from '@/context/LangContext'

const REVIEWS = ['tm1','tm2','tm3','tm4','tm5','tm6']
const AVATARS = ['MI','CP','AL','RV','EM','GS']
const COLORS  = ['#B8955A','#3BA8A0','#B8955A','#3BA8A0','#B8955A','#3BA8A0']

export default function Testimonials() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const timerRef = useRef(null)

  function getVisible() {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 900) return 2
    return 3
  }

  const maxIdx = () => Math.max(0, REVIEWS.length - getVisible())

  const goTo = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIdx()))
    setCurrent(clamped)
    const visible = getVisible()
    const track = trackRef.current
    if (!track) return
    const gap = 24
    const cardW = track.parentElement.offsetWidth / visible
    track.style.transform = `translateX(-${clamped * (cardW + gap / visible)}px)`
    track.querySelectorAll('.tcard-t').forEach(card => {
      card.style.width = `calc(${100 / visible}% - ${gap * (visible - 1) / visible}px)`
    })
  }, [])

  function startAuto() {
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = c >= maxIdx() ? 0 : c + 1
        goTo(next)
        return next
      })
    }, 5000)
  }

  useEffect(() => {
    goTo(0)
    startAuto()
    const onResize = () => goTo(current)
    window.addEventListener('resize', onResize)
    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  function nav(dir) {
    clearInterval(timerRef.current)
    const next = current + dir
    goTo(Math.max(0, Math.min(next, maxIdx())))
    setCurrent(Math.max(0, Math.min(next, maxIdx())))
    startAuto()
  }

  const dotCount = REVIEWS.length - getVisible() + 1

  return (
    <section id="testimoniale" className="section bg-navy" data-screen-label="08 Testimoniale">
      <div className="container">
        <div className="section-head reveal-up">
          <span className="tag tag-light">{t('tm.tag')}</span>
          <h2 className="light">{t('tm.title')}</h2>
        </div>
        <div className="testi-wrap">
          <div className="testi-track" ref={trackRef}>
            {REVIEWS.map((key, i) => (
              <div key={key} className="tcard-t">
                <div className="stars">★★★★★</div>
                <p>{t(`${key}.q`)}</p>
                <div className="tcard-auth">
                  <div className="tavatar" style={{ '--ac': COLORS[i] }}>{AVATARS[i]}</div>
                  <div>
                    <strong>{t(`${key}.n`)}</strong>
                    <span>{i < 3 ? 'București' : i === 3 ? 'Ploiești' : i === 4 ? 'București' : 'Giurgiu'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-nav">
          <button className="tnav-btn" onClick={() => nav(-1)} aria-label="Anterior">←</button>
          <div className="testi-dots">
            {Array.from({ length: Math.max(1, dotCount) }).map((_, i) => (
              <button key={i} className={`tdot${current === i ? ' active' : ''}`}
                onClick={() => { clearInterval(timerRef.current); goTo(i); setCurrent(i); startAuto() }}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <button className="tnav-btn" onClick={() => nav(1)} aria-label="Următor">→</button>
        </div>
      </div>
    </section>
  )
}
