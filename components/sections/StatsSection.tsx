'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Home, Euro, Zap, Award } from 'lucide-react'

const stats = [
  {
    icon: Home,
    value: 200,
    suffix: '+',
    label: 'Clients satisfaits en Occitanie',
    color: '#F97316',
  },
  {
    icon: Euro,
    value: 2400,
    suffix: ' €',
    label: 'Économies annuelles moyennes',
    color: '#F59E0B',
  },
  {
    icon: Zap,
    value: 95,
    suffix: '%',
    label: 'Autonomie énergétique sur 30 ans',
    color: '#10B981',
  },
  {
    icon: Award,
    value: 4,
    suffix: '',
    label: 'Certifications RGE Green Confort',
    color: '#3B82F6',
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span>
      {count.toLocaleString('fr-FR')}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${stat.color}20` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl lg:text-4xl font-black mb-1"
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>
              <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
