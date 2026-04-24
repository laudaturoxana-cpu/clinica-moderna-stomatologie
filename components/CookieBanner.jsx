'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LangContext'

export default function CookieBanner() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) setVisible(true)
  }, [])

  function dismiss(accepted) {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <p dangerouslySetInnerHTML={{ __html: t('cookie.text') }} />
      <div className="cookie-actions">
        <button className="btn btn-sm btn-ghost-light" onClick={() => dismiss(false)}>{t('cookie.decline')}</button>
        <button className="btn btn-sm btn-gold" onClick={() => dismiss(true)}>{t('cookie.accept')}</button>
      </div>
    </div>
  )
}
