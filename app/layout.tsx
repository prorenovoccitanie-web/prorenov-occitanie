import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://prorenov-occitanie.fr'),
  title: {
    default: 'Pro Rénov Occitanie | Panneaux Solaires & Rénovation Énergétique Toulouse',
    template: '%s | Pro Rénov Occitanie',
  },
  description:
    'Spécialiste photovoltaïque avec batterie virtuelle Urban Solar, PAC air/air, PAC air/eau et gainable à Toulouse. Certifié RGE, aides avancées, 0 sous-traitance. Étude gratuite en 24h.',
  keywords: [
    'panneaux solaires toulouse',
    'batterie virtuelle urban solar',
    'pac air air toulouse',
    'pac air eau toulouse',
    'rénovation énergétique occitanie',
    'gainable daikin toulouse',
    'aide toulouse métropole photovoltaïque',
    'maprimerenov toulouse',
    'installateur rge toulouse',
    'green confort',
  ],
  authors: [{ name: 'Pro Rénov Occitanie' }],
  creator: 'Pro Rénov Occitanie',
  publisher: 'Pro Rénov Occitanie',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://prorenov-occitanie.fr',
    siteName: 'Pro Rénov Occitanie',
    title: 'Pro Rénov Occitanie | Panneaux Solaires & Rénovation Énergétique Toulouse',
    description:
      'Spécialiste photovoltaïque avec batterie virtuelle Urban Solar, PAC air/air, PAC air/eau et gainable à Toulouse. Certifié RGE, aides avancées, 0 sous-traitance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pro Rénov Occitanie - Rénovation Énergétique Toulouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Rénov Occitanie | Panneaux Solaires & Rénovation Énergétique Toulouse',
    description:
      'Spécialiste photovoltaïque avec batterie virtuelle Urban Solar, PAC air/air, PAC air/eau et gainable à Toulouse.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Pro Rénov Occitanie',
  description:
    'Régie commerciale spécialisée en rénovation énergétique. Panneaux photovoltaïques, PAC air/air, PAC air/eau, gainable à Toulouse et en Occitanie.',
  url: 'https://prorenov-occitanie.fr',
  email: 'gauthier@prorenov-occitanie.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toulouse',
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Toulouse',
    },
    {
      '@type': 'State',
      name: 'Occitanie',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Solutions de Rénovation Énergétique',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Panneaux Photovoltaïques + Batterie Virtuelle Urban Solar',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pompe à Chaleur Air/Air',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pompe à Chaleur Air/Eau',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Climatisation Gainable',
        },
      },
    ],
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Cookie consent banner — charge GA4 et Meta Pixel uniquement après acceptation */}
        <CookieBanner />
      </body>
    </html>
  )
}
