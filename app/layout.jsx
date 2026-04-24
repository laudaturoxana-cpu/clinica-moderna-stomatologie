import { LangProvider } from '@/context/LangContext'
import './globals.css'

export const metadata = {
  title: 'Clinica Dentara Demo — Zâmbetul tău, prioritatea noastră',
  description: 'Clinică stomatologică modernă în România. Consultație gratuită, tehnologie premium, echipă dedicată.',
  keywords: 'clinica dentara, stomatologie, implant dentar, albire dentara, ortodontie, Bucuresti',
  openGraph: {
    title: 'Clinica Dentara Demo',
    description: 'Stomatologie modernă în România. Consultație gratuită.',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
