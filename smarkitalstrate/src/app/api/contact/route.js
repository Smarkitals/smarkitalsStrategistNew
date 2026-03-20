import nodemailer from 'nodemailer';

const LEAD_EMAIL_TO = process.env.CONTACT_LEAD_EMAIL || 'totaltaxsol@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body || {};

    const text = `Name: ${name ?? ''}\nPhone: ${phone ?? ''}\nEmail: ${email ?? ''}\nMessage: ${message ?? ''}`;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: LEAD_EMAIL_TO,
      replyTo: email,
      subject: 'New Lead – Smarkitals Website',
      text,
    });

    return new Response(JSON.stringify({ success: true, message: 'Email sent' }), {
      status: 200,
    });
  } catch (error) {
    console.error('API /api/contact Email Error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email' }),
      { status: 500 }
    );
  }
}

