import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Users, Shield, Clock, Check, ArrowRight, Star, Zap, Wind, Sun } from 'lucide-react'
import FormClient from '@/components/forms/FormClient'

export const metadata: Metadata = {
  title: 'Pourquoi Choisir Pro Rénov Occitanie | Green Confort RGE Toulouse',
  description:
    'Découvrez pourquoi Pro Rénov Occitanie et Green Confort sont la référence en rénovation énergétique à Toulouse. 10 ans d\'expérience, 4 certifications RGE, 100% salariés, 0 sous-traitance.',
  alternates: {
    canonical: '/pourquoi-nous',
  },
}

const certifications = [
  {
    icon: Award,
    name: 'RGE QUALIBAT',
    desc: 'La certification de référence pour les entreprises du bâtiment engagées dans la rénovation énergétique. Gage de sérieux, de compétence et de qualité d\'exécution des travaux.',
    color: '#F59E0B',
  },
  {
    icon: Sun,
    name: 'RGE QUALIPV',
    desc: 'Qualification spécifique pour l\'installation de systèmes photovoltaïques. Obligatoire pour accéder aux aides de l\'État et garantir une installation conforme aux normes.',
    color: '#F97316',
  },
  {
    icon: Zap,
    name: 'RGE QUALISOL',
    desc: 'Certification pour les installations solaires thermiques. Preuve d\'expertise dans la maîtrise des systèmes d\'énergie renouvelable thermique.',
    color: '#10B981',
  },
  {
    icon: Wind,
    name: 'RGE QUALIAIR',
    desc: 'Qualification pour les pompes à chaleur, la ventilation et le traitement de l\'air. Indispensable pour les travaux éligibles à MaPrimeRénov\' et aux CEE.',
    color: '#3B82F6',
  },
]

const engagements = [
  { icon: Clock, title: '10 ans d\'expérience', desc: 'Green Confort existe depuis 2014. Une décennie de rénovations énergétiques en Occitanie.' },
  { icon: Users, title: '100% salariés diplômés', desc: 'Tous nos techniciens sont des salariés de Green Confort, formés et certifiés. Jamais de sous-traitance.' },
  { icon: Shield, title: '0 sous-traitance', desc: 'Votre chantier est géré du début à la fin par nos équipes. Responsabilité totale, qualité garantie.' },
  { icon: Award, title: '4 certifications RGE', desc: 'Nous couvrons tous les types de travaux éligibles aux aides. Une expertise à 360°.' },
  { icon: Check, title: 'Aides avancées par nos soins', desc: 'Green Confort avance les fonds MPR/CEE. Vous ne payez que le reste à charge net.' },
  { icon: Star, title: 'Satisfaction garantie', desc: 'Plus de 200 chantiers en Occitanie. Notre réputation se construit chantier après chantier.' },
]

const testimonials = [
  {
    name: 'Marie T.',
    ville: 'Blagnac',
    stars: 5,
    text: 'L\'équipe Green Confort est arrivée à l\'heure, a travaillé proprement, et Gauthier nous a accompagnés jusqu\'à la mise en service. Le suivi après installation est irréprochable.',
    initials: 'MT',
  },
  {
    name: 'Jean-Pierre M.',
    ville: 'Colomiers',
    stars: 5,
    text: 'Ce qui m\'a convaincu, c\'est que Green Confort a géré tout le dossier MPR sans que j\'aie à lever le petit doigt. Transparent, professionnel, résultat parfait.',
    initials: 'JPM',
  },
  {
    name: 'Sophie R.',
    ville: 'Ramonville',
    stars: 5,
    text: 'Gauthier est passé, a expliqué tout le processus clairement, sans pression. Les techniciens ont été excellents. Je recommande à tous mes voisins.',
    initials: 'SR',
  },
]

