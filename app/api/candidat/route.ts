import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'

// ── Adresse email de destination pour les notifications ──────────────────────
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'gauthier@prorenov-occitanie.fr'

const candidatSchema = z.object({
  prenom: z.string().min(2),
  nom: z.string().min(2),
  age: z.number().min(18).max(65),
  ville: z.string().min(2),
  situation: z.enum(['salarie', 'demandeur_emploi', 'etudiant', 'independant', 'autre']),
  motivation: z.string().min(10),
  disponibilite: z.enum(['immediate', '1_mois', '2_mois']),
  telephone: z.string().min(10),
  email: z.string().email(),
  acceptation_conditions: z.boolean(),
})

async function sendCandidatEmail(data: z.infer<typeof candidatSchema>) {
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) return

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Pro Rénov Occitanie <notifications@prorenov-occitanie.fr>',
        to: [NOTIFICATION_EMAIL],
        subject: `[Pro Rénov] Nouveau candidat AA — ${data.prenom} ${data.nom}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1E3A5F, #2D5A8E); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: #FFFFFF; margin: 0; font-size: 20px;">🤝 Nouveau candidat Apporteur d'Affaires</h2>
              <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Pro Rénov Occitanie</p>
            </div>
            <div style="background: #F8FAFF; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #E2E8F0; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569; width: 40%;">👤 Nom</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 700;">${data.prenom} ${data.nom}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">🎂 Âge</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.age} ans</td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📍 Ville</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.ville}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📞 Téléphone</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;"><a href="tel:${data.telephone}" style="color: #F97316; font-weight: 700;">${data.telephone}</a></td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📧 Email</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;"><a href="mailto:${data.email}" style="color: #F97316;">${data.email}</a></td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">💼 Situation</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.situation}</td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📅 Disponibilité</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">${data.disponibilite}</td></tr>
                <tr><td style="padding: 10px 12px; font-weight: 600; color: #475569; vertical-align: top;">💬 Motivation</td><td style="padding: 10px 12px; color: #0F172A; font-style: italic;">${data.motivation}</td></tr>
              </table>
              <p style="color: #94A3B8; font-size: 12px; margin-top: 20px; text-align: right;">
                Reçu le ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        `,
      }),
    })
  } catch (error) {
    console.error('Failed to send candidat email:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = candidatSchema.parse(body)

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error } = await supabase.from('candidats_aa').insert({
        ...data,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error('Supabase error:', error)
      }
    }

    await sendCandidatEmail(data)

    return NextResponse.json(
      { success: true, message: 'Candidature reçue avec succès' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('API error:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
