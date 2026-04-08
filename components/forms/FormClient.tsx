'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2, ChevronRight, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const prospectSchema = z.object({
  proprietaire: z.enum(['oui', 'non'], { required_error: 'Veuillez indiquer si vous êtes propriétaire' }),
  produit: z.string().min(1, 'Veuillez sélectionner un produit'),
  consommation_mensuelle: z.string().optional(),
  energie_actuelle: z.string().min(1, 'Veuillez indiquer votre énergie actuelle'),
  rfr: z.string().min(1, 'Veuillez sélectionner votre tranche de revenus'),
  parts_fiscales: z.string().min(1, 'Veuillez indiquer le nombre de parts fiscales'),
  prenom: z.string().min(2, 'Prénom requis (minimum 2 caractères)'),
  nom: z.string().min(2, 'Nom requis (minimum 2 caractères)'),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{8})$/, 'Numéro de téléphone invalide (format: 06XXXXXXXX)'),
  ville: z.string().min(2, 'Ville requise'),
})

type ProspectFormData = z.infer<typeof prospectSchema>

interface FormClientProps {
  source?: string
  defaultProduit?: string
  className?: string
  title?: string
  subtitle?: string
}

const produits = [
  { value: 'photovoltaique', label: 'Panneaux Photovoltaïques' },
  { value: 'pac_air_air', label: 'PAC Air/Air (Climatisation)' },
  { value: 'pac_air_eau', label: 'PAC Air/Eau (Chauffage central)' },
  { value: 'gainable', label: 'Climatisation Gainable' },
  { value: 'isolation_combles', label: 'Isolation Combles' },
  { value: 'isolation_planchers', label: 'Isolation Planchers Bas' },
  { value: 'vmc_double_flux', label: 'VMC Double Flux' },
  { value: 'ballon_thermodynamique', label: 'Ballon Thermodynamique' },
]

const energies = [
  { value: 'edf', label: 'EDF / Électricité' },
  { value: 'gaz', label: 'Gaz naturel' },
  { value: 'fioul', label: 'Fioul' },
  { value: 'pac', label: 'Pompe à Chaleur' },
  { value: 'autre', label: 'Autre' },
]

const rfrTranches = [
  { value: 'tres_modeste', label: 'Très modeste (ex: 2 pers < 26 000€)' },
  { value: 'modeste', label: 'Modeste (ex: 2 pers < 31 000€)' },
  { value: 'intermediaire', label: 'Intermédiaire (ex: 2 pers < 43 000€)' },
  { value: 'superieure', label: 'Supérieure (ex: 2 pers > 43 000€)' },
  { value: 'je_ne_sais_pas', label: 'Je ne sais pas' },
]

