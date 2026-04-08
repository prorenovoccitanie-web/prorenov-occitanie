import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import SpecialtiesSection from '@/components/sections/SpecialtiesSection'
import BatterieVirtuelleSection from '@/components/sections/BatterieVirtuelleSection'
import FinancementArgumentSection from '@/components/sections/FinancementArgumentSection'
import AidesSection from '@/components/sections/AidesSection'
import BrandsSection from '@/components/sections/BrandsSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FormationTeaserSection from '@/components/sections/FormationTeaserSection'
import FormClient from '@/components/forms/FormClient'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pro Rénov Occitanie | Panneaux Solaires & Rénovation Énergétique Toulouse',
  description:
    'Devenez propriétaire de votre énergie. Spécialiste photovoltaïque avec batterie virtuelle Urban Solar, PAC air/air, PAC air/eau et gainable à Toulouse. Certifié RGE, aides avancées, 0 sous-traitance. Étude gratuite 24h.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SpecialtiesSection />
      <BatterieVirtuelleSection />
      <FinancementArgumentSection />
      <AidesSection />
      <BrandsSection />
      <CertificationsSection />
      <TestimonialsSection />
      <FormationTeaserSection />

      {/* Formulaire Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-solar-orange mb-4">
                Étude 100% gratuite et sans engagement
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Votre étude personnalisée{' '}
                <span className="gradient-orange-text">en 24h</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Obtenez votre estimation d&apos;économies, le montant exact de vos aides
                et un plan de financement sur-mesure. Sans engagement. Sans frais.
              </p>

              <div className="space-y-4">
                {[
                  'Calcul précis de vos aides (MPR, CEE, Toulouse Métropole)',
                  'Estimation d\'économies sur 30 ans',
                  'Plan de financement adapté à votre budget',
                  'Visite technique offerte pour valider le projet',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <FormClient source="home" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Prêt à prendre le contrôle de votre énergie ?
          </h2>
          <p className="text-white/70 text-xl mb-8">
            Rejoignez les centaines de familles en Occitanie qui ont dit adieu aux factures EDF.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#formulaire" className="btn-primary text-lg px-8 py-4">
              Je veux mon installation solaire
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/devenir-apporteur" className="btn-outline-white text-lg px-8 py-4">
              Je veux devenir apporteur d&apos;affaires
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
