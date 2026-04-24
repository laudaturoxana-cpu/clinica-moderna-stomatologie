'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

export default function Booking() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [minDate, setMinDate] = useState('')

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0])
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const required = form.querySelectorAll('[required]')
    let valid = true
    required.forEach(field => {
      if (!field.value.trim() || (field.type === 'checkbox' && !field.checked)) {
        field.classList.add('field-error')
        valid = false
        setTimeout(() => field.classList.remove('field-error'), 2000)
      }
    })
    if (!valid) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <section id="programare" className="section bg-navy" data-screen-label="10 Programare">
      <div className="container container-sm">
        <div className="section-head reveal-up">
          <span className="tag tag-light">{t('bk.tag')}</span>
          <h2 className="light" dangerouslySetInnerHTML={{ __html: t('bk.title').replace('\n', '<br>') }} />
          <p className="light-muted">{t('bk.sub')}</p>
        </div>

        {!submitted ? (
          <form className="booking-form reveal-up" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label>{t('bk.name')}</label>
                <input type="text" placeholder="Ion Popescu" required />
              </div>
              <div className="form-group">
                <label>{t('bk.phone')}</label>
                <input type="tel" placeholder="+40 7XX XXX XXX" required />
              </div>
            </div>
            <div className="form-group">
              <label>{t('bk.email')}</label>
              <input type="email" placeholder="ion.popescu@email.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{t('bk.service')}</label>
                <select required>
                  <option value="">{t('bk.sel')}</option>
                  {['o1','o2','o3','o4','o5','o6','o7','o8'].map(o => (
                    <option key={o}>{t(`bk.${o}`)}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>{t('bk.date')}</label>
                <input type="date" min={minDate} />
              </div>
            </div>
            <div className="form-group">
              <label>{t('bk.msg')}</label>
              <textarea rows="3" placeholder="Descrie pe scurt situația..."></textarea>
            </div>
            <div className="form-check">
              <input type="checkbox" id="gdprCheck" required />
              <label htmlFor="gdprCheck">
                {t('bk.gdpr')} <a href="#">politicii de confidențialitate</a>.
              </label>
            </div>
            <button type="submit" className="btn btn-gold btn-lg w100" disabled={loading}>
              {loading ? '...' : t('bk.submit')}
            </button>
            <p className="form-note">{t('bk.note')}</p>
          </form>
        ) : (
          <div className="booking-success show reveal-up">
            <div className="success-ico">✓</div>
            <h3>{t('bk.ok1')}</h3>
            <p>{t('bk.ok2')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
