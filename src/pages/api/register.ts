import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Initialize Resend
const resend = new Resend(process.env.RE_YOUR_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    // Insert into Supabase
    const { error: supabaseError } = await supabase
      .from('members')
      .insert([{ name, email, message: message || '' }]);

    if (supabaseError) {
      if (supabaseError.code === '23505') {
        return res.status(400).json({ 
          error: 'En medlem med denna e-postadress finns redan registrerad.' 
        });
      }
      throw supabaseError;
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Fjärilspartiet <onboarding@resend.dev>',
      to: email,
      subject: 'Välkommen till Fjärilspartiet!',
      text: `
Hej ${name}!

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
    await resend.emails.send({
      from: 'Fjärilspartiet <onboarding@resend.dev>',
      to: 'fjarilspartiet@gmail.com',
      subject: 'Ny medlemsregistrering - Fjärilspartiet',
      text: `
Ny medlem har registrerat sig:
Namn: ${name}
Email: ${email}
Meddelande: ${message || 'Inget meddelande'}
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Ett fel uppstod. Vänligen försök igen.' });
  }
}
