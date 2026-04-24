# Clinica Dentara Demo — Next.js

Site de prezentare modern pentru clinici stomatologice. Construit cu **Next.js 14**, fără librării externe.

## Structură

```
├── app/
│   ├── layout.jsx        # Root layout + metadata SEO
│   ├── page.jsx          # Pagina principală
│   └── globals.css       # Toate stilurile
├── components/
│   ├── Navbar.jsx        # Navigare sticky + hamburger + RO/EN
│   ├── Hero.jsx          # Hero fullscreen + counter animat
│   ├── TrustBar.jsx      # Bara de credențiale
│   ├── Services.jsx      # Grid 8 servicii
│   ├── About.jsx         # Despre + echipă
│   ├── Technology.jsx    # Echipamente
│   ├── BeforeAfter.jsx   # Slider înainte/după
│   ├── Pricing.jsx       # 3 pachete
│   ├── Testimonials.jsx  # Carusel testimoniale
│   ├── FAQ.jsx           # Accordion FAQ
│   ├── Booking.jsx       # Formular programare
│   ├── Contact.jsx       # Contact + hartă
│   ├── Footer.jsx        # Footer complet
│   ├── WhatsAppFloat.jsx # Buton WhatsApp
│   └── CookieBanner.jsx  # Banner GDPR
├── context/
│   └── LangContext.jsx   # Context RO/EN
├── lib/
│   └── i18n.js           # Toate traducerile
├── next.config.mjs
└── package.json
```

## Instalare și rulare

```bash
# Instalează dependențele
npm install

# Rulează în development
npm run dev

# Build pentru producție
npm run build
npm start
```

## Deploy pe Vercel

1. Push pe GitHub
2. Conectează repo-ul în [vercel.com](https://vercel.com)
3. Vercel detectează automat Next.js — click **Deploy**

## Personalizare rapidă

| Ce vrei să schimbi | Unde |
|---|---|
| Numele clinicii | `app/layout.jsx` + `components/Navbar.jsx` |
| Culori principale | `app/globals.css` → variabilele `:root` |
| Texte (RO) | `lib/i18n.js` → obiectul `ro` |
| Texte (EN) | `lib/i18n.js` → obiectul `en` |
| Fotografii echipă | `components/About.jsx` → array `TEAM` |
| Fotografii tehnologie | `components/Technology.jsx` → array `TECH` |
| Prețuri | `components/Pricing.jsx` → array `PLANS` |
| Număr telefon | Caută `40721000000` în toate fișierele |
| Adresă | `components/Contact.jsx` |
| Google Maps | `components/Contact.jsx` → înlocuiește `.map-ph` cu `<iframe>` |

## Imagini

Imaginile sunt servite de **Unsplash** (gratuit, fără licență necesară pentru demo).  
Pentru producție, înlocuiește cu fotografii reale ale clinicii.

Domeniul Unsplash este configurat în `next.config.mjs` pentru optimizarea `next/image`.
