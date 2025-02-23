import { serve } from "https://deno.land/std@0.181.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'
import { Resend } from 'https://esm.sh/resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

console.log("Edge function loaded and ready");

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Webhook triggered`);
  
  try {
    const payload = await req.json()
    console.log(`[${timestamp}] Received payload:`, payload);

    const { record } = payload;

    // Send welcome email
    console.log(`[${timestamp}] Sending welcome email to ${record.email}`);
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
    });

    // Send notification to admin
    console.log(`[${timestamp}] Sending admin notification`);
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
    });

    return new Response(JSON.stringify({ 
      success: true,
      timestamp,
      message: "Emails sent successfully" 
    }), {
      headers: { 
        ...corsHeaders,
        "Content-Type": "application/json" 
      }
    });
  } catch (error) {
    console.error(`[${timestamp}] Error:`, error);
    return new Response(JSON.stringify({ 
      error: error.message,
      timestamp 
    }), {
      status: 500,
      headers: { 
        ...corsHeaders,
        "Content-Type": "application/json" 
      }
    });
  }
});
