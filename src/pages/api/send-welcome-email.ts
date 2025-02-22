import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email } = req.body;

  try {
    // Send welcome email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Ny medlemsregistrering - Fjärilspartiet',
      text: `
Ny medlem har registrerat sig:
Namn: ${name}
Email: ${email}
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
