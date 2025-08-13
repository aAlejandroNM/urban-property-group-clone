import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { firstName, lastName, email, phone, enquiryType, country, postcode, message } = body;

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'adria.alejandrito2077@gmail.com',
    subject: `Nuevo contacto: ${enquiryType || 'General'}`,
    html: `<p>Nombre: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Teléfono: ${phone}</p>
           <p>País: ${country}</p>
           <p>Código Postal: ${postcode}</p>
           <p>Mensaje: ${message}</p>`
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
