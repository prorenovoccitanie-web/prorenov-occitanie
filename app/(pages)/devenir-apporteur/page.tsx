import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Euro, Smartphone, Target, GraduationCap, BarChart2, Handshake, Star } from 'lucide-react'
import FormAA from '@/components/forms/FormAA'

export const metadata: Metadata = {
  title: 'Devenir Apporteur d\'Affaires | Pro Rénov Occitanie Toulouse',
  description:
    'Rejoignez l\'équipe Pro Rénov Occitanie comme apporteur d\'affaires. 10% de commission, outils IA exclusifs, prospects fournis, formation complète. Nos AAs gagnent déjà 3 000 €/mois.',
  alternates: {
    canonical: '/devenir-apporteur',
  },
}

const offers = [
  {
    icon: Euro,
    title: '10% de commission HT',
    desc: 'Sur chaque chantier signé. Sur des chantiers à 8 000 – 20 000 €, c\'est 800 à 2 000 € par signature. Quelques chantiers par mois et vous dépassez votre ancien salaire.',
    highlight: true,
  },
  {
    icon: Smartphone,
    title: 'Outils IA exclusifs',
    desc: 'Des outils que vos concurrents n\'ont pas. Génération de devis en 10 minutes. Scripts de vente IA. Analyse de consommation automatique. Un avantage concurrentiel réel.',
    highlight: false,
  },
  {
    icon: Target,
    title: 'Prospects qualifiés fournis',
    desc: '16 rendez-vous qualifiés par mois fournis. Vous ne cherchez pas vos clients — ils vous attendent. Concentrez-vous sur la vente, pas sur la prospection.',
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: 'Formation complète',
    desc: 'Formation intensive de 2 à 4 semaines sur les produits, les aides, la vente. Finançable CPF. Premier rendez-vous accompagné par Gauthier. Vous n\'êtes jamais seul.',
    highlight: false,
  },
  {
    icon: BarChart2,
    title: 'CRM + Tableau de bord',
    desc: 'Accès à votre CRM personnel pour suivre vos prospects, vos commissions, vos chantiers en cours. Tout est transparent, tout est mesurable.',
    highlight: false,
  },
  {
    icon: Handshake,
    title: 'Statut investisseur privé',
    desc: 'Possibilité d\'investir dans Pro Rénov Occitanie dès que vous prouvez vos résultats. Devenez actionnaire du projet que vous contribuez à construire.',
    highlight: false,
  },
]

const steps = [
  {
    num: '01',
    title: 'Tu postules',
    desc: 'Remplis le formulaire ci-dessous. 5 minutes. Honnête. On veut juste savoir qui tu es et pourquoi tu veux changer.',
  },
  {
    num: '02',
    title: 'Entretien avec Gauthier',
    desc: 'Gauthier te rappelle dans les 48h. Pas de pression. Un vrai échange humain pour voir si on est alignés.',
  },
  {
    num: '03',
    title: 'Formation intensive',
    desc: '2 à 4 semaines de formation complète. Produits, aides, vente, outils IA. Tu sors formé et prêt.',
  },
  {
    num: '04',
    title: 'Premier RDV accompagné',
    desc: 'Gauthier t\'accompagne sur tes premiers rendez-vous. Tu vois comment ça se passe en vrai, pas en théorie.',
  },
  {
    num: '05',
    title: 'Autonomie et revenus',
    desc: 'Tu gères tes rendez-vous, tu signes tes chantiers, tu encaisses tes commissions. La liberté que tu cherchais.',
  },
]

const aaTestimonials = [
  {
    name: 'Thomas V., 28 ans',
    ancienStatut: 'Ancien salarié BTP — 1 800 €/mois',
    nouveauRevenu: '3 200 €/mois en 2 mois',
    text: 'J\'étais salarié, 1 800 € nets par mois, sans perspectives. Gauthier m\'a formé en 3 semaines. Les outils IA m\'ont bluffé — je génère des devis en 10 minutes. En 2 mois j\'ai signé 12 chantiers. Je gagne plus qu\'avant avec beaucoup plus de liberté. Si vous hésitez, ne perdez pas de temps.',
    initials: 'TV',
  },
  {
    name: 'Amélie D., 34 ans',
    ancienStatut: 'Demandeuse d\'emploi — 8 mois',
    nouveauRevenu: '2 800 €/mois au 3e mois',
    text: 'Je cherchais un emploi depuis 8 mois. Quelqu\'un m\'a parlé de Pro Rénov. J\'ai postulé sans y croire. Gauthier m\'a rappelée le lendemain. Formation professionnelle, vraiment complète. Les prospects fournis m\'ont permis de démarrer rapidement. Je me suis découvert un vrai talent commercial que j\'ignorais.',
    initials: 'AD',
  },
]

