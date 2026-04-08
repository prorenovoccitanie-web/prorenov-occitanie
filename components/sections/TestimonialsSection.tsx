'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const clientTestimonials = [
  {
    name: 'Marie T.',
    ville: 'Blagnac',
    produit: 'Panneaux photovoltaïques 9 kWc + Batterie Virtuelle Urban Solar',
    economie: '0 € d\'électricité depuis 8 mois',
    stars: 5,
    text: 'Gauthier nous a accompagnés du début à la fin. L\'équipe de Green Confort était ultra-professionnelle. Aujourd\'hui on reçoit des factures à 0 € et on se sent libres. C\'est incroyable de s\'être dit pendant des années "c\'est trop cher" alors qu\'on payait 190 €/mois à EDF. On regrette juste de ne pas l\'avoir fait avant.',
    initials: 'MT',
  },
  {
    name: 'Jean-Pierre M.',
    ville: 'Colomiers',
    produit: 'PAC Air/Eau Daikin + Ballon Thermodynamique',
    economie: '60% d\'économies sur le chauffage',
    stars: 5,
    text: 'On avait une vieille chaudière gaz qui consommait énormément. Gauthier nous a proposé une PAC air/eau avec les aides MaPrimeRénov\'. Green Confort a tout géré, on n\'a pratiquement rien avancé. Ma facture de chauffage est passée de 280 €/mois à moins de 90 €. Et on est encore plus au chaud qu\'avant !',
    initials: 'JPM',
  },
  {
    name: 'Sophie R.',
    ville: 'Ramonville-Saint-Agne',
    produit: 'PAC Air/Air + Gainable Daikin',
    economie: 'Confort été comme hiver, -45% de facture',
    stars: 5,
    text: 'Notre maison était impossible à chauffer en hiver et une fournaise en été. Gauthier a proposé une solution gainable pour répartir le confort dans toutes les pièces. Installation en 3 jours, techniciens impeccables. Maintenant on a une température parfaite toute l\'année et nos factures ont été divisées par deux.',
    initials: 'SR',
  },
]

const aaTestimonials = [
  {
    name: 'Thomas V.',
    age: '28 ans',
    ancienStatut: 'Ancien salarié dans le BTP',
    revenus: '3 200 €/mois en 2 mois',
    text: 'J\'étais salarié, 1 800 € nets par mois, sans perspectives. Gauthier m\'a formé en 3 semaines. Les outils IA m\'ont bluffé — je génère des devis en 10 minutes. En 2 mois j\'ai signé 12 chantiers. Je gagne plus qu\'avant avec beaucoup plus de liberté. Si vous hésitez, ne perdez pas de temps.',
    initials: 'TV',
  },
  {
    name: 'Amélie D.',
    age: '34 ans',
    ancienStatut: 'Ancienne demandeuse d\'emploi',
    revenus: '2 800 €/mois au 3e mois',
    text: 'Je cherchais un emploi depuis 8 mois. Quelqu\'un m\'a parlé de Pro Rénov. J\'ai postulé sans y croire. Gauthier m\'a rappelée le lendemain. Formation professionnelle, vraiment complète. Les prospects fournis m\'ont permis de démarrer rapidement. Maintenant j\'ai trouvé ma voie et je ne retournerai jamais en arrière.',
    initials: 'AD',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-solar-gold text-solar-gold" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-green-100 text-green-700 mb-4">
            Ils nous font confiance
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Des résultats concrets,{' '}
            <span className="gradient-orange-text">des vrais témoignages</span>
          </h2>
        </motion.div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {clientTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-slate-200" />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.ville}</div>
                </div>
              </div>
              <StarRating count={t.stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-3 mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-slate-200 pt-3">
                <div className="text-xs font-bold text-slate-500 mb-1">{t.produit}</div>
                <div className="text-sm font-extrabold text-green-600">{t.economie}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AA Testimonials */}
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-8">
            Et nos apporteurs d&apos;affaires en parlent aussi...
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aaTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-white/20" />
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-white">{t.name}, {t.age}</div>
                    <div className="text-xs text-white/60">{t.ancienStatut}</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-extrabold"
                  style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)', color: 'white' }}>
                  {t.revenus}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