export default function PourquoiNousPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-solar-gold/20 text-solar-gold mb-6">
            Green Confort — Notre installateur partenaire
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            10 ans d&apos;expertise.
            <br />
            <span className="gradient-orange-text">4 certifications RGE.</span>
            <br />
            0 sous-traitance. 100% fiable.
          </h1>
          <p className="text-xl text-white/80">
            Chez Pro Rénov Occitanie, nous ne travaillons qu&apos;avec le meilleur installateur
            que nous ayons trouvé : Green Confort. Voici pourquoi.
          </p>
        </div>
      </section>

      {/* Green Confort */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-blue-100 text-blue-700 mb-6">
                Fondé en 2014 — Toulouse, Occitanie
              </span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Green Confort :{' '}
                <span className="gradient-orange-text">l&apos;installateur qui ne fait aucun compromis</span>
              </h2>
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed">
                  Green Confort est né en 2014 d&apos;une conviction simple : la rénovation énergétique
                  mérite des professionnels sérieux, pas des commerciaux qui sous-traitent à des ouvriers
                  non qualifiés. 10 ans plus tard, c&apos;est l&apos;entreprise que nous avons choisie
                  comme partenaire exclusif.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Tous leurs techniciens sont des <strong className="text-slate-800">salariés diplômés de Green Confort</strong>.
                  Pas de sous-traitance, pas d&apos;intérimaires le week-end. Quand l&apos;équipe arrive
                  chez vous, c&apos;est les mêmes que celles qui ont fait 200 chantiers avant le vôtre.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Résultat : une qualité d&apos;installation constante, un service après-vente réactif,
                  et des clients qui recommandent systématiquement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Années d\'expérience', value: '10+', color: 'bg-orange-50 text-solar-orange' },
                { label: 'Certifications RGE', value: '4', color: 'bg-amber-50 text-amber-600' },
                { label: 'Sous-traitance', value: '0%', color: 'bg-green-50 text-green-600' },
                { label: 'Salariés diplômés', value: '100%', color: 'bg-blue-50 text-blue-600' },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.color} rounded-2xl p-6 text-center`}>
                  <div className="text-4xl font-black mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              4 Certifications RGE — Pourquoi ça compte
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Sans certification RGE, vous perdez l&apos;accès aux aides de l&apos;État.
              Green Confort est qualifié pour tous les types de travaux.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ background: `${cert.color}20`, border: `2px solid ${cert.color}40` }}
                >
                  <cert.icon className="w-7 h-7" style={{ color: cert.color }} />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-3">{cert.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Rénov section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Pro Rénov Occitanie —{' '}
              <span className="gradient-orange-text">La vision de Gauthier Jory</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-24 h-24 rounded-3xl flex items-center justify-center mb-6 text-4xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                GJ
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Gauthier Jory</h3>
              <p className="text-slate-500 font-semibold mb-4">Fondateur — Pro Rénov Occitanie, Toulouse Sud</p>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  &ldquo;J&apos;ai créé Pro Rénov Occitanie avec une conviction : les familles françaises
                  méritent d&apos;accéder à l&apos;autonomie énergétique de façon simple, transparente
                  et financièrement intelligente.
                </p>
                <p>
                  Trop souvent, j&apos;ai vu des gens se faire vendre des installations médiocres par
                  des commerciaux qui disparaissent après la signature. Nous faisons l&apos;inverse.
                  Nous accompagnons chaque client de la première visite au dernier kWh produit.
                </p>
                <p>
                  Notre modèle : les meilleures technologies (Urban Solar, Daikin, Atlantic),
                  le meilleur installateur (Green Confort), et un suivi commercial irréprochable.
                  Nous ne faisons pas de la quantité. Nous faisons de la qualité.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Nos 6 engagements</h3>
              <div className="space-y-4">
                {engagements.map((eng) => (
                  <div key={eng.title} className="flex gap-4 p-4 rounded-xl bg-slate-50">
                    <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <eng.icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm mb-1">{eng.title}</div>
                      <p className="text-slate-600 text-xs">{eng.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
            Ce qu&apos;ils disent de nous
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-solar-gold text-solar-gold" />
                  ))}
                </div>
                <p className="text-slate-600 italic text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.ville}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Prêt à nous faire confiance ?
            </h2>
            <p className="text-slate-600">Étude gratuite en 24h. Gauthier vous rappelle personnellement.</p>
          </div>
          <FormClient source="pourquoi-nous" />
        </div>
      </section>
    </>
  )
}
