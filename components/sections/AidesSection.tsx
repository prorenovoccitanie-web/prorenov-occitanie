'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sun, Leaf, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AidesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-solar-orange mb-4">
            Aides financières 2025
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Les aides disponibles{' '}
            <span className="gradient-orange-text">pour vous</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Green Confort monte l&apos;intégralité de vos dossiers d&apos;aides
            et avance les fonds. Vous ne débourssez que votre reste à charge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* PV — Toulouse Métropole */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-6" style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/70 uppercase tracking-wide">
                    Photovoltaïque uniquement
                  </div>
                  <div className="font-extrabold text-white text-lg">Aide Toulouse Métropole</div>
                </div>
              </div>
              <div className="text-5xl font-black text-white mt-4 mb-1">25%</div>
              <div className="text-white/80 text-sm">du montant HT de l&apos;installation</div>
            </div>
            <div className="bg-white p-6">
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-solar-orange" />
                  Réservée aux 37 communes de Toulouse Métropole
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-solar-orange" />
                  Applicable uniquement sur les installations photovoltaïques
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-solar-orange" />
                  Cumulable avec votre financement mensuel
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-solar-orange" />
                  Dossier monté intégralement par Green Confort
                </div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800 font-medium mb-4">
                ⚠️ Cette aide n&apos;est PAS disponible pour la PAC, la VMC ou l&apos;isolation.
              </div>
              <Link href="/aides-financement#toulouse-metropole" className="btn-primary w-full justify-center text-sm py-3">
                Vérifier mon éligibilité <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* MPR + CEE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-6 gradient-navy-bg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/70 uppercase tracking-wide">
                    PAC | VMC | Isolation | Ballon
                  </div>
                  <div className="font-extrabold text-white text-lg">MaPrimeRénov&apos; + CEE</div>
                </div>
              </div>
              <div className="text-5xl font-black text-white mt-4 mb-1">Jusqu&apos;à 70%</div>
              <div className="text-white/80 text-sm">selon vos revenus et votre projet</div>
            </div>
            <div className="bg-white p-6">
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                  MaPrimeRénov&apos; : aide d&apos;État selon revenus (tranches ANAH)
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                  CEE : certificats d&apos;économies d&apos;énergie des fournisseurs
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                  Cumulables sur un même chantier
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-navy" />
                  Green Confort avance les fonds — vous ne payez que le reste
                </div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800 font-medium mb-4">
                ⚠️ Ces aides ne s&apos;appliquent PAS au photovoltaïque.
              </div>
              <Link href="/aides-financement" className="btn-outline-navy w-full justify-center text-sm py-3">
                Calculer mes aides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
