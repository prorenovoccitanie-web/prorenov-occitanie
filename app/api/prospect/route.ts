import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'

// ── Adresse email de destination pour les notifications ──────────────────────
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'gauthier@prorenov-occitanie.fr'

const prospectSchema = z.object({
  proprietaire: z.enum(['oui', 'non']),
  produit: z.string().min(1),
  consommation_mensuelle: z.string().optional(),
  energie_actuelle: z.string().min(1),
  rfr: z.string().min(1),
  parts_fiscales: z.string().min(1),
  prenom: z.string().min(2),
  nom: z.string().min(2),
  telephone: z.string().min(10),
  ville: z.string().min(2),
  source: z.string().optional(),
})

async function sendNotificationEmail(data: z.infer<typeof prospectSchema>) {
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
        subject: `[Pro Rénov] Nouveau lead client — ${data.prenom} ${data.nom}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1E3A5F, #2D5A8E); padding: 24px; border-radius: 12px 12px 0 0;">
              <h2 style="color: #FFFFFF; margin: 0; font-size: 20px;">🏠 Nouveau lead client</h2>
              <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 14px;">Pro Rénov Occitanie</p>
            </div>
            <div style="background: #F8FAFF; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #E2E8F0; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569; width: 40%;">👤 Nom</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 700;">${data.prenom} ${data.nom}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📞 Téléphone</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;"><a href="tel:${data.telephone}" style="color: #F97316; font-weight: 700;">${data.telephone}</a></td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📍 Ville</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.ville}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">⚡ Produit</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">${data.produit}</td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">🏠 Propriétaire</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.proprietaire}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">🔥 Énergie actuelle</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.energie_actuelle}</td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">💶 Conso. mensuelle</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.consommation_mensuelle ? data.consommation_mensuelle + ' €' : 'Non renseigné'}</td></tr>
                <tr><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">📊 RFR</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.rfr}</td></tr>
                <tr style="background: #FFFFFF;"><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #475569;">👨‍👩‍👧 Parts fiscales</td><td style="padding: 10px 12px; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${data.parts_fiscales}</td></tr>
                <tr><td style="padding: 10px 12px; font-weight: 600; color: #475569;">🌐 Source</td><td style="padding: 10px 12px; color: #0F172A;">${data.source || 'Non renseigné'}</td></tr>
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
    console.error('Failed to send notification email:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = prospectSchema.parse(body)

    // Save to Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error } = await supabase.from('prospects').insert({
        ...data,
        consommation_mensuelle: data.consommation_mensuelle
          ? parseInt(data.consommation_mensuelle)
          : null,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error('Supabase error:', error)
      }
    }

    // Send notification email
    await sendNotificationEmail(data)

    return NextResponse.json(
      { success: true, message: 'Demande reçue avec succès' },
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
