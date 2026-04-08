'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { GraduationCap, Cpu, BarChart2, Target, Star, CheckCircle, Loader2, ArrowRight, Zap, Clock } from 'lucide-react'

const listeAttenteSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  email: z.string().email('Email invalide'),
  telephone: z.string().regex(/^(\+33|0)[1-9](\d{8})$/, 'Numéro invalide'),
  situation: z.string().min(1, 'Situation requise'),
  message: z.string().optional(),
})

type ListeAttenteData = z.infer<typeof listeAttenteSchema>

const includes = [
  { icon: GraduationCap, title: 'Formation complète rénovation + PV', desc: 'Tous les produits, toutes les aides, toutes les objections. Tu maîtrises avant même ton premier RDV.' },
  { icon: Cpu, title: 'Outils IA exclusifs Pro Rénov', desc: 'Des outils que tes concurrents n\'ont pas. Devis en 10 minutes. Scripts de vente. Analyse de conso automatique.' },
  { icon: BarChart2, title: 'CRM + logiciels devis + logiciel solaire', desc: 'Tout l\'arsenal professionnel. Suivi client, génération de devis PV, tableau de bord commissions.' },
  { icon: Target, title: '16 prospects qualifiés / mois fournis', desc: 'Tu ne cherches pas tes clients. Ils t\'attendent. Concentre-toi sur la vente, pas la prospection.' },
  { icon: Zap, title: 'Promesse d\'embauche pour les meilleurs', desc: 'Les profils qui prouvent leurs résultats ont accès à un statut permanent avec fixe + variable.' },
  { icon: Star, title: 'Certification KALIOPI reconnue', desc: 'Une certification nationale qui valorise ta formation. Finançable CPF jusqu\'à 100%.' },
]

const faqItems = [
  {
    q: 'Est-ce vraiment 0 € de ma poche ?',
    a: 'Oui. La formation est finançable intégralement par le CPF (Compte Personnel de Formation). Si votre solde CPF est insuffisant, il existe des solutions complémentaires. Dans tous les cas, nous vous aidons à monter le dossier.',
  },
  {
    q: 'Faut-il avoir des connaissances en énergie ou en vente ?',
    a: 'Aucune. Nos 2 premiers formés n\'avaient aucune expérience dans le secteur. La formation part de zéro et vous amène au niveau professionnel en 2 à 4 semaines.',
  },
  {
    q: 'Est-ce que je travaille seul ou en équipe ?',
    a: 'Vous travaillez en autonomie mais avec le soutien permanent de l\'équipe. CRM partagé, messagerie d\'équipe, formations continues. Vous êtes indépendant mais jamais isolé.',
  },
  {
    q: 'Combien de temps pour avoir mes premiers revenus ?',
    a: 'Nos AAs signent leurs premiers chantiers dans les 2 à 4 semaines suivant leur formation. Les commissions sont versées dès le démarrage des travaux.',
  },
  {
    q: 'Puis-je cumuler avec mon emploi actuel ?',
    a: 'Oui, dans un premier temps. Beaucoup de nos AAs commencent en parallèle de leur emploi. Dès que les revenus dépassent leur salaire, ils font le saut à plein temps.',
  },
  {
    q: 'Combien de places sont disponibles ?',
    a: 'Nous limitons volontairement les promotions à 12 personnes maximum pour garantir la qualité de la formation et l\'accompagnement de chaque formé.',
  },
  {
    q: 'C\'est quoi la certification KALIOPI ?',
    a: 'KALIOPI est un organisme de certification reconnu par France Compétences. La certification valide vos compétences commerciales dans le secteur de la rénovation énergétique. Elle vous ouvre des portes au-delà de Pro Rénov si vous le souhaitez.',
  },
  {
    q: 'Que se passe-t-il si je ne performe pas ?',
    a: 'Il n\'y a pas de pression ni d\'objectifs imposés. Cependant, les prospects qualifiés sont réservés aux AAs actifs. Si vous manquez de résultats, on analyse ensemble ce qui bloque et on ajuste.',
  },
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const target = new Date()
    target.setDate(target.getDate() + 42)

    const update = () => {
      const now = new Date()
      const diff = target.getTime() - now.getTime()
      if (diff <= 0) return

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-3 justify-center">
      {Object.entries(timeLeft).map(([unit, val]) => (
        <div key={unit} className="text-center">
          <div className="w-16 h-16 rounded-xl gradient-navy-bg flex items-center justify-center text-2xl font-black text-white">
            {String(val).padStart(2, '0')}
          </div>
          <div className="text-xs text-slate-500 mt-1 capitalize">{unit === 'days' ? 'jours' : unit === 'hours' ? 'heures' : unit === 'minutes' ? 'min' : 'sec'}</div>
        </div>
      ))}
    </div>
  )
}

