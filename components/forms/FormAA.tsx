'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const candidatSchema = z.object({
  prenom: z.string().min(2, 'Prénom requis'),
  age: z.string().min(1, 'Âge requis').refine((val) => {
    const n = parseInt(val)
    return n >= 18 && n <= 65
  }, 'Âge doit être entre 18 et 65 ans'),
  ville: z.string().min(2, 'Ville requise'),
  situation: z.enum(['salarie', 'demandeur_emploi', 'etudiant', 'independant', 'autre'], {
    required_error: 'Veuillez sélectionner votre situation',
  }),
  motivation: z.string().min(30, 'Merci de nous en dire un peu plus (minimum 30 caractères)'),
  disponibilite: z.enum(['immediate', '1_mois', '2_mois'], {
    required_error: 'Veuillez indiquer votre disponibilité',
  }),
  nom: z.string().min(2, 'Nom requis'),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{8})$/, 'Numéro de téléphone invalide'),
  email: z.string().email('Email invalide'),
  acceptation_conditions: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter les conditions' }),
  }),
})

type CandidatFormData = z.infer<typeof candidatSchema>

interface FormAAProps {
  className?: string
}

const situations = [
  { value: 'salarie', label: 'Salarié(e)' },
  { value: 'demandeur_emploi', label: 'Demandeur(se) d\'emploi' },
  { value: 'etudiant', label: 'Étudiant(e)' },
  { value: 'independant', label: 'Indépendant(e) / Auto-entrepreneur' },
  { value: 'autre', label: 'Autre' },
]

const disponibilites = [
  { value: 'immediate', label: 'Immédiate' },
  { value: '1_mois', label: 'Dans 1 mois' },
  { value: '2_mois', label: 'Dans 2 mois' },
]

export default function FormAA({ className }: FormAAProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidatFormData>({
    resolver: zodResolver(candidatSchema),
  })

  const onSubmit = async (data: CandidatFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/candidat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          age: parseInt(data.age),
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setIsSuccess(true)
    } catch {
      setSubmitError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={cn('bg-white rounded-2xl shadow-xl p-8 text-center', className)}>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
          Candidature reçue !
        </h3>
        <p className="text-slate-600 mb-4">
          Gauthier examine votre candidature et vous contacte sous 48h pour un entretien.
        </p>
        <p className="text-sm text-slate-500">
          En attendant, préparez-vous à répondre : &quot;Pourquoi voulez-vous changer de vie ?&quot;
        </p>
      </div>
    )
  }

  return (
    <div className={cn('bg-white rounded-2xl shadow-xl overflow-hidden', className)}>
      <div className="gradient-navy-bg px-6 py-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-white">
          Je veux rejoindre l&apos;équipe
        </h2>
        <p className="text-white/70 text-sm mt-1">
          Entretien sous 48h. Discret et sans engagement.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Prénom *</label>
            <input
              type="text"
              placeholder="Thomas"
              {...register('prenom')}
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
            />
            {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Âge *</label>
            <input
              type="number"
              placeholder="28"
              min="18"
              max="65"
              {...register('age')}
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
            />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Ville *</label>
          <input
            type="text"
            placeholder="Toulouse"
            {...register('ville')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
          />
          {errors.ville && <p className="text-red-500 text-xs mt-1">{errors.ville.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Situation actuelle *</label>
          <select
            {...register('situation')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
          >
            <option value="">Sélectionnez...</option>
            {situations.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          {errors.situation && <p className="text-red-500 text-xs mt-1">{errors.situation.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">
            Pourquoi voulez-vous changer ? *
          </label>
          <textarea
            rows={3}
            placeholder="Parlez-nous de votre situation actuelle et de ce que vous recherchez..."
            {...register('motivation')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors resize-none"
          />
          {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Disponibilité *</label>
          <div className="grid grid-cols-3 gap-2">
            {disponibilites.map((d) => (
              <label key={d.value}>
                <input type="radio" value={d.value} {...register('disponibilite')} className="sr-only peer" />
                <div className="peer-checked:border-solar-orange peer-checked:bg-orange-50 peer-checked:text-solar-orange border-2 border-slate-200 rounded-xl p-2.5 text-center text-sm font-semibold text-slate-600 cursor-pointer transition-all hover:border-solar-orange">
                  {d.label}
                </div>
              </label>
            ))}
          </div>
          {errors.disponibilite && <p className="text-red-500 text-xs mt-1">{errors.disponibilite.message}</p>}
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Nom *</label>
              <input
                type="text"
                placeholder="Martin"
                {...register('nom')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              />
              {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Téléphone *</label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                {...register('telephone')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              />
              {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
            <input
              type="email"
              placeholder="thomas@exemple.fr"
              {...register('email')}
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register('acceptation_conditions')}
            className="mt-1 w-4 h-4 accent-solar-orange"
          />
          <span className="text-sm text-slate-600">
            J&apos;accepte d&apos;être recontacté(e) par Pro Rénov Occitanie et je confirme l&apos;exactitude
            de mes informations. *
          </span>
        </label>
        {errors.acceptation_conditions && (
          <p className="text-red-500 text-xs">{errors.acceptation_conditions.message}</p>
        )}

        {submitError && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200">
            <p className="text-sm text-red-600">{submitError}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Je veux rejoindre l&apos;équipe
              <ChevronRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
