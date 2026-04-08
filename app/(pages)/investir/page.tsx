import type { Metadata } from 'next'
import { TrendingUp, Shield, Lock } from 'lucide-react'
import InvestisseurForm from '@/components/forms/InvestisseurForm'

export const metadata: Metadata = {
  title: 'Investir avec Pro Rénov Occitanie',
  description: 'Opportunité d\'investissement confidentielle avec Pro Rénov Occitanie. Détails communiqués lors d\'un rendez-vous privé.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function InvestirPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold mb-6">
            <Lock className="w-4 h-4" />
            Accès privé — Informations confidentielles
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Investir avec Pro Rénov Occitanie
          </h1>
          <p className="text-xl text-white/80">
            Un modèle d&apos;investissement à fort retour dans un secteur
            en croissance exponentielle. Détails communiqués en entretien confidentiel.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: TrendingUp, title: 'Secteur en croissance', desc: 'La rénovation énergétique est le marché le plus dynamique de France. 66 milliards € de travaux prévus d\'ici 2030.' },
              { icon: Shield, title: 'Modèle éprouvé', desc: 'Pro Rénov Occitanie génère déjà du chiffre d\'affaires avec un réseau d\'apporteurs actifs et une pipeline qualifiée.' },
              { icon: Lock, title: 'Conditions sur RDV', desc: 'Le modèle d\'investissement détaillé, les conditions et les projections financières sont communiqués lors d\'un entretien confidentiel.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-slate-50">
                <div className="w-14 h-14 rounded-2xl gradient-navy-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-solar-gold" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                Manifester votre intérêt
              </h2>
              <p className="text-slate-600">
                Renseignez vos coordonnées. Gauthier vous contacte dans les 48h
                pour un entretien confidentiel.
              </p>
            </div>
            <InvestisseurForm />
          </div>
        </div>
      </section>
    </>
  )
}
