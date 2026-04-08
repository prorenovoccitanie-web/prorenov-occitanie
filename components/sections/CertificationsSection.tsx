'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Sun, Zap, Wind, Users, Clock, CheckCircle, Banknote } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    name: 'RGE QUALIBAT',
    desc: 'Qualification pour les travaux de rénovation énergétique globale',
    color: '#F59E0B',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    icon: Sun,
    name: 'RGE QUALIPV',
    desc: 'Certification pour l\'installation de panneaux photovoltaïques',
    color: '#F97316',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    icon: Zap,
    name: 'RGE QUALISOL',
    desc: 'Qualification pour les installations solaires thermiques',
    color: '#10B981',
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  {
    icon: Wind,
    name: 'RGE QUALIAIR',
    desc: 'Certification pour les pompes à chaleur et la ventilation',
    color: '#3B82F6',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
]

const engagements = [
  { icon: Clock, text: '10 ans d\'expérience terrain en Occitanie' },
  { icon: Users, text: '100% techniciens salariés et diplômés' },
  { icon: CheckCircle, text: 'Zéro sous-traitance — nos équipes, toujours' },
  { icon: Banknote, text: 'Green Confort avance les fonds MPR/CEE' },
]

export default function CertificationsSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-amber-100 text-amber-700 mb-4">
            Notre installateur Green Confort
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            4 certifications RGE.{' '}
            <span className="gradient-orange-text">Zéro compromis.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Les certifications RGE garantissent la qualité des travaux ET votre
            accès aux aides financières. Sans elles, pas d&apos;aides.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`${cert.bg} ${cert.border} border rounded-2xl p-5 text-center hover:shadow-lg transition-shadow`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-sm"
                style={{ background: `${cert.color}20`, border: `2px solid ${cert.color}40` }}
              >
                <cert.icon className="w-7 h-7" style={{ color: cert.color }} />
              </div>
              <div className="font-extrabold text-base text-slate-900 mb-2">{cert.name}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Engagements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-extrabold text-slate-900 text-center mb-6">
            Les engagements Green Confort
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((eng, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <eng.icon className="w-5 h-5 text-navy" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{eng.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
