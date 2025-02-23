import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

serve(async (req) => {
  const payload = await req.json()
  const { record, type } = payload

  // Only handle INSERT events
  if (type !== 'INSERT') {
    return new Response(JSON.stringify({ message: 'Not an insert event' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    // Send welcome email
    await resend.emails.send({
      from: 'Fjärilspartiet <onboarding@resend.dev>',
      to: record.email,
      subject: 'Välkommen till Fjärilspartiet!',
      text: `
Hej ${record.name}!

Välkommen till Fjärilspartiet! Vi är glada att ha dig med oss på vår resa mot ett mer hållbart och rättvist samhälle.

Som medlem kan du:
- Delta i våra digitala och fysiska möten
- Engagera dig i arbetsgrupper och projekt
- Bidra till partiets utveckling
- Ta del av vårt medlemsmaterial

Vi kommer snart att kontakta dig med mer information om aktuella aktiviteter och möjligheter till engagemang.

Under tiden är du välkommen att gå med i vår Discord-community: https://discord.gg/GxSxaYANU4

Har du frågor eller funderingar är du alltid välkommen att kontakta oss på fjarilspartiet@gmail.com.

Varma hälsningar,
Fjärilspartiet
      `
    })

    // Send notification to admin
    await resend.emails.send({
      from: 'Fjärilspartiet <onboarding@resend.dev>',
      to: 'fjarilspartiet@gmail.com',
      subject: 'Ny medlemsregistrering - Fjärilspartiet',
      text: `
Ny medlem har registrerat sig:
Namn: ${record.name}
Email: ${record.email}
Meddelande: ${record.message || 'Inget meddelande'}
      `
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
