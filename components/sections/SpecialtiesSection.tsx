'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sun, Wind, Thermometer, Cpu, ArrowRight } from 'lucide-react'

const specialties = [
  {
    icon: Sun,
    title: 'Photovoltaïque + Batterie Virtuelle',
    subtitle: 'Urban Solar',
    description:
      'Le système solaire le plus avancé du marché. Panneaux Dual Sun et Trina Solar + batterie virtuelle Urban Solar pour 95% d\'autonomie sur 30 ans.',
    aide: '25% aide Toulouse Métropole',
    aideColor: 'text-amber-600 bg-amber-50',
    href: '/photovoltaique',
    gradient: 'from-orange-50 to-amber-50',
    iconBg: 'from-solar-orange to-solar-gold',
    tag: '⭐ Produit star',
  },
  {
    icon: Thermometer,
    title: 'PAC Air/Air',
    subtitle: 'Daikin & Atlantic',
    description:
      'Climatisez en été ET chauffez en hiver pour 3x moins cher. Fonctionne jusqu\'à -25°C. Expert Daikin et Atlantic pour la performance et la durabilité.',
    aide: 'MaPrimeRénov\' + CEE',
    aideColor: 'text-blue-600 bg-blue-50',
    href: '/renovation-energetique#pac-air-air',
    gradient: 'from-blue-50 to-cyan-50',
    iconBg: 'from-blue-500 to-cyan-500',
    tag: 'Chauffage + clim',
  },
  {
    icon: Cpu,
    title: 'PAC Air/Eau',
    subtitle: 'Daikin & Atlantic',
    description:
      'Remplacez définitivement votre chaudière gaz ou fioul. Chauffage central + eau chaude sanitaire pour jusqu\'à 60% d\'économies. COP jusqu\'à 5.',
    aide: 'MaPrimeRénov\' + CEE',
    aideColor: 'text-blue-600 bg-blue-50',
    href: '/renovation-energetique#pac-air-eau',
    gradient: 'from-indigo-50 to-blue-50',
    iconBg: 'from-indigo-500 to-blue-500',
    tag: 'Remplace la chaudière',
  },
  {
    icon: Wind,
    title: 'Gainable',
    subtitle: 'Daikin & Atlantic',
    description:
      'Une seule unité extérieure, du confort dans toutes vos pièces. La solution premium pour les maisons sans travaux d\'isolation préalable.',
    aide: 'MaPrimeRénov\' + CEE',
    aideColor: 'text-blue-600 bg-blue-50',
    href: '/renovation-energetique#gainable',
    gradient: 'from-purple-50 to-indigo-50',
    iconBg: 'from-purple-500 to-indigo-500',
    tag: 'Confort total',
  },
]

export default function SpecialtiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-solar-orange mb-4">
            Nos 4 expertises phares
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Des solutions pour{' '}
            <span className="gradient-orange-text">chaque maison</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Du photovoltaïque à la pompe à chaleur, nous couvrons l&apos;intégralité
            de vos besoins en rénovation énergétique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={spec.href} className="group block">
                <div className={`rounded-2xl p-6 bg-gradient-to-br ${spec.gradient} border border-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${spec.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <spec.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                          {spec.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                        {spec.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-500 mb-3">{spec.subtitle}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {spec.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${spec.aideColor}`}>
                          {spec.aide}
                        </span>
                        <span className="text-solar-orange text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          En savoir plus <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
