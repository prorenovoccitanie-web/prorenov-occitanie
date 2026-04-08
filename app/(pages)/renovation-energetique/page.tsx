import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Thermometer, Wind, Cpu, Check, ArrowRight, Leaf } from 'lucide-react'
import FormClient from '@/components/forms/FormClient'

export const metadata: Metadata = {
  title: 'PAC Air/Air, Air/Eau, Gainable, Isolation Toulouse | Pro Rénov Occitanie',
  description:
    'Expert PAC air/air, PAC air/eau, climatisation gainable et isolation à Toulouse. Marques Daikin et Atlantic. Aides MaPrimeRénov\' + CEE jusqu\'à 70%. Certifié RGE.',
  alternates: {
    canonical: '/renovation-energetique',
  },
}

const mainProducts = [
  {
    id: 'pac-air-air',
    icon: Thermometer,
    title: 'PAC Air/Air',
    subtitle: 'Daikin & Atlantic',
    badge: 'Chauffage + Climatisation',
    headline: 'Chauffez ET climatisez pour 3x moins cher',
    description:
      'La pompe à chaleur air/air est la solution idéale pour les maisons sans chauffage central. Elle chauffe en hiver et climatise en été, le tout avec un seul équipement. Le coefficient de performance (COP) de 3 à 5 signifie que pour 1 € d\'électricité consommée, vous produisez 3 à 5 € de chaleur.',
    features: [
      'Fonctionne jusqu\'à -25°C (modèles Daikin Perfera)',
      'COP jusqu\'à 5 — 5€ de chaud pour 1€ d\'électricité',
      'Climatisation réversible été/hiver',
      'Filtration air de haute qualité (allergènes, PM2.5)',
      'Contrôle à distance via application smartphone',
      'Installation en 1 journée',
    ],
    aide: 'MaPrimeRénov\' + CEE',
    aideNote: 'Jusqu\'à 70% selon vos revenus. Green Confort monte tout.',
    color: '#3B82F6',
    bg: 'from-blue-50 to-cyan-50',
  },
  {
    id: 'pac-air-eau',
    icon: Cpu,
    title: 'PAC Air/Eau',
    subtitle: 'Daikin & Atlantic',
    badge: 'Remplace la chaudière',
    headline: 'Remplacez votre chaudière, économisez 60%',
    description:
      'La PAC air/eau est le remplacement parfait d\'une chaudière gaz ou fioul. Elle chauffe l\'eau de votre circuit de radiateurs ou de votre plancher chauffant, ET produit votre eau chaude sanitaire. Avec un COP de 3 à 5, c\'est jusqu\'à 60% d\'économies sur votre facture de chauffage.',
    features: [
      'Remplace chaudière gaz, fioul ou électrique',
      'Compatible radiateurs existants basse température',
      'Eau chaude sanitaire incluse',
      'COP jusqu\'à 5 (5€ de chaleur pour 1€ d\'électricité)',
      'Compatible plancher chauffant',
      'Aides parmi les plus élevées : jusqu\'à 70%',
    ],
    aide: 'MaPrimeRénov\' + CEE',
    aideNote: 'Parmi les aides les plus élevées. Green Confort avance les fonds.',
    color: '#6366F1',
    bg: 'from-indigo-50 to-purple-50',
  },
  {
    id: 'gainable',
    icon: Wind,
    title: 'Gainable',
    subtitle: 'Daikin & Atlantic',
    badge: 'Confort total',
    headline: 'Confort dans TOUTES les pièces',
    description:
      'Le système gainable distribue l\'air conditionné/chauffé dans toutes les pièces via un réseau de gaines intégrées dans les murs ou le plafond. Une seule unité extérieure, un design ultra-discret. La solution premium pour les maisons qui veulent le confort d\'un climatiseur sans les unités murales visibles.',
    features: [
      'Une seule unité extérieure pour toute la maison',
      'Aucune unité murale visible — design épuré',
      'Distribution d\'air dans toutes les pièces',
      'Niveau sonore ultra-faible (< 25 dB)',
      'Filtration et assainissement de l\'air total',
      'Programmation pièce par pièce',
    ],
    aide: 'MaPrimeRénov\' + CEE',
    aideNote: 'Éligible aux aides MPR et CEE. Renseignez-vous sur votre éligibilité.',
    color: '#8B5CF6',
    bg: 'from-purple-50 to-pink-50',
  },
]

