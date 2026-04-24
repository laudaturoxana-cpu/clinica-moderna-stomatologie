'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/i18n'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ro')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'ro' || saved === 'en') setLang(saved)
  }, [])

  function toggleLang() {
    const next = lang === 'ro' ? 'en' : 'ro'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  function t(key) {
    return translations[lang]?.[key] ?? translations['ro'][key] ?? key
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
