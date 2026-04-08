'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Trophy } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
          alt="Panneaux solaires sur une maison en Occitanie"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      {/* Animated Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-solar-gold/40"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-solar-gold/30 bg-solar-gold/10 backdrop-blur-sm"
          >
            <Trophy className="w-4 h-4 text-solar-gold" />
            <span className="text-sm font-bold text-solar-gold">
              Partenaire officiel Urban Solar — Batterie Virtuelle France
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6"
          >
            Devenez propriétaire{' '}
            <span className="relative">
              <span style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                de votre énergie
              </span>
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-white/90 font-bold">
              Payez 0 € d&apos;électricité dans 30 ans
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
          >
            Pro Rénov Occitanie installe les meilleures solutions énergétiques avec
            Green Confort — RGE certifié, 0 sous-traitance, aides avancées par nos soins.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              href="/#formulaire"
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              Obtenir mon étude gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/devenir-apporteur"
              className="btn-outline-white text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              Devenir apporteur d&apos;affaires
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex flex-wrap items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 max-w-full"
          >
            <MapPin className="w-4 h-4 text-solar-orange flex-shrink-0" />
            <span className="text-sm font-semibold text-white">
              37 communes éligibles Toulouse Métropole
            </span>
            <span className="text-white/50 hidden sm:inline">|</span>
            <span className="text-sm font-bold text-solar-gold">
              25% d&apos;aide sur installation PV
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  )
}
