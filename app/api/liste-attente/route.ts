import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@supabase/supabase-js'

const listeAttenteSchema = z.object({
  prenom: z.string().min(2),
  email: z.string().email(),
  telephone: z.string().min(10),
  situation: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = listeAttenteSchema.parse(body)

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
      const supabase = createClient(supabaseUrl, supabaseKey)

      const { error } = await supabase.from('liste_attente_formation').insert({
        ...data,
        created_at: new Date().toISOString(),
      })

      if (error) {
        console.error('Supabase error:', error)
      }
    }

    // Send notification
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Pro Rénov Occitanie <notifications@prorenov-occitanie.fr>',
          to: ['gauthier@prorenov-occitanie.fr'],
          subject: `Inscription liste d'attente formation - ${data.prenom}`,
          html: `
            <h2>Nouvelle inscription liste d'attente formation</h2>
            <p><strong>Prénom :</strong> ${data.prenom}</p>
            <p><strong>Email :</strong> ${data.email}</p>
            <p><strong>Téléphone :</strong> ${data.telephone}</p>
            <p><strong>Situation :</strong> ${data.situation}</p>
            <p><strong>Message :</strong> ${data.message || 'Aucun'}</p>
          `,
        }),
      }).catch(console.error)
    }

    return NextResponse.json(
      { success: true, message: 'Inscription réussie' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Erreur interne' },
      { status: 500 }
    )
  }
}
