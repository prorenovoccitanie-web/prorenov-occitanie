import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Pro Rénov Occitanie Toulouse',
  description:
    'Contactez Pro Rénov Occitanie à Toulouse. Gauthier Jory vous répond sous 24h pour toute question sur vos travaux de rénovation énergétique.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/80">
            Gauthier vous répond personnellement sous 24h.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl gradient-navy-bg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Email</div>
                    <a href="mailto:gauthier@prorenov-occitanie.fr" className="text-solar-orange hover:underline">
                      gauthier@prorenov-occitanie.fr
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl gradient-navy-bg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Zone d&apos;intervention</div>
                    <p className="text-slate-600">
                      Toulouse et toute l&apos;Occitanie<br />
                      Zone prioritaire : Toulouse Métropole (37 communes)
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-slate-50">
                  <div className="w-12 h-12 rounded-xl gradient-navy-bg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-solar-gold" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">Délai de réponse</div>
                    <p className="text-slate-600">
                      Réponse garantie sous 24h<br />
                      Du lundi au samedi, 8h-19h
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-slate-200 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Toulouse, Occitanie</p>
                  <p className="text-sm">Carte disponible après configuration Google Maps</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