export default function FormClient({
  source = 'home',
  defaultProduit,
  className,
  title = 'Votre étude gratuite en 24h',
  subtitle = 'Renseignez vos informations pour recevoir votre étude personnalisée et vos aides disponibles.',
}: FormClientProps) {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ProspectFormData>({
    resolver: zodResolver(prospectSchema),
    defaultValues: {
      produit: defaultProduit || '',
    },
  })

  const watchProduit = watch('produit')

  const validateStep = async (stepNumber: number) => {
    if (stepNumber === 1) {
      return await trigger(['proprietaire', 'produit', 'consommation_mensuelle', 'energie_actuelle'])
    }
    if (stepNumber === 2) {
      return await trigger(['rfr', 'parts_fiscales'])
    }
    return true
  }

  const handleNext = async () => {
    const valid = await validateStep(step)
    if (valid) setStep(step + 1)
  }

  const onSubmit = async (data: ProspectFormData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const response = await fetch('/api/prospect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      setIsSuccess(true)
    } catch {
      setSubmitError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
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
          Demande envoyée !
        </h3>
        <p className="text-slate-600 mb-4">
          Gauthier vous recontacte sous 24h pour votre étude personnalisée et gratuite.
        </p>
        <p className="text-sm text-slate-500">
          Un email de confirmation vous a été envoyé.
        </p>
      </div>
    )
  }

  return (
    <div id="formulaire" className={cn('bg-white rounded-2xl shadow-xl overflow-hidden', className)}>
      {/* Header */}
      <div className="gradient-navy-bg px-6 py-6">
        <h2 className="text-xl md:text-2xl font-extrabold text-white">{title}</h2>
        <p className="text-white/70 text-sm mt-1">{subtitle}</p>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div
                  className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all',
                    step >= s
                      ? 'bg-solar-orange text-white'
                      : 'bg-white/20 text-white/50'
                  )}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={cn('flex-1 h-1 rounded-full transition-all', step > s ? 'bg-solar-orange' : 'bg-white/20')} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-white/60">
            <span>Votre projet</span>
            <span>Votre situation</span>
            <span>Vos coordonnées</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6">
        {/* Step 1 — Projet */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Êtes-vous propriétaire ? *
              </label>
              <div className="flex gap-3">
                {['oui', 'non'].map((val) => (
                  <label key={val} className="flex-1">
                    <input type="radio" value={val} {...register('proprietaire')} className="sr-only peer" />
                    <div className="peer-checked:border-solar-orange peer-checked:bg-orange-50 peer-checked:text-solar-orange border-2 border-slate-200 rounded-xl p-3 text-center font-bold text-slate-600 cursor-pointer transition-all hover:border-solar-orange capitalize">
                      {val === 'oui' ? 'Oui' : 'Non (locataire)'}
                    </div>
                  </label>
                ))}
              </div>
              {errors.proprietaire && (
                <p className="text-red-500 text-xs mt-1">{errors.proprietaire.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Produit souhaité *
              </label>
              <select
                {...register('produit')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              >
                <option value="">Sélectionnez un produit...</option>
                {produits.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              {errors.produit && (
                <p className="text-red-500 text-xs mt-1">{errors.produit.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Facture électricité mensuelle (€)
              </label>
              <input
                type="number"
                placeholder="Ex: 150"
                {...register('consommation_mensuelle')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Énergie actuelle *
              </label>
              <select
                {...register('energie_actuelle')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              >
                <option value="">Sélectionnez...</option>
                {energies.map((e) => (
                  <option key={e.value} value={e.value}>{e.label}</option>
                ))}
              </select>
              {errors.energie_actuelle && (
                <p className="text-red-500 text-xs mt-1">{errors.energie_actuelle.message}</p>
              )}
            </div>

            <button type="button" onClick={handleNext} className="btn-primary w-full justify-center mt-2">
              Continuer <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2 — Situation */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Revenu Fiscal de Référence (RFR) *
              </label>
              <select
                {...register('rfr')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              >
                <option value="">Sélectionnez votre tranche...</option>
                {rfrTranches.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {errors.rfr && (
                <p className="text-red-500 text-xs mt-1">{errors.rfr.message}</p>
              )}
              <p className="text-xs text-slate-500 mt-1">
                Visible sur votre avis d&apos;imposition, ligne &quot;Revenu fiscal de référence&quot;
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Nombre de parts fiscales *
              </label>
              <select
                {...register('parts_fiscales')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              >
                <option value="">Sélectionnez...</option>
                {['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5+'].map((p) => (
                  <option key={p} value={p}>{p} part{parseFloat(p) > 1 ? 's' : ''}</option>
                ))}
              </select>
              {errors.parts_fiscales && (
                <p className="text-red-500 text-xs mt-1">{errors.parts_fiscales.message}</p>
              )}
            </div>

            {watchProduit === 'photovoltaique' && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <p className="text-sm font-bold text-amber-800 mb-1">
                  Aide Toulouse Métropole disponible
                </p>
                <p className="text-xs text-amber-700">
                  Le photovoltaïque est éligible à une aide de 25% du HT via Toulouse Métropole (sous conditions d&apos;éligibilité géographique). Nous vérifions votre éligibilité gratuitement.
                </p>
              </div>
            )}

            {watchProduit && watchProduit !== 'photovoltaique' && (
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                <p className="text-sm font-bold text-blue-800 mb-1">
                  Aides MaPrimeRénov&apos; + CEE disponibles
                </p>
                <p className="text-xs text-blue-700">
                  Vous pouvez bénéficier de MaPrimeRénov&apos; et des CEE. Green Confort avance les fonds et monte l&apos;intégralité de vos dossiers.
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-outline-navy flex-1 justify-center"
              >
                <ChevronLeft className="w-4 h-4" /> Retour
              </button>
              <button type="button" onClick={handleNext} className="btn-primary flex-1 justify-center">
                Continuer <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Coordonnées */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom *</label>
                <input
                  type="text"
                  placeholder="Marie"
                  {...register('prenom')}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
                />
                {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nom *</label>
                <input
                  type="text"
                  placeholder="Dupont"
                  {...register('nom')}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
                />
                {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone *</label>
              <input
                type="tel"
                placeholder="06 12 34 56 78"
                {...register('telephone')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              />
              {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Ville *</label>
              <input
                type="text"
                placeholder="Toulouse"
                {...register('ville')}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-solar-orange transition-colors"
              />
              {errors.ville && <p className="text-red-500 text-xs mt-1">{errors.ville.message}</p>}
            </div>

            {submitError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{submitError}</p>
              </div>
            )}

            <p className="text-xs text-slate-500">
              En soumettant ce formulaire, vous acceptez d&apos;être recontacté par Pro Rénov Occitanie.
              Vos données sont traitées conformément à notre{' '}
              <a href="/politique-confidentialite" className="text-solar-orange underline">
                politique de confidentialité
              </a>.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-outline-navy flex-1 justify-center"
              >
                <ChevronLeft className="w-4 h-4" /> Retour
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Recevoir mon étude gratuite
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
