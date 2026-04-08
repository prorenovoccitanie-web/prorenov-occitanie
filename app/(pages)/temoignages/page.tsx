import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight, Play } from 'lucide-react'
import FormClient from '@/components/forms/FormClient'

export const metadata: Metadata = {
  title: 'Témoignages Clients & Apporteurs | Pro Rénov Occitanie Toulouse',
  description:
    'Découvrez les témoignages de nos clients et apporteurs d\'affaires. Économies réalisées, expériences d\'installation, avis sur Green Confort. Toulouse et Occitanie.',
  alternates: {
    canonical: '/temoignages',
  },
}

const clientTestimonials = [
  {
    name: 'Marie T.',
    ville: 'Blagnac',
    produit: 'Panneaux PV 9 kWc + Batterie Virtuelle Urban Solar',
    economie: '0 € de facture depuis 8 mois',
    stars: 5,
    text: 'Gauthier nous a accompagnés du début à la fin. L\'équipe de Green Confort était ultra-professionnelle. Aujourd\'hui on reçoit des factures à 0 € et on se sent libres. C\'est incroyable de s\'être dit pendant des années "c\'est trop cher" alors qu\'on payait 190 €/mois à EDF. On regrette juste de ne pas l\'avoir fait avant.',
    initials: 'MT',
    date: 'Octobre 2024',
  },
  {
    name: 'Jean-Pierre M.',
    ville: 'Colomiers',
    produit: 'PAC Air/Eau Daikin + Ballon Thermodynamique',
    economie: '60% d\'économies sur le chauffage',
    stars: 5,
    text: 'On avait une vieille chaudière gaz qui consommait énormément. Gauthier nous a proposé une PAC air/eau avec les aides MaPrimeRénov\'. Green Confort a tout géré, on n\'a pratiquement rien avancé. Ma facture de chauffage est passée de 280 €/mois à moins de 90 €. Et on est encore plus au chaud qu\'avant !',
    initials: 'JPM',
    date: 'Novembre 2024',
  },
  {
    name: 'Sophie R.',
    ville: 'Ramonville-Saint-Agne',
    produit: 'PAC Air/Air + Gainable Daikin',
    economie: 'Confort total, -45% de facture',
    stars: 5,
    text: 'Notre maison était impossible à chauffer en hiver et une fournaise en été. Gauthier a proposé une solution gainable pour répartir le confort dans toutes les pièces. Installation en 3 jours, techniciens impeccables. Maintenant on a une température parfaite toute l\'année.',
    initials: 'SR',
    date: 'Décembre 2024',
  },
  {
    name: 'Laurent B.',
    ville: 'Tournefeuille',
    produit: 'Panneaux PV 6 kWc + Batterie Virtuelle',
    economie: 'Facture divisée par 6',
    stars: 5,
    text: 'J\'étais sceptique au départ. Gauthier m\'a expliqué le fonctionnement de la batterie virtuelle Urban Solar clairement, sans jargon. Résultat 6 mois après : ma facture mensuelle est passée de 160 € à 28 €. L\'installation s\'est payée en partie grâce à l\'aide Toulouse Métropole. Bluffant.',
    initials: 'LB',
    date: 'Janvier 2025',
  },
  {
    name: 'Isabelle D.',
    ville: 'L\'Union',
    produit: 'PAC Air/Eau Atlantic + VMC Double Flux',
    economie: '55% d\'économies annuelles',
    stars: 5,
    text: 'Nous avons fait deux gestes en même temps : PAC air/eau pour remplacer notre fioul et VMC double flux pour la qualité de l\'air. Les aides MaPrimeRénov\' et CEE ont couvert presque 60% du montant. Green Confort a avancé les fonds, on n\'a rien eu à débourser avant les travaux. Parfait.',
    initials: 'ID',
    date: 'Février 2025',
  },
  {
    name: 'Michel P.',
    ville: 'Castanet-Tolosan',
    produit: 'Isolation Combles + PAC Air/Air',
    economie: '70% d\'économies sur chauffage',
    stars: 5,
    text: 'Maison de 1980 avec zéro isolation. Green Confort a fait l\'isolation des combles et installé deux PAC air/air Daikin. En une semaine de travaux, ma maison est méconnaissable. L\'hiver dernier, ma facture de chauffage a été divisée par 3. Je kiffe.',
    initials: 'MP',
    date: 'Mars 2025',
  },
]

