'use client'
import { useLang } from '@/context/LangContext'

export default function Contact() {
  const { t } = useLang()
  return (
    <section id="contact" className="section bg-white" data-screen-label="11 Contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-up">
            <span className="tag">{t('ct.tag')}</span>
            <h2>{t('ct.title')}</h2>
            <div className="cinfo-list">
              <div className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 2a8 8 0 00-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 00-8-8z"/><circle cx="11" cy="10" r="2.5"/></svg>
                </div>
                <div>
                  <strong>{t('ct.addr')}</strong>
                  <span>Strada Exemplu nr. 12, Sector 1<br/>București, România</span>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 15.5v3a2 2 0 01-2.18 2 19.6 19.6 0 01-8.5-3A19.2 19.2 0 011.5 9.7 2 2 0 013.5 7.5h3a2 2 0 012 1.7c.12.9.33 1.77.63 2.6a2 2 0 01-.46 2.1l-.8.8a15.8 15.8 0 006 6l.8-.8a2 2 0 012.1-.45c.84.3 1.7.51 2.6.63A2 2 0 0120 15.5z"/></svg>
                </div>
                <div>
                  <strong>{t('ct.phone')}</strong>
                  <a href="tel:+40721000000">+40 721 000 000</a>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="18" height="14" rx="2"/><path d="M2 7l9 6 9-6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@clinicadentara.ro">contact@clinicadentara.ro</a>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="cinfo-icon">
                  <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="9"/><path d="M11 7v4l2.5 2.5"/></svg>
                </div>
                <div>
                  <strong>{t('ct.hours')}</strong>
                  <span>{t('ct.h1')}</span>
                  <span>{t('ct.h2')}</span>
                  <span>{t('ct.h3')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map reveal-right" style={{ '--d': '.15s' }}>
            <div className="map-ph">
              <div className="map-inner">
                <svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="35" r="10" stroke="rgba(184,149,90,0.6)" strokeWidth="2"/><path d="M40 25v-10M40 45v10M25 35H15M55 35h10" stroke="rgba(184,149,90,0.3)" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span>{t('ct.map')}</span>
                <small>{t('ct.mapnote')}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
