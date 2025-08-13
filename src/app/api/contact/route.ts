import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const url = "https://prod-16.northcentralus.logic.azure.com/workflows/f813afc0ca4b44fda7fb896f16241524/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=eor765_bm2JVL_5tAwdq50Q4_IQZxJWsQOiDX5BhzzM";

  const payload = {
    email: ["desarrollador1@doxasistemas.com"],
    copy: ["julian.moyano02@uptc.edu.co"],
    subject: "Azure Mail file",
    message: <p><strong>Hola,</strong></p><p>Este es un correo de prueba desde <em>Azure Logic Apps</em>.</p><p>Saludos,</p><p><b>El equipo de Azure</b></p>,
    attachments: [
      {
        name: "prueba.txt",
        contentType: "text/plain",
        ContentBytes: "SG9sYSBNdW5kbw0K" // Base64 de "Hola Mundo"
      }
    ]
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(Error HTTP ${response.status}: ${await response.text()});
    }

    const data = await response.json();
    console.log("Respuesta de Azure Logic App:", data);
    return data;
  } catch (error) {
    console.error("Error enviando correo:", error);
    throw error;
  }
}