const aaTestimonials = [
  {
    name: 'Thomas V.',
    age: '28 ans',
    ancienStatut: 'Ancien salarié dans le BTP',
    revenus: '3 200 €/mois',
    delai: 'En 2 mois',
    stars: 5,
    text: 'J\'étais salarié, 1 800 € nets par mois, sans perspectives. Gauthier m\'a formé en 3 semaines. Les outils IA m\'ont bluffé — je génère des devis en 10 minutes. En 2 mois j\'ai signé 12 chantiers. Je gagne plus qu\'avant avec beaucoup plus de liberté. Si vous hésitez, ne perdez pas de temps.',
    initials: 'TV',
  },
  {
    name: 'Amélie D.',
    age: '34 ans',
    ancienStatut: 'Ancienne demandeuse d\'emploi',
    revenus: '2 800 €/mois',
    delai: 'Au 3e mois',
    stars: 5,
    text: 'Je cherchais un emploi depuis 8 mois. Quelqu\'un m\'a parlé de Pro Rénov. J\'ai postulé sans y croire. Gauthier m\'a rappelée le lendemain. Formation professionnelle, vraiment complète. Les prospects fournis m\'ont permis de démarrer rapidement. Je me suis découvert un vrai talent commercial que j\'ignorais.',
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

const videoPlaceholders = [
  { title: 'Marie & sa famille — PV + Urban Solar', ville: 'Blagnac' },
  { title: 'Jean-Pierre — PAC air/eau Daikin', ville: 'Colomiers' },
  { title: 'Thomas — Son témoignage d\'AA', ville: 'Toulouse' },
]

export default function TemoignagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Ils ont fait confiance à{' '}
            <span className="gradient-orange-text">Pro Rénov Occitanie</span>
          </h1>
          <p className="text-xl text-white/80">
            Des résultats concrets, vérifiables, racontés par nos clients et apporteurs.
          </p>
        </div>
      </section>

      {/* Video Placeholders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-10">
            Témoignages vidéo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {videoPlaceholders.map((vid) => (
              <div key={vid.title} className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                  <div className="w-16 h-16 rounded-full bg-solar-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-sm">{vid.title}</div>
                    <div className="text-white/60 text-xs">{vid.ville}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-4">
            Vidéos disponibles prochainement — Inscrivez-vous pour être notifié
          </p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">
            Témoignages clients
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientTestimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <StarRating count={t.stars} />
                <p className="text-slate-600 italic text-sm leading-relaxed mt-3 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.ville} — {t.date}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mb-1">{t.produit}</div>
                  <div className="text-sm font-extrabold text-green-600">{t.economie}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AA Testimonials */}
      <section className="py-20 gradient-navy-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">
            Nos apporteurs d&apos;affaires témoignent
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aaTestimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-6 bg-white/10 border border-white/20">
                <StarRating count={t.stars} />
                <p className="text-white/80 italic text-sm leading-relaxed mt-3 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}, {t.age}</div>
                      <div className="text-white/60 text-xs">{t.ancienStatut}</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-extrabold"
                    style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)', color: 'white' }}>
                    {t.revenus} {t.delai}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/devenir-apporteur" className="btn-primary text-lg px-8 py-4">
              Rejoindre l&apos;équipe
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-slate-600 mb-8">
            Étude gratuite sous 24h. Gauthier vous rappelle personnellement.
          </p>
          <FormClient source="temoignages" />
        </div>
      </section>
    </>
  )
}
