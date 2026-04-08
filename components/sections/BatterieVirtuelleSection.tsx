'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sun, Home, Cloud, Check, X } from 'lucide-react'

const steps = [
  {
    icon: Sun,
    title: 'Vos panneaux produisent',
    desc: 'Le soleil alimente directement votre maison 24h/24 dès que vos panneaux captent la lumière.',
    color: '#F97316',
  },
  {
    icon: Home,
    title: 'Vous autoconsommez en direct',
    desc: 'Votre électricité est consommée instantanément : appareils électroménagers, chauffage, recharge véhicule.',
    color: '#1E3A5F',
  },
  {
    icon: Cloud,
    title: 'Le surplus est stocké virtuellement',
    desc: 'L\'excédent non consommé est envoyé au réseau Urban Solar. Vous le récupérez quand vous en avez besoin, nuit ou mauvais temps.',
    color: '#10B981',
  },
]

const arguments_ = [
  'Pas de batterie physique à acheter (économie de 5 000 à 15 000 €)',
  'Pas de problème à la revente de la maison',
  'EDF vous rachète à 0,04 €/kWh — vous récupérez 0,13 €/kWh avec Urban Solar',
  '95% d\'autonomie énergétique sur 30 ans',
]

const comparatif = [
  {
    label: 'Facture électricité / mois',
    sans: '180 à 250 €',
    avec: '0 à 15 €',
  },
  {
    label: 'Coût sur 30 ans',
    sans: '72 000 € perdus',
    avec: 'Amorti et rentable',
  },
  {
    label: 'Valeur de votre maison',
    sans: 'Standard',
    avec: '+10 à 15%',
  },
  {
    label: 'Indépendance d\'EDF',
    sans: 'Aucune',
    avec: '95% d\'autonomie',
  },
]

export default function BatterieVirtuelleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-solar-orange mb-4">
            Technologie exclusive
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            La révolution{' '}
            <span className="gradient-orange-text">Urban Solar</span>
            <br />
            La batterie virtuelle change{' '}
            <span className="gradient-orange-text">TOUT</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fini la batterie physique coûteuse et contraignante. Urban Solar — marque
            française — a inventé le stockage virtuel de votre énergie solaire.
          </p>
        </motion.div>

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center p-6 rounded-2xl bg-slate-50 border border-slate-100"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-black shadow-lg"
                style={{ background: `linear-gradient(135deg, #F97316, #F59E0B)` }}>
                {i + 1}
              </div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-4 shadow-md"
                style={{ background: `${step.color}20` }}
              >
                <step.icon className="w-8 h-8" style={{ color: step.color }} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>

              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-slate-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Arguments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-4 mb-16"
        >
          {arguments_.map((arg, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-slate-700 font-medium text-sm">{arg}</p>
            </div>
          ))}
        </motion.div>

        {/* Comparatif Tableau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-6">
            Avant / Après : la différence est brutale
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-slate-100 text-slate-700 font-bold w-1/3"></th>
                  <th className="p-4 text-center bg-red-50 text-red-700 font-bold">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4" />
                      Sans installation
                    </div>
                  </th>
                  <th className="p-4 text-center text-white font-bold" style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-solar-gold" />
                      Avec Pro Rénov + Urban Solar
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 text-sm font-semibold text-slate-700">{row.label}</td>
                    <td className="p-4 text-center text-sm text-red-600 font-medium">{row.sans}</td>
                    <td className="p-4 text-center text-sm text-green-600 font-bold">{row.avec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
