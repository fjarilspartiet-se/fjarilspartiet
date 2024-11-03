import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  try {
    // Send email using Node's built-in mail capabilities
    const nodemailer = require('nodemailer');

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'bjorn.kenneth.holmstrom@gmail.com',
      subject: `[Fjärilspartiet Medlemsansökan] Ny ansökan från ${name}`,
      text: `
        Namn: ${name}
        Email: ${email}
        Meddelande: ${message || 'Ingen extra information angiven.'}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Medlemsansökan skickad!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Ett fel uppstod vid skickandet av ansökan.' });
  }
}
