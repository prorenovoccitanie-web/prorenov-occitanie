import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Pro Rénov Occitanie',
  description:
    'Politique de confidentialité et gestion des données personnelles de Pro Rénov Occitanie, conformément au RGPD.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/politique-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-slate-500 mb-12">Dernière mise à jour : Avril 2025</p>

        <div className="prose prose-slate max-w-none space-y-10">

          {/* Responsable */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              1. Responsable du traitement
            </h2>
            <div className="bg-slate-50 rounded-xl p-6 text-slate-700 space-y-2">
              <p><strong>Dénomination :</strong> Pro Rénov Occitanie</p>
              <p><strong>Représentant légal :</strong> Gauthier Jory</p>
              <p><strong>Siège social :</strong> Toulouse, Occitanie, France</p>
              <p><strong>Email :</strong> gauthier@prorenov-occitanie.fr</p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              2. Données personnelles collectées
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Nous collectons uniquement les données que vous nous communiquez
                directement via nos formulaires :
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">Formulaire client</h3>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• Prénom et nom</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Ville</li>
                    <li>• Produit souhaité</li>
                    <li>• Situation fiscale (RFR, parts)</li>
                    <li>• Énergie actuelle et consommation</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">Formulaire candidat AA</h3>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>• Prénom, nom, âge</li>
                    <li>• Téléphone et email</li>
                    <li>• Ville</li>
                    <li>• Situation professionnelle</li>
                    <li>• Disponibilité</li>
                    <li>• Motivation (texte libre)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Finalités */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              3. Finalités et bases légales du traitement
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-700 border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold text-slate-900">Finalité</th>
                    <th className="text-left px-4 py-3 font-bold text-slate-900">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Traitement de votre demande d\'étude ou de devis', 'Intérêt légitime / Exécution d\'un contrat'],
                    ['Prise de contact pour vous rappeler', 'Intérêt légitime'],
                    ['Envoi d\'informations sur nos services', 'Consentement'],
                    ['Amélioration de nos services', 'Intérêt légitime'],
                    ['Mesures d\'audience (Google Analytics)', 'Consentement'],
                    ['Mesures publicitaires (Meta Pixel)', 'Consentement'],
                  ].map(([fin, base], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 border-t border-slate-200">{fin}</td>
                      <td className="px-4 py-3 border-t border-slate-200 text-slate-500">{base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Durée de conservation */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              4. Durée de conservation
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Vos données sont conservées pendant <strong>3 ans</strong> à compter du dernier
              contact, ou jusqu&apos;à votre demande de suppression. Les données de cookies
              analytiques sont conservées pendant <strong>13 mois maximum</strong> (politique
              Google Analytics).
            </p>
          </section>

          {/* Destinataires */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              5. Destinataires et sous-traitants
            </h2>
            <p className="text-slate-700 mb-4">
              Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.
              Elles peuvent être transmises aux sous-traitants techniques suivants, dans le
              strict cadre de notre service :
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: 'Supabase', role: 'Stockage base de données', badge: 'SOC 2 Type II' },
                { name: 'Vercel', role: 'Hébergement du site web', badge: 'ISO 27001' },
                { name: 'Resend', role: 'Envoi d\'emails transactionnels', badge: 'RGPD' },
              ].map((p) => (
                <div key={p.name} className="bg-slate-50 rounded-xl p-4">
                  <div className="font-bold text-slate-900 mb-1">{p.name}</div>
                  <div className="text-sm text-slate-600 mb-2">{p.role}</div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                    {p.badge}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              6. Vos droits (RGPD)
            </h2>
            <p className="text-slate-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679),
              vous disposez des droits suivants :
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { right: 'Droit d\'accès', desc: 'Obtenir une copie de vos données' },
                { right: 'Droit de rectification', desc: 'Corriger vos données inexactes' },
                { right: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données' },
                { right: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format lisible' },
                { right: 'Droit d\'opposition', desc: 'Vous opposer au traitement de vos données' },
                { right: 'Droit de limitation', desc: 'Limiter temporairement le traitement' },
              ].map((r) => (
                <div key={r.right} className="bg-slate-50 rounded-xl p-4">
                  <div className="font-bold text-slate-900 text-sm mb-1">{r.right}</div>
                  <div className="text-xs text-slate-600">{r.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Pour exercer vos droits :</strong> contactez-nous à{' '}
                <a href="mailto:gauthier@prorenov-occitanie.fr" className="underline font-semibold">
                  gauthier@prorenov-occitanie.fr
                </a>
                . Nous répondons sous 30 jours.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                Vous pouvez également déposer une réclamation auprès de la{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">
                  CNIL
                </a>{' '}
                (Commission Nationale de l&apos;Informatique et des Libertés).
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              7. Politique des cookies
            </h2>
            <p className="text-slate-700 mb-4">
              Un cookie est un petit fichier texte déposé sur votre terminal lors de votre
              visite. Voici les cookies utilisés sur ce site :
            </p>
            <div className="space-y-4">
              {[
                {
                  name: 'Cookies essentiels',
                  type: 'Obligatoires',
                  typeColor: 'bg-red-100 text-red-700',
                  retention: 'Session / 1 an',
                  desc: 'Nécessaires au fonctionnement du site (préférences cookies, sécurité). Ils ne peuvent pas être désactivés.',
                  examples: ['cookie_consent'],
                },
                {
                  name: 'Google Analytics 4',
                  type: 'Analytiques — Optionnels',
                  typeColor: 'bg-blue-100 text-blue-700',
                  retention: '13 mois',
                  desc: 'Mesure d\'audience anonymisée (pages visitées, durée de session, source du trafic). Données anonymisées, IP tronquée.',
                  examples: ['_ga', '_ga_XXXXXX'],
                },
                {
                  name: 'Meta Pixel (Facebook)',
                  type: 'Marketing — Optionnels',
                  typeColor: 'bg-purple-100 text-purple-700',
                  retention: '90 jours',
                  desc: 'Mesure de l\'efficacité de nos publicités sur Meta. Vous pouvez vous y opposer via vos paramètres Facebook.',
                  examples: ['_fbp', '_fbc'],
                },
              ].map((c) => (
                <div key={c.name} className="border border-slate-200 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-slate-900">{c.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${c.typeColor}`}>
                      {c.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{c.desc}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span><strong>Conservation :</strong> {c.retention}</span>
                    <span><strong>Noms :</strong> {c.examples.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600 mt-4">
              Vous pouvez modifier vos préférences à tout moment depuis les paramètres de
              votre navigateur, ou en cliquant sur &quot;Gérer les cookies&quot; en bas de page.
            </p>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
              8. Sécurité des données
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte ou destruction :
              chiffrement HTTPS (TLS 1.3), hébergement chez des prestataires certifiés, accès
              restreint aux données.
            </p>
          </section>

          {/* Liens */}
          <section>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-wrap gap-4 text-sm">
              <Link href="/mentions-legales" className="text-solar-orange hover:underline font-semibold">
                → Mentions légales
              </Link>
              <Link href="/#formulaire" className="text-slate-600 hover:text-solar-orange transition-colors">
                → Retour à l&apos;accueil
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
