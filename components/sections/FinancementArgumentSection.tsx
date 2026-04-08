'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FinancementArgumentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 gradient-navy-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-solar-gold/20 text-solar-gold mb-6">
            L&apos;argument financier qui change tout
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Vous payez déjà{' '}
            <span className="text-solar-orange">200 €/mois</span>{' '}
            d&apos;électricité ?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Avant */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-red-900/30 border border-red-500/30 rounded-2xl p-6 text-left"
            >
              <div className="text-4xl font-black text-red-400 mb-2">200 €</div>
              <div className="text-sm font-bold text-red-300 mb-3">Par mois à EDF</div>
              <p className="text-white/70 text-sm">
                Vous donnez cet argent à EDF. Pour toujours.
                Dans 30 ans, vous aurez versé plus de{' '}
                <span className="text-red-400 font-bold">72 000 €</span> à une entreprise
                qui ne vous appartient pas.
              </p>
            </motion.div>

            {/* Flèche */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-white/40 text-sm font-bold mb-3 uppercase tracking-wider">
                Même effort financier
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="text-white/40 text-sm font-bold mt-3 uppercase tracking-wider">
                Résultat différent
              </div>
            </motion.div>

            {/* Après */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-900/30 border border-green-500/30 rounded-2xl p-6 text-left"
            >
              <div className="text-4xl font-black text-green-400 mb-2">200 €</div>
              <div className="text-sm font-bold text-green-300 mb-3">Par mois de crédit</div>
              <p className="text-white/70 text-sm">
                Vous investissez le même montant. Mais au bout de 5-7 ans,
                l&apos;installation vous appartient.{' '}
                <span className="text-green-400 font-bold">Votre énergie est gratuite</span>{' '}
                pour les 25 années suivantes.
              </p>
            </motion.div>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-white/90 italic max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            &ldquo;C&apos;est le même effort financier. Mais le résultat est{' '}
            <span className="text-solar-gold not-italic">complètement différent.</span>&rdquo;
          </motion.blockquote>

          <Link href="/#formulaire" className="btn-primary text-lg px-8 py-4">
            Calculer mes économies gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
