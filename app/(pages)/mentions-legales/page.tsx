import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales & Politique de Confidentialité | Pro Rénov Occitanie',
  description: 'Mentions légales, politique de confidentialité et gestion des cookies de Pro Rénov Occitanie.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-12">Mentions Légales</h1>

        <div className="prose prose-slate max-w-none space-y-10">

          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">1. Éditeur du site</h2>
            <div className="bg-slate-50 rounded-xl p-6 text-slate-700 space-y-2">
              <p><strong>Dénomination :</strong> Pro Rénov Occitanie</p>
              <p><strong>Représentant légal :</strong> Gauthier Jory</p>
              <p><strong>Siège social :</strong> Toulouse, Occitanie, France</p>
              <p><strong>Email :</strong> gauthier@prorenov-occitanie.fr</p>
              <p><strong>Activité :</strong> Régie commerciale — rénovation énergétique</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">2. Hébergement</h2>
            <div className="bg-slate-50 rounded-xl p-6 text-slate-700 space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</p>
              <p><strong>Site :</strong> vercel.com</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-slate-700 leading-relaxed">
              L&apos;ensemble du contenu du site prorenov-occitanie.fr (textes, images, logos, vidéos, etc.)
              est protégé par le droit d&apos;auteur et est la propriété exclusive de Pro Rénov Occitanie.
              Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">4. Limitation de responsabilité</h2>
            <p className="text-slate-700 leading-relaxed">
              Pro Rénov Occitanie s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
              publiées sur ce site. Les montants d&apos;aides indiqués sont donnés à titre indicatif et peuvent
              évoluer. Pro Rénov Occitanie ne peut être tenu responsable des décisions prises sur la
              base des informations publiées. Une étude personnalisée est nécessaire pour obtenir des
              montants précis.
            </p>
          </section>

          {/* RGPD */}
          <section id="confidentialite">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">5. Politique de Confidentialité (RGPD)</h2>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.1 Responsable du traitement</h3>
                <p>Gauthier Jory — Pro Rénov Occitanie — gauthier@prorenov-occitanie.fr</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.2 Données collectées</h3>
                <p>
                  Nous collectons les données personnelles que vous nous fournissez via nos formulaires :
                  nom, prénom, email, téléphone, ville, situation fiscale, informations sur votre projet
                  de rénovation. Ces données sont nécessaires au traitement de votre demande.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.3 Finalités du traitement</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Traitement de votre demande d&apos;étude ou de devis</li>
                  <li>Prise de contact pour vous rappeler</li>
                  <li>Envoi d&apos;informations sur nos services (si vous y consentez)</li>
                  <li>Amélioration de nos services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.4 Durée de conservation</h3>
                <p>
                  Vos données sont conservées pendant 3 ans à compter du dernier contact,
                  ou jusqu&apos;à votre demande de suppression.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.5 Vos droits</h3>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants : accès, rectification,
                  suppression, portabilité, opposition au traitement. Pour exercer ces droits,
                  contactez-nous à gauthier@prorenov-occitanie.fr.
                </p>
                <p className="mt-2">
                  Vous disposez également du droit de déposer une plainte auprès de la CNIL
                  (Commission Nationale de l&apos;Informatique et des Libertés) — cnil.fr.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5.6 Sous-traitants</h3>
                <p>
                  Vos données peuvent être transmises à nos sous-traitants techniques :
                  Supabase (stockage base de données, conformité SOC 2), Vercel (hébergement),
                  Resend (envoi d&apos;emails transactionnels). Ces partenaires traitent vos données
                  exclusivement pour les besoins de notre service.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-4">6. Politique des Cookies</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience et analyser
                notre trafic. Voici les types de cookies utilisés :
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { name: 'Cookies essentiels', desc: 'Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.', type: 'Obligatoires' },
                  { name: 'Cookies analytiques', desc: 'Google Analytics 4 pour comprendre l\'utilisation du site. Anonymisés.', type: 'Optionnels' },
                  { name: 'Cookies marketing', desc: 'Meta Pixel pour mesurer l\'efficacité de nos publicités. Anonymisés.', type: 'Optionnels' },
                ].map((cookie) => (
                  <div key={cookie.name} className="p-4 rounded-xl bg-slate-50">
                    <div className="font-bold text-slate-900 text-sm mb-1">{cookie.name}</div>
                    <div className={`text-xs font-semibold mb-2 ${cookie.type === 'Obligatoires' ? 'text-red-600' : 'text-blue-600'}`}>
                      {cookie.type}
                    </div>
                    <p className="text-xs text-slate-600">{cookie.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                Vous pouvez gérer vos préférences de cookies à tout moment en utilisant
                les paramètres de votre navigateur.
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm text-slate-500">
              Dernière mise à jour : Avril 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
