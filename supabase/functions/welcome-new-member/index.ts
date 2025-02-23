import { serve } from "https://deno.land/std@0.181.0/http/server.ts"
import { Resend } from 'https://esm.sh/resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

// Add initial log to verify function loads
console.log("Function loaded, RESEND_API_KEY present:", !!Deno.env.get('RESEND_API_KEY'))

serve(async (req) => {
  console.log("Function triggered")
  
  try {
    const payload = await req.json()
    console.log('Webhook payload:', JSON.stringify(payload, null, 2))

    const { record, type } = payload

    if (type !== 'INSERT') {
      console.log('Not an insert event, skipping')
      return new Response(JSON.stringify({ message: 'Not an insert event' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('Sending welcome email to:', record.email)

    try {
      const welcomeEmail = await resend.emails.send({
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
      console.log('Welcome email sent:', welcomeEmail);

      console.log('Attempting to send admin notification');
      // Send notification to admin
      const adminEmail = await resend.emails.send({
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
      console.log('Admin notification sent:', adminEmail);

    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      throw emailError;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
