'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2 } from 'lucide-react'

const schema = z.object({
  nom: z.string().min(2),
  email: z.string().email('Email invalide'),
  telephone: z.string().optional(),
  sujet: z.string().min(1, 'Sujet requis'),
  message: z.string().min(10, 'Message trop court (minimum 10 caractères)'),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 1000))
      setIsSuccess(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Message envoyé !</h3>
        <p className="text-slate-600">Gauthier vous répond sous 24h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Nom *</label>
          <input type="text" placeholder="Dupont" {...register('nom')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors" />
          {errors.nom && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Téléphone</label>
          <input type="tel" placeholder="06 12 34 56 78" {...register('telephone')}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
        <input type="email" placeholder="marie@exemple.fr" {...register('email')}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors" />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Sujet *</label>
        <select {...register('sujet')}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors">
          <option value="">Sélectionnez...</option>
          <option value="devis">Demande de devis</option>
          <option value="pv">Photovoltaïque</option>
          <option value="pac">Pompe à chaleur</option>
          <option value="aides">Questions sur les aides</option>
          <option value="aa">Devenir apporteur d&apos;affaires</option>
          <option value="formation">Formation</option>
          <option value="autre">Autre</option>
        </select>
        {errors.sujet && <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Message *</label>
        <textarea rows={5} placeholder="Votre message..." {...register('message')}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-solar-orange transition-colors resize-none" />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 disabled:opacity-70">
        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Envoyer le message'}
      </button>
    </form>
  )
}