const secondaryProducts = [
  {
    title: 'Isolation Combles',
    desc: 'L\'isolation des combles est le geste le plus rentable en rénovation. Jusqu\'à 30% de perte de chaleur par le toit. Laine de verre, soufflage, projection.',
    aide: 'MPR + CEE',
    icon: '🏠',
  },
  {
    title: 'Isolation Planchers Bas',
    desc: 'Isolation sous plancher pour éliminer les ponts thermiques et les courants d\'air froid au sol. Gain de confort immédiat.',
    aide: 'MPR + CEE',
    icon: '📐',
  },
  {
    title: 'Isolation Sous-Rampants',
    desc: 'Pour les combles aménagés, l\'isolation sous les rampants de toiture est indispensable pour maintenir la chaleur.',
    aide: 'MPR + CEE',
    icon: '🔺',
  },
  {
    title: 'VMC Simple Flux',
    desc: 'Ventilation mécanique contrôlée qui renouvelle l\'air vicié et humide pour une meilleure qualité d\'air intérieur.',
    aide: 'MPR + CEE',
    icon: '💨',
  },
  {
    title: 'VMC Double Flux',
    desc: 'La VMC double flux récupère la chaleur de l\'air extrait pour préchauffer l\'air entrant. Économies d\'énergie et qualité d\'air optimale.',
    aide: 'MPR + CEE',
    icon: '🔄',
  },
  {
    title: 'Ballon Thermodynamique',
    desc: 'Chauffe-eau qui utilise les calories de l\'air pour chauffer l\'eau. 3x moins consommateur qu\'un chauffe-eau électrique classique.',
    aide: 'MPR + CEE',
    icon: '💧',
  },
]

export default function RenovationEnergetiquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1631545806609-5c8b76f6efaf?w=1920&q=80"
            alt="Rénovation énergétique installation PAC Toulouse"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold">
                Expert Daikin & Atlantic
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold">
                Aides jusqu&apos;à 70%
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              PAC, Gainable, VMC, Isolation
              <br />
              <span className="gradient-orange-text text-3xl md:text-4xl font-bold">
                Les solutions qui changent votre confort ET votre facture
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Spécialiste des pompes à chaleur Daikin et Atlantic. Aides MaPrimeRénov&apos;
              + CEE jusqu&apos;à 70%. Green Confort avance les fonds et monte vos dossiers.
            </p>
            <Link href="#formulaire-renov" className="btn-primary text-lg px-8 py-4">
              Étude personnalisée gratuite
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Main Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Nos 3 spécialités{' '}
              <span className="gradient-orange-text">chauffage & confort</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Daikin et Atlantic, leaders mondiaux. Installations par les techniciens
              certifiés de Green Confort. 0 sous-traitance.
            </p>
          </div>

          <div className="space-y-8">
            {mainProducts.map((product, i) => (
              <div
                key={product.id}
                id={product.id}
                className={`rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br ${product.bg} border border-white`}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                          style={{ background: `${product.color}20`, border: `2px solid ${product.color}40` }}
                        >
                          <product.icon className="w-7 h-7" style={{ color: product.color }} />
                        </div>
                        <div>
                          <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: `${product.color}20`, color: product.color }}>
                            {product.badge}
                          </span>
                          <div className="font-extrabold text-xl text-slate-900 mt-0.5">
                            {product.title} — {product.subtitle}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                        {product.headline}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm">
                        <Leaf className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-bold text-slate-700">{product.aide}</span>
                        <span className="text-xs text-slate-500">— {product.aideNote}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 mb-4">Ce qui est inclus :</h4>
                      <ul className="space-y-2">
                        {product.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: `${product.color}20` }}
                            >
                              <Check className="w-3 h-3" style={{ color: product.color }} />
                            </div>
                            <span className="text-slate-700 text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="#formulaire-renov" className="btn-primary mt-6 w-full justify-center">
                        Étude gratuite {product.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Products */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Notre gamme complète
            </h2>
            <p className="text-slate-600">
              Tous les travaux éligibles aux aides MaPrimeRénov&apos; et CEE.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryProducts.map((product) => (
              <div key={product.title} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="text-3xl mb-3">{product.icon}</div>
                <h3 className="font-extrabold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{product.desc}</p>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700">
                  <Leaf className="w-3 h-3" />
                  {product.aide}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl gradient-navy-bg p-8 lg:p-12 text-center text-white">
            <Leaf className="w-12 h-12 text-solar-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              MaPrimeRénov&apos; + CEE : jusqu&apos;à 70% de votre installation
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Green Confort avance intégralement les fonds de vos aides.
              Vous ne payez que votre reste à charge. Les dossiers sont montés
              par nos équipes administratives.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
              {[
                { label: 'Ménages très modestes', aide: 'Jusqu\'à 70%', color: 'bg-green-500/20 border-green-400/30' },
                { label: 'Ménages modestes', aide: 'Jusqu\'à 50%', color: 'bg-blue-500/20 border-blue-400/30' },
                { label: 'Ménages intermédiaires', aide: 'Jusqu\'à 35%', color: 'bg-purple-500/20 border-purple-400/30' },
              ].map((row) => (
                <div key={row.label} className={`rounded-xl p-4 border ${row.color}`}>
                  <div className="text-white/70 text-sm mb-1">{row.label}</div>
                  <div className="text-2xl font-black text-white">{row.aide}</div>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm mb-6">
              + CEE (Certificats d&apos;Économies d&apos;Énergie) cumulables | Barèmes 2025
            </p>
            <Link href="#formulaire-renov" className="btn-primary text-lg px-8 py-4">
              Calculer mes aides maintenant
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire-renov" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Votre étude personnalisée gratuite
            </h2>
            <p className="text-slate-600">
              Réponse sous 24h — calcul de vos aides inclus
            </p>
          </div>
          <FormClient source="renovation-energetique" />
        </div>
      </section>
    </>
  )
}
