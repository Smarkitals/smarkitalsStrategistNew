// app/api/contactForm/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, service, message } = body;

    const  text = `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service Required: ${service}
Message:
${message}
      `;
      console.log(text);

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      bcc: 'agrim.smarkitals@gmail.com',
      subject: `New Contact Inquiry - ${service}`,
      text: `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service Required: ${service}
Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent' }), {
      status: 200,
    });
  } catch (error) {
    console.error('API Email Error:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
