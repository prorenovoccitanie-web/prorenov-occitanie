import type { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Leaf, ArrowRight, Check, Banknote, FileText } from 'lucide-react'
import FormClient from '@/components/forms/FormClient'

export const metadata: Metadata = {
  title: 'Aides Financement Rénovation Énergétique Toulouse 2025 | Pro Rénov Occitanie',
  description:
    'Toutes les aides pour votre rénovation énergétique en 2025 : MaPrimeRénov\', CEE, Aide Toulouse Métropole 25%. Green Confort avance les fonds et monte vos dossiers. Gratuit.',
  alternates: {
    canonical: '/aides-financement',
  },
}

const mpRBaremes = [
  { tranche: 'Très modestes', couleur: 'Bleu', exempleRevenu: '< 25 714 € (seul) / < 37 739 € (2 pers)', aideMax: 'Jusqu\'à 70%', badge: 'bg-blue-100 text-blue-800' },
  { tranche: 'Modestes', couleur: 'Jaune', exempleRevenu: '< 31 192 € (seul) / < 45 820 € (2 pers)', aideMax: 'Jusqu\'à 50%', badge: 'bg-yellow-100 text-yellow-800' },
  { tranche: 'Intermédiaires', couleur: 'Violet', exempleRevenu: '< 43 475 € (seul) / < 63 844 € (2 pers)', aideMax: 'Jusqu\'à 35%', badge: 'bg-purple-100 text-purple-800' },
  { tranche: 'Supérieures', couleur: 'Rose', exempleRevenu: 'Au-dessus des plafonds intermédiaires', aideMax: 'Jusqu\'à 15%', badge: 'bg-pink-100 text-pink-800' },
]

