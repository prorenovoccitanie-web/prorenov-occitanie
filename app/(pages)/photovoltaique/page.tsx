import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sun, Check, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'
import FormClient from '@/components/forms/FormClient'

export const metadata: Metadata = {
  title: 'Panneaux Solaires Toulouse | Batterie Virtuelle Urban Solar | Pro Rénov Occitanie',
  description:
    'Installation panneaux photovoltaïques à Toulouse. Partenaire Urban Solar batterie virtuelle, Dual Sun et Trina Solar. Aide Toulouse Métropole 25% du HT. Devis gratuit 24h.',
  alternates: {
    canonical: '/photovoltaique',
  },
}

const pvProducts = [
  {
    name: 'Dual Sun Hybrid',
    badge: '🇫🇷 Marque française',
    headline: 'Le panneau 2-en-1 : électricité + eau chaude',
    description:
      'Le panneau révolutionnaire qui produit simultanément de l\'électricité ET de l\'eau chaude sanitaire. Un seul panneau remplace deux technologies. Rendement combiné incomparable.',
    features: ['Électricité + eau chaude en un seul panneau', 'Rendement 20% supérieur aux panneaux standards', 'Fabrication française', 'Garantie 25 ans produit'],
    color: '#F97316',
  },
  {
    name: 'Trina Solar Vertex',
    badge: 'Top 3 mondial',
    headline: 'Le meilleur rendement au m² du marché',
    description:
      'La référence mondiale en matière de rendement. Technologie monocristalline de dernière génération pour une production maximale, même par temps couvert.',
    features: ['Rendement jusqu\'à 22,8% par panneau', 'Technologie monocristalline PERC', 'Garantie linéaire de performance 25 ans', 'Testé et certifié par les plus grands instituts'],
    color: '#10B981',
  },
]

const faqItems = [
  {
    q: 'Combien de panneaux faut-il pour une maison standard ?',
    a: 'Pour une maison de 100-150 m² avec 4 personnes consommant environ 5 000 kWh/an à Toulouse, une installation de 6 à 9 kWc (soit 15 à 22 panneaux) est généralement recommandée. Notre étude personnalisée gratuite détermine la puissance exacte selon votre consommation réelle.',
  },
  {
    q: 'Quelle est la différence entre la batterie physique et la batterie virtuelle Urban Solar ?',
    a: 'Une batterie physique coûte 5 000 à 15 000 € supplémentaires, se dégrade en 10 ans et complique la revente de votre bien. La batterie virtuelle Urban Solar fonctionne comme un "crédit d\'énergie" sur le réseau : vous stockez votre surplus virtuellement et le récupérez quand vous en avez besoin, au même tarif que votre production. Résultat : 95% d\'autonomie sans aucun des inconvénients d\'une batterie physique.',
  },
  {
    q: 'Qu\'est-ce que l\'aide Toulouse Métropole de 25% ?',
    a: 'Toulouse Métropole subventionne 25% du montant HT de votre installation photovoltaïque pour les résidents éligibles (propriétaires occupants dans les communes de Toulouse Métropole). Cette aide est cumulable avec votre financement. Green Confort monte votre dossier gratuitement et vous indique précisément votre éligibilité.',
  },
  {
    q: 'Combien de temps dure l\'installation ?',
    a: 'L\'installation par les techniciens Green Confort dure généralement 1 à 2 jours pour une installation standard de 6-9 kWc. Nos équipes sont 100% salariées et diplômées, sans sous-traitance. La mise en service et le raccordement au réseau peut prendre 4 à 8 semaines supplémentaires (délais Enedis).',
  },
  {
    q: 'Quelle est la durée de vie des panneaux solaires ?',
    a: 'Les panneaux que nous installons (Dual Sun et Trina Solar) ont une garantie produit de 25 ans et une garantie de performance linéaire garantissant au minimum 80% de production après 25 ans. En réalité, ils fonctionnent très bien au-delà de 30 ans. C\'est un investissement sur 3 décennies.',
  },
  {
    q: 'Mon installation sera-t-elle rentable si je ne suis pas souvent là ?',
    a: 'Absolument. Avec la batterie virtuelle Urban Solar, vous récupérez l\'énergie produite en votre absence dès votre retour. Contrairement à une simple revente à EDF (rachetée 0,04 €/kWh), vous récupérez votre surplus à 0,13 €/kWh, soit plus de 3 fois plus. La rentabilité est assurée quelle que soit votre occupation du logement.',
  },
]

