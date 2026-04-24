'use client'
import { useLang } from '@/context/LangContext'

const TRUST_ITEMS = [
  { key: 'tr.1', icon: <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M11 2l-8 3.5v5.5c0 5 4 9.5 8 11 4-1.5 8-6 8-11V5.5z"/></svg> },
  { key: 'tr.2', icon: <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="9"/><path d="M11 7v4l2.5 2.5"/></svg> },
  { key: 'tr.3', icon: <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="6" width="18" height="13" rx="2"/><path d="M15 20V4a2 2 0 00-2-2H9a2 2 0 00-2 2v16"/></svg> },
  { key: 'tr.4', icon: <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M20 15.5v3a2 2 0 01-2.18 2 19.6 19.6 0 01-8.5-3A19.2 19.2 0 011.5 9.7 2 2 0 013.5 7.5h3a2 2 0 012 1.7c.12.9.33 1.77.63 2.6a2 2 0 01-.46 2.1l-.8.8a15.8 15.8 0 006 6l.8-.8a2 2 0 012.1-.45c.84.3 1.7.51 2.6.63A2 2 0 0120 15.5z"/></svg> },
  { key: 'tr.5', icon: <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 11l2 2 4-4"/><path d="M7.8 4.3a3 3 0 011.7-.7 3 3 0 013.8 0 3 3 0 001.7.7 3 3 0 012.7 2.7 3 3 0 00.7 1.7 3 3 0 010 3.8 3 3 0 00-.7 1.7 3 3 0 01-2.7 2.7 3 3 0 00-1.7.7 3 3 0 01-3.8 0 3 3 0 00-1.7-.7A3 3 0 015.1 14a3 3 0 00-.7-1.7 3 3 0 010-3.8A3 3 0 005.1 6.8 3 3 0 017.8 4.3z"/></svg> },
]

export default function TrustBar() {
  const { t } = useLang()
  return (
    <div className="trust-bar" data-screen-label="02 Trust Bar">
      <div className="container">
        <div className="trust-items">
          {TRUST_ITEMS.map(({ key, icon }, i) => (
            <>
              {i > 0 && <div key={`sep-${i}`} className="trust-sep"></div>}
              <div key={key} className="trust-item">
                {icon}
                <span>{t(key)}</span>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