export default function AidesFinancementPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-solar-gold/20 text-solar-gold mb-6">
            Aides 2025 — mis à jour
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Jusqu&apos;à{' '}
            <span className="gradient-orange-text">70%</span>{' '}
            pris en charge
            <br />
            <span className="text-3xl md:text-4xl font-bold text-white/90">
              Green Confort monte tout pour vous
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Ne laissez pas les démarches administratives vous freiner.
            Green Confort avance les fonds et monte l&apos;intégralité de vos dossiers d&apos;aides.
            Vous ne gérez rien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#formulaire-aides" className="btn-primary text-lg px-8 py-4">
              Calculer mes aides gratuitement
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MPR */}
      <section id="maprimerenov" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
                <Leaf className="w-4 h-4" />
                PAC | VMC | Isolation | Ballon — PAS le PV
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                MaPrimeRénov&apos;
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                MaPrimeRénov&apos; est l&apos;aide d&apos;État principale pour la rénovation énergétique.
                Son montant dépend de vos revenus (tranche ANAH), du type de travaux et de la surface
                de votre logement. Elle est accessible à TOUS les propriétaires, quelle que soit leur
                tranche de revenus.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800 font-medium mb-6">
                <strong>Important :</strong> MaPrimeRénov&apos; n&apos;est PAS disponible pour les panneaux
                photovoltaïques. Pour le PV, l&apos;aide disponible à Toulouse est l&apos;Aide Toulouse Métropole.
              </div>
              <ul className="space-y-3">
                {[
                  'Accessible à tous les propriétaires français',
                  'Cumulable avec les CEE',
                  'Calculée sur le montant HT des travaux',
                  'Versée directement ou déduite du devis (via Green Confort)',
                  'Dossier monté gratuitement par Green Confort',
                  'Fonds avancés par Green Confort — vous payez seulement le reste à charge',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                Barèmes 2025 — Revenu Fiscal de Référence
              </h3>
              <div className="space-y-3">
                {mpRBaremes.map((b) => (
                  <div key={b.tranche} className="rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between p-4">
                      <div>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-1 ${b.badge}`}>
                          Ménages {b.tranche}
                        </span>
                        <p className="text-sm text-slate-600">{b.exempleRevenu}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold text-slate-900">{b.aideMax}</div>
                        <div className="text-xs text-slate-500">selon le geste</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                * Barèmes indicatifs 2025. Le montant exact dépend du type de travaux et de votre situation.
                Notre étude gratuite calcule votre aide précise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEE */}
      <section id="cee" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                Certificats d&apos;Économies d&apos;Énergie (CEE)
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Les CEE sont des aides versées par les fournisseurs d&apos;énergie (EDF, Total Énergies, Engie...)
                qui ont l&apos;obligation légale de financer des économies d&apos;énergie chez les particuliers.
                Ces aides sont cumulables avec MaPrimeRénov&apos;.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Cumulable avec MaPrimeRénov\'',
                  'Aucune condition de revenus pour les CEE classiques',
                  'Montant variable selon le type de travaux',
                  'Green Confort gère toutes les démarches',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-800">
                <strong>Note :</strong> Les CEE s&apos;appliquent aux PAC, VMC, isolation, ballon thermodynamique.
                Pas au photovoltaïque.
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-extrabold text-xl text-slate-900 mb-4">
                CEE + MPR cumulés : exemple concret
              </h3>
              <div className="space-y-4">
                {[
                  { type: 'PAC Air/Eau', prix: '12 000 €', mpr: '4 200 €', cee: '1 500 €', reste: '6 300 €' },
                  { type: 'PAC Air/Air', prix: '6 000 €', mpr: '2 100 €', cee: '600 €', reste: '3 300 €' },
                  { type: 'Isolation combles', prix: '4 000 €', mpr: '1 400 €', cee: '800 €', reste: '1 800 €' },
                ].map((row) => (
                  <div key={row.type} className="rounded-xl bg-slate-50 p-4">
                    <div className="font-bold text-slate-900 mb-2">{row.type} — {row.prix}</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-green-600 font-bold">{row.mpr}</div>
                        <div className="text-slate-500">MPR</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-600 font-bold">{row.cee}</div>
                        <div className="text-slate-500">CEE</div>
                      </div>
                      <div className="text-center">
                        <div className="text-solar-orange font-extrabold">{row.reste}</div>
                        <div className="text-slate-500">Reste à charge</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                * Exemples indicatifs pour ménages modestes. Votre situation peut différer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aide Toulouse Métropole */}
      <section id="toulouse-metropole" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 gradient-orange-bg text-center">
              <Sun className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Aide Toulouse Métropole — Photovoltaïque
              </h2>
              <div className="text-6xl font-black text-white mb-2">25%</div>
              <div className="text-white/90 text-lg font-bold">du montant HT — Uniquement pour le PV</div>
            </div>
            <div className="bg-slate-50 p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-4">Cette aide est disponible pour :</h3>
                  <ul className="space-y-2">
                    {[
                      'Panneaux photovoltaïques uniquement',
                      'Propriétaires occupants',
                      'Résidence principale',
                      'Communes de Toulouse Métropole',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-solar-orange mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-4">Cette aide N&apos;EST PAS disponible pour :</h3>
                  <ul className="space-y-2">
                    {[
                      'Pompes à chaleur',
                      'VMC et ventilation',
                      'Isolation',
                      'Ballon thermodynamique',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-red-500 font-black flex-shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link href="#formulaire-aides" className="btn-primary px-8 py-4 text-lg">
                  Vérifier mon éligibilité
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financement */}
      <section id="financement" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Le financement qui change{' '}
              <span className="gradient-orange-text">votre perspective</span>
            </h2>
          </div>
          <div className="rounded-3xl gradient-navy-bg p-8 lg:p-12 text-center text-white">
            <Banknote className="w-12 h-12 text-solar-gold mx-auto mb-6" />
            <h3 className="text-2xl font-extrabold mb-6">
              Vous payez déjà 200 €/mois à EDF.
              <br />
              Payez 200 €/mois de crédit à la place.
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Même effort financier mensuel. Mais dans 5 à 7 ans, l&apos;installation vous appartient.
              Vous êtes propriétaire de votre énergie pour les 25 années suivantes.
              C&apos;est la différence entre dépenser et investir.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Financement typique', value: '5 à 7 ans', sub: 'Mensualités proches de votre facture EDF' },
                { label: 'Après remboursement', value: '0 €', sub: 'Électricité quasi-gratuite sur 25 ans' },
                { label: 'Retour sur investissement', value: '< 10 ans', sub: 'Selon votre consommation et production' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="text-white/70 text-sm mb-1">{item.label}</div>
                  <div className="text-3xl font-extrabold text-solar-gold mb-1">{item.value}</div>
                  <div className="text-white/60 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Green Confort avance les fonds */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-12 h-12 text-navy mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Green Confort avance les fonds — vous ne gérez rien
          </h2>
          <p className="text-slate-600 text-xl mb-8 max-w-3xl mx-auto">
            Via un mandat administratif, Green Confort constitue et dépose vos dossiers d&apos;aides
            (MaPrimeRénov&apos;, CEE, Aide Toulouse Métropole). Vous ne déboursez que votre reste à charge
            NET. Plus besoin d&apos;attendre les remboursements pendant des mois.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { step: '1', title: 'Signature du mandat', desc: 'Vous nous autorisez à déposer vos dossiers en votre nom.' },
              { step: '2', title: 'Green Confort avance', desc: 'L\'installateur prend en charge les aides et vous les déduit de votre facture.' },
              { step: '3', title: 'Vous payez le reste', desc: 'Vous ne payez que ce qu\'il reste une fois toutes les aides déduites.' },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-extrabold mx-auto mb-3"
                  style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                  {s.step}
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link href="#formulaire-aides" className="btn-primary text-lg px-8 py-4">
            Je veux connaître mes aides
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire-aides" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Calculez vos aides en 24h
            </h2>
            <p className="text-slate-600">Gratuit, sans engagement, réponse personnalisée.</p>
          </div>
          <FormClient
            source="aides-financement"
            title="Calculer mes aides gratuitement"
            subtitle="Renseignez votre situation pour obtenir un calcul précis de vos aides disponibles."
          />
        </div>
      </section>
    </>
  )
}