export default function PhotovoltaiquePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80"
            alt="Panneaux solaires installation Toulouse"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-solar-gold/20 border border-solar-gold/30 text-solar-gold text-sm font-bold">
                🇫🇷 Partenaire officiel Urban Solar
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold">
                Dual Sun & Trina Solar
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Panneaux Solaires{' '}
              <span className="gradient-orange-text">+ Batterie Virtuelle</span>
              <br />
              <span className="text-3xl md:text-4xl font-bold text-white/90">
                L&apos;autonomie énergétique totale
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Installation photovoltaïque sur Toulouse et l&apos;Occitanie. Technologie
              Urban Solar pour 95% d&apos;autonomie. Aide Toulouse Métropole 25% du HT.
            </p>
            <Link href="#formulaire-pv" className="btn-primary text-lg px-8 py-4">
              Obtenir mon devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Urban Solar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-orange-100 text-solar-orange mb-4">
              Technologie exclusive France
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Pourquoi Urban Solar est{' '}
              <span className="gradient-orange-text">révolutionnaire</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Urban Solar a inventé la batterie virtuelle : un système qui vous permet
              de stocker votre surplus d&apos;énergie sur le réseau national et de le
              récupérer quand vous en avez besoin, au même prix que votre production.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                  La batterie physique vs Urban Solar
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Coût initial', physique: '5 000 à 15 000 €', virtuelle: '0 € supplémentaire' },
                    { label: 'Durée de vie', physique: '8 à 12 ans', virtuelle: '30 ans (durée panneaux)' },
                    { label: 'Revente maison', physique: 'Contrainte + dépréciation', virtuelle: 'Aucune contrainte' },
                    { label: 'Rendement stockage', physique: '80-90% (pertes)', virtuelle: '100% récupéré' },
                    { label: 'Maintenance', physique: 'Obligatoire, coûteuse', virtuelle: 'Aucune' },
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold text-slate-700">{row.label}</div>
                      <div className="text-red-500 text-center bg-red-50 rounded px-2 py-1">{row.physique}</div>
                      <div className="text-green-600 font-bold text-center bg-green-50 rounded px-2 py-1">{row.virtuelle}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-400 font-semibold pt-1">
                    <div></div>
                    <div className="text-center">Batterie physique</div>
                    <div className="text-center">Urban Solar 🇫🇷</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl gradient-orange-bg">
                <div className="text-white">
                  <div className="text-4xl font-black mb-1">0,13 €</div>
                  <div className="text-sm font-bold mb-3 text-white/80">par kWh récupéré via Urban Solar</div>
                  <div className="text-white/70 text-sm mb-3">
                    vs 0,04 €/kWh si vous revendez à EDF
                  </div>
                  <div className="font-bold">
                    C&apos;est 3,25 fois plus rentable que la revente classique.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Comment ça fonctionne, concrètement ?
              </h3>
              {[
                {
                  step: '1',
                  title: 'Production solaire',
                  desc: 'Vos panneaux produisent de l\'électricité. En journée, vous l\'utilisez en direct pour tous vos appareils.',
                  icon: Sun,
                  color: '#F97316',
                },
                {
                  step: '2',
                  title: 'Autoconsommation directe',
                  desc: 'Tout ce que vous consommez en direct = 0 € à EDF. Votre compteur tourne à l\'envers.',
                  icon: Zap,
                  color: '#F59E0B',
                },
                {
                  step: '3',
                  title: 'Stockage virtuel du surplus',
                  desc: 'Le surplus non consommé est crédité sur votre compte Urban Solar au lieu d\'être bradé à EDF.',
                  icon: Shield,
                  color: '#10B981',
                },
                {
                  step: '4',
                  title: 'Récupération à la demande',
                  desc: 'La nuit, l\'hiver, par temps couvert : vous débitez votre crédit Urban Solar. 0 € à payer.',
                  icon: TrendingUp,
                  color: '#3B82F6',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-slate-50">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}20` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm mb-1">
                      Étape {item.step} — {item.title}
                    </div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produits PV */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Nos panneaux sélectionnés avec exigence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Nous ne proposons que ce que nous considérons comme le meilleur du marché.
              Qualité, durabilité et rendement maximum.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {pvProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6" style={{ background: `${product.color}15`, borderBottom: `3px solid ${product.color}` }}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ background: `${product.color}20`, color: product.color }}>
                    {product.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{product.name}</h3>
                  <p className="font-bold text-slate-700">{product.headline}</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-5">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Micro-onduleurs AP Systems
            </h3>
            <p className="text-slate-600 mb-3 max-w-2xl mx-auto">
              Nous installons systématiquement des micro-onduleurs AP Systems, qui optimisent la production
              panneau par panneau. Si un panneau est à l&apos;ombre, les autres continuent à produire à 100%.
              Monitoring en temps réel via l&apos;application.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-600">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Optimisation panel par panel</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Production maximale par temps couvert</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Monitoring temps réel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Aide Toulouse Métropole */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 gradient-orange-bg text-center">
              <Sun className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Aide Toulouse Métropole
              </h2>
              <div className="text-6xl font-black text-white mb-2">25%</div>
              <div className="text-white/90 text-lg font-bold">du montant HT de votre installation</div>
            </div>
            <div className="bg-slate-50 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-3">Conditions d&apos;éligibilité</h3>
                  <ul className="space-y-2">
                    {[
                      'Être propriétaire occupant du logement',
                      'Résider dans les communes de Toulouse Métropole',
                      'Installation photovoltaïque uniquement',
                      'Résidence principale uniquement',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-solar-orange mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-3">Ce que nous faisons pour vous</h3>
                  <ul className="space-y-2">
                    {[
                      'Vérification gratuite de votre éligibilité',
                      'Montage complet du dossier par Green Confort',
                      'Suivi et relance de votre dossier',
                      'Déduction directe de votre devis',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="#formulaire-pv" className="btn-primary text-lg px-8 py-4">
                  Vérifier mon éligibilité gratuitement
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="accordion-item group">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-slate-900 hover:text-solar-orange transition-colors">
                  {item.q}
                  <span className="text-xl text-solar-orange ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire-pv" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Votre devis photovoltaïque gratuit
            </h2>
            <p className="text-slate-600">
              Réponse sous 24h — Étude de faisabilité et d&apos;éligibilité incluse
            </p>
          </div>
          <FormClient
            source="photovoltaique"
            defaultProduit="photovoltaique"
            title="Votre étude solaire gratuite"
            subtitle="Recevez votre estimation d'économies, votre aide Toulouse Métropole et votre plan de financement."
          />
        </div>
      </section>
    </>
  )
}
