'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const brands = [
  { name: 'Urban Solar', subtitle: 'Batterie Virtuelle', flag: '🇫🇷', color: '#F97316', bg: 'bg-orange-50' },
  { name: 'Daikin', subtitle: 'PAC & Gainable', flag: '', color: '#0066CC', bg: 'bg-blue-50' },
  { name: 'Atlantic', subtitle: 'PAC & Ballon', flag: '', color: '#1E3A5F', bg: 'bg-indigo-50' },
  { name: 'Dual Sun', subtitle: 'Panneaux Hybrides', flag: '🇫🇷', color: '#F59E0B', bg: 'bg-amber-50' },
  { name: 'Trina Solar', subtitle: 'Panneaux Premium', flag: '', color: '#10B981', bg: 'bg-green-50' },
]

export default function BrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
            Nous travaillons uniquement avec les leaders du marché
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900">Nos marques partenaires</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`${brand.bg} rounded-2xl px-6 py-4 flex items-center gap-3 border border-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg" style={{ color: brand.color }}>
                    {brand.name}
                  </span>
                  {brand.flag && <span className="text-sm">{brand.flag}</span>}
                </div>
                <div className="text-xs text-slate-500 font-medium">{brand.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
