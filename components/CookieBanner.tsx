'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { Cookie, X, CheckCircle, XCircle } from 'lucide-react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

type ConsentState = 'accepted' | 'refused' | null

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent') as ConsentState
    if (stored === 'accepted' || stored === 'refused') {
      setConsent(stored)
    } else {
      // Show banner after 1.5s so it doesn't block initial render
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  const refuse = () => {
    localStorage.setItem('cookie_consent', 'refused')
    setConsent('refused')
    setVisible(false)
  }

  return (
    <>
      {/* ── Analytics scripts — chargés uniquement après consentement ── */}
      {consent === 'accepted' && GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname, anonymize_ip: true });
              `,
            }}
          />
        </>
      )}

      {consent === 'accepted' && PIXEL_ID && (
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}

      {/* ── Bandeau cookie ── */}
      {visible && (
        <div
          role="dialog"
          aria-label="Gestion des cookies"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in"
          style={{ animationDuration: '0.4s' }}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-start gap-4 p-5 md:p-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Cookie className="w-5 h-5 text-solar-orange" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-sm mb-1">
                  Ce site utilise des cookies
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Nous utilisons des cookies analytiques (Google Analytics) et marketing (Meta Pixel)
                  pour améliorer votre expérience et mesurer nos performances.
                  Consulter notre{' '}
                  <Link
                    href="/politique-confidentialite"
                    className="text-solar-orange underline hover:no-underline"
                    onClick={() => setVisible(false)}
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>

              {/* Close (= refuse) */}
              <button
                onClick={refuse}
                aria-label="Fermer sans accepter"
                className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 px-5 pb-5 md:px-6 md:pb-6 pt-0">
              <button
                onClick={refuse}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:border-slate-400 transition-all"
              >
                <XCircle className="w-4 h-4" />
                Refuser
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none btn-primary py-2.5 text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Accepter les cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