const simulations = [
  { chantiers: 3, montant: 15000, commission: 4500 },
  { chantiers: 5, montant: 15000, commission: 7500 },
  { chantiers: 8, montant: 15000, commission: 12000 },
  { chantiers: 10, montant: 15000, commission: 15000 },
]

export default function DevenirApporteurPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-solar-gold/20 text-solar-gold mb-6">
            2 AAs. 2 mois. 3 000 €/mois chacun.
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Rejoins l&apos;équipe qui change des vies
            <br />
            <span className="gradient-orange-text text-3xl md:text-4xl font-bold">
              y compris la tienne
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Nos 2 premiers apporteurs d&apos;affaires gagnent déjà 3 000 €/mois.
            Ils avaient 0 expérience. En 2 mois.
          </p>
          <Link href="#formulaire-aa" className="btn-primary text-lg px-8 py-4">
            Je veux rejoindre l&apos;équipe
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Offre */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Ce qu&apos;on t&apos;offre,{' '}
              <span className="gradient-orange-text">sans bullshit</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <div
                key={offer.title}
                className={`rounded-2xl p-6 ${offer.highlight
                  ? 'gradient-orange-bg text-white shadow-glow-orange'
                  : 'bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow'
                  }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${offer.highlight ? 'bg-white/20' : 'bg-white shadow-sm'}`}>
                  <offer.icon className={`w-6 h-6 ${offer.highlight ? 'text-white' : 'text-solar-orange'}`} />
                </div>
                <h3 className={`font-extrabold text-lg mb-2 ${offer.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {offer.title}
                </h3>
                <p className={`text-sm leading-relaxed ${offer.highlight ? 'text-white/85' : 'text-slate-600'}`}>
                  {offer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-14">
            Comment ça se passe
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl font-black flex-shrink-0 w-12 gradient-orange-text">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Ceux qui l&apos;ont fait avant toi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aaTestimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 bg-white/10 border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-solar-gold text-solar-gold" />
                  ))}
                </div>
                <p className="text-white/80 text-sm italic leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-white"
                    style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-white/60 text-xs">{t.ancienStatut}</div>
                    <div className="text-solar-gold font-extrabold text-sm">{t.nouveauRevenu}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation revenus */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-4">
            Simule tes revenus potentiels
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Basé sur des chantiers moyens à 15 000 € HT — commission de 10%
          </p>
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="gradient-navy-bg">
                  <th className="text-left text-white font-bold p-4">Chantiers / mois</th>
                  <th className="text-center text-white font-bold p-4">Montant moyen HT</th>
                  <th className="text-center text-white font-bold p-4">Ta commission (10%)</th>
                  <th className="text-center text-white font-bold p-4">Mensuel estimé</th>
                </tr>
              </thead>
              <tbody>
                {simulations.map((row, i) => (
                  <tr key={row.chantiers} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-bold text-slate-900">{row.chantiers} chantiers</td>
                    <td className="p-4 text-center text-slate-600">{row.montant.toLocaleString('fr-FR')} €</td>
                    <td className="p-4 text-center text-slate-600">
                      {(row.montant * 0.1).toLocaleString('fr-FR')} € / chantier
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-extrabold text-solar-orange text-lg">
                        {row.commission.toLocaleString('fr-FR')} €
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 text-center mt-3">
            * Simulation indicative. Les commissions réelles varient selon les chantiers signés.
          </p>
        </div>
      </section>

      {/* Formulaire AA */}
      <section id="formulaire-aa" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Postule maintenant
            </h2>
            <p className="text-slate-600">
              Entretien avec Gauthier sous 48h. Discret. Sans engagement.
            </p>
          </div>
          <FormAA />
          <div className="text-center mt-6">
            <p className="text-slate-600 mb-2">
              Tu préfères être formé avant ? Découvre notre formation CPF.
            </p>
            <Link href="/formation" className="text-solar-orange font-bold hover:underline flex items-center justify-center gap-1">
              Voir la formation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
