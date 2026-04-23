import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.json();
    const { fullName, phone, email, position, experience, message } = formData;

    if (!fullName || !email || !position || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: process.env.EMAIL_PORT || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'your-receiving-email@example.com',
      subject: `New Career Application: ${position}`,
      html: `
        <h1>New Career Application</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position Applied:</strong> ${position}</p>
        <p><strong>Years of Experience:</strong> ${experience || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Career form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending career form email:', error);
    return NextResponse.json({ message: 'Failed to submit career form' }, { status: 500 });
  }
}