function FormListeAttente() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<ListeAttenteData>({
    resolver: zodResolver(listeAttenteSchema),
  })

  const onSubmit = async (data: ListeAttenteData) => {
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/liste-attente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setIsSuccess(true)
    } catch {
      setError('Erreur, veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Place réservée !</h3>
        <p className="text-slate-600">Vous serez parmi les premiers informés de l&apos;ouverture.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            type="text"
            placeholder="Prénom *"
            {...register('prenom')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors"
          />
          {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Téléphone *"
            {...register('telephone')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors"
          />
          {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
        </div>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email *"
          {...register('email')}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <select
        {...register('situation')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors"
      >
        <option value="">Votre situation actuelle *</option>
        <option value="salarie">Salarié(e)</option>
        <option value="demandeur_emploi">Demandeur(se) d&apos;emploi</option>
        <option value="etudiant">Étudiant(e)</option>
        <option value="independant">Indépendant(e)</option>
        <option value="autre">Autre</option>
      </select>
      {errors.situation && <p className="text-red-500 text-xs mt-1">{errors.situation.message}</p>}
      <textarea
        rows={2}
        placeholder="Message optionnel (vos questions, votre situation...)"
        {...register('message')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors resize-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 disabled:opacity-70">
        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Je réserve ma place <ArrowRight className="w-5 h-5" /></>}
      </button>
    </form>
  )
}

export default function FormationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-navy-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-bold bg-solar-gold/20 text-solar-gold">
              Formation 100% finançable CPF
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-white border border-white/20">
              Certification KALIOPI
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            De 0 à 3 000 €/mois en 2 mois.
            <br />
            <span className="gradient-orange-text text-3xl md:text-4xl font-bold">
              Sans diplôme. Sans expérience. Sans rien payer.
            </span>
          </h1>
          <p className="text-xl text-white/80">
            On ne te vend pas un rêve. On te montre une preuve : nos 2 premiers formés
            gagnent déjà plus de 3 000 €/mois. Ils avaient 0 expérience.
          </p>
        </div>
      </section>

      {/* Promesse */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8">
            La preuve avant la promesse
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                name: 'Thomas, 28 ans',
                ancien: 'Salarié BTP — 1 800 €/mois',
                nouveau: '3 200 €/mois',
                delai: 'En 2 mois',
                text: 'Je doutais. Gauthier m\'a convaincu par les chiffres, pas par des belles paroles. Aujourd\'hui je suis libre et je gagne plus.',
                initials: 'TV',
              },
              {
                name: 'Amélie, 34 ans',
                ancien: 'Demandeuse d\'emploi — 8 mois',
                nouveau: '2 800 €/mois',
                delai: 'Au 3e mois',
                text: 'J\'ai toujours pensé que la vente c\'était pas pour moi. Les outils IA ont tout changé. Je suis devenue bonne malgré moi.',
                initials: 'AD',
              },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl gradient-navy-bg p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold"
                    style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-white/60 text-xs line-through">{t.ancien}</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm italic mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-solar-gold">{t.nouveau}</span>
                  <span className="text-white/60 text-sm">{t.delai}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-14">
            Ce que tu reçois dans cette formation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #F97316, #F59E0B)' }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compte à rebours + Liste d'attente */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-orange-bg text-white text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              47 personnes sur liste d&apos;attente
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Ouverture imminente
            </h2>
            <p className="text-slate-600 mb-6">
              12 places maximum. Sois parmi les premiers.
            </p>
            <CountdownTimer />
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="gradient-navy-bg p-6">
              <h3 className="text-xl font-extrabold text-white">
                Je réserve ma place sur liste d&apos;attente
              </h3>
              <p className="text-white/70 text-sm mt-1">Gratuit — Sans engagement — Prioritaire à l&apos;ouverture</p>
            </div>
            <div className="p-6">
              <FormListeAttente />
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

      {/* CTA final */}
      <section className="py-16 gradient-orange-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Tu attends quoi pour changer ta vie ?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Dans 2 mois, tu pourrais gagner 3 000 €/mois. Ou dans 2 mois, tu seras encore à la même place.
          </p>
          <Link href="#" onClick={(e) => { e.preventDefault(); document.querySelector('section:has(form)')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-solar-orange bg-white hover:bg-white/90 transition-all text-lg shadow-lg">
            Je veux ma place maintenant
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
