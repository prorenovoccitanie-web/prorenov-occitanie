'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function FormationTeaserSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16" style={{ background: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white">Formation finançable 100% CPF | Certification KALIOPI</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Tu veux changer de vie ?<br />
            <span className="text-white/90 text-2xl md:text-3xl font-bold">
              On te forme, on t&apos;embauche, on te fournit les prospects.
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            Notre formation CPF ouvre dans quelques semaines. 0 € de ta poche.
            Embauche garantie pour les meilleurs. Outils IA fournis.
          </p>

          <p className="text-2xl font-extrabold text-white mb-8">
            Les premiers formés gagnent déjà 3 000 €/mois.
          </p>

          <Link
            href="/formation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-solar-orange bg-white hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
          >
            Je veux ma place sur liste d&apos;attente
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
