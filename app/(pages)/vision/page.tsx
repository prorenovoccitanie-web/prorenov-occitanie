import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sun, Target, Globe, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notre Vision — Pro Rénov Occitanie | Gauthier Jory',
  description:
    'La vision de Gauthier Jory et Pro Rénov Occitanie : rendre chaque famille française propriétaire de son énergie. Le manifeste d\'un entrepreneur engagé.',
  alternates: {
    canonical: '/vision',
  },
}

const timeline = [
  {
    period: 'Mois 1-3',
    title: 'Fondation Toulouse Sud',
    desc: 'Lancement de Pro Rénov Occitanie. Premiers clients, premiers apporteurs formés. Preuve du modèle.',
    done: true,
  },
  {
    period: 'Mois 4-6',
    title: 'Expansion Toulouse',
    desc: '10 apporteurs d\'affaires actifs. CRM optimisé. Formation certifiée CPF lancée. 1M€ de chiffre d\'affaires généré.',
    done: false,
  },
  {
    period: 'Mois 7-12',
    title: 'Première agence région',
    desc: 'Montpellier ou Bordeaux. Duplication du modèle. 25 apporteurs. Partenariats institutionnels.',
    done: false,
  },
  {
    period: 'Année 2-3',
    title: 'Réseau d\'agences France',
    desc: '5 agences régionales. 100 apporteurs. La marque Pro Rénov comme référence nationale.',
    done: false,
  },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Sun className="w-16 h-16 text-solar-gold mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Rendre chaque famille française{' '}
            <span className="gradient-orange-text">propriétaire de son énergie</span>
          </h1>
          <p className="text-xl text-white/80">
            Le manifeste de Gauthier Jory — Pro Rénov Occitanie
          </p>
        </div>
      </section>

      {/* Manifeste */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p className="text-2xl font-bold text-slate-900">
                &ldquo;J&apos;en avais assez de voir des familles payer 200 € par mois à EDF
                sans jamais que ça change.&rdquo;
              </p>

              <p>
                C&apos;est parti de là. D&apos;une conversation avec un voisin qui venait de
                recevoir sa facture d&apos;électricité. Il regardait la feuille avec une résignation
                que j&apos;ai trouvée insupportable. Comme si payer des sommes croissantes à une
                multinationale de l&apos;énergie était une fatalité.
              </p>

              <p>
                <strong>Ce n&apos;est pas une fatalité.</strong>
              </p>

              <p>
                Les technologies existent. Les aides existent. Les installateurs compétents existent.
                Ce qui manque, c&apos;est quelqu&apos;un pour assembler tout ça et le rendre accessible
                à tous — pas juste aux gens qui ont le temps de faire des recherches pendant des semaines.
              </p>

              <p>
                Pro Rénov Occitanie, c&apos;est ça : une interface humaine entre des familles qui veulent
                reprendre le contrôle de leur énergie et des technologies qui le permettent. On ne vend
                pas des panneaux. On vend de l&apos;autonomie.
              </p>

              <div className="border-l-4 border-solar-orange pl-6 my-8">
                <p className="text-xl font-bold text-slate-900 italic">
                  &ldquo;Dans 30 ans, mes clients ne paieront plus un centime d&apos;électricité
                  à EDF. Cette idée me fait me lever le matin.&rdquo;
                </p>
              </div>

              <p>
                Et il y a une deuxième partie de la vision : les apporteurs d&apos;affaires.
                Des dizaines de personnes en Occitanie, puis en France, qui gagnent bien leur vie
                en aidant leurs voisins à devenir indépendants énergétiquement. C&apos;est un
                cercle vertueux : les AAs gagnent leur vie, les clients économisent, la planète
                va mieux.
              </p>

              <p>
                Je ne prétends pas changer le monde. Mais changer quelques milliers de vies
                en Occitanie d&apos;abord, en France ensuite — ça, oui, j&apos;y crois.
              </p>

              <p className="font-bold text-slate-900">
                — Gauthier Jory, Toulouse, avril 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-14">
            La feuille de route
          </h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div
                key={item.period}
                className={`flex gap-6 p-6 rounded-2xl ${item.done
                  ? 'gradient-navy-bg text-white'
                  : 'bg-white border border-slate-100 shadow-sm'
                  }`}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-sm ${item.done
                    ? 'bg-solar-gold text-white'
                    : 'bg-slate-100 text-slate-500'
                    }`}>
                    {item.done ? '✓' : `M${i + 1}`}
                  </div>
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${item.done ? 'text-white/60' : 'text-slate-500'}`}>
                    {item.period}
                  </div>
                  <h3 className={`font-extrabold text-lg mb-1 ${item.done ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${item.done ? 'text-white/75' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            L&apos;équipe qui change la France énergétiquement
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Pro Rénov Occitanie + Green Confort + Urban Solar + nos apporteurs d&apos;affaires.
            Un écosystème au service d&apos;une seule mission.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Gauthier Jory', desc: 'Vision commerciale, stratégie, développement réseau.' },
              { icon: Zap, title: 'Green Confort', desc: '10 ans, 4 RGE, 100% salariés. L\'excellence terrain.' },
              { icon: Sun, title: 'Urban Solar', desc: 'La technologie batterie virtuelle qui change les règles du jeu.' },
              { icon: Globe, title: 'Nos AAs', desc: 'Le moteur commercial. La force de frappe terrain.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-slate-50">
                <div className="w-12 h-12 rounded-2xl gradient-navy-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-solar-gold" />
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#formulaire" className="btn-primary text-lg px-8 py-4">
              Rejoindre le mouvement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/devenir-apporteur" className="btn-outline-navy text-lg px-8 py-4">
              Devenir apporteur d&apos;affaires
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
