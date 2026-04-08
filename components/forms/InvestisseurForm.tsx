'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2 } from 'lucide-react'

const schema = z.object({
  nom: z.string().min(2),
  prenom: z.string().min(2),
  email: z.string().email('Email invalide'),
  telephone: z.string().min(10),
  montant_envisage: z.string().min(1, 'Veuillez sélectionner un montant'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function InvestisseurForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Message reçu</h3>
        <p className="text-slate-600">Gauthier vous contacte sous 48h pour un entretien confidentiel.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input type="text" placeholder="Prénom *" {...register('prenom')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange" />
          {errors.prenom && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
        <div>
          <input type="text" placeholder="Nom *" {...register('nom')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange" />
          {errors.nom && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
      </div>
      <input type="email" placeholder="Email *" {...register('email')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange" />
      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      <input type="tel" placeholder="Téléphone *" {...register('telephone')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange" />
      <select {...register('montant_envisage')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange">
        <option value="">Montant envisagé *</option>
        <option value="360">360 € HT</option>
        <option value="1000-5000">1 000 € – 5 000 €</option>
        <option value="5000-15000">5 000 € – 15 000 €</option>
        <option value="15000+">15 000 €+</option>
      </select>
      {errors.montant_envisage && <p className="text-red-500 text-xs mt-1">{errors.montant_envisage.message}</p>}
      <textarea rows={3} placeholder="Message (optionnel)" {...register('message')}
        className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange resize-none" />
      <p className="text-xs text-slate-500">
        Note : Les détails et conditions sont communiqués uniquement lors du rendez-vous confidentiel.
      </p>
      <button type="submit" disabled={isSubmitting}
        className="btn-primary w-full justify-center py-4 disabled:opacity-70">
        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Demander un entretien confidentiel'}
      </button>
    </form>
  )
}
