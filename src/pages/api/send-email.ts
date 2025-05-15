import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

//export async function POST({ request }: { request: Request }) {
export const POST: APIRoute = async ({ request }) => {
try {
    console.log('Request received');
    const body = await request.json();
  const { name, email, message } = body;
  
      // Verificación: ¿la API key está cargada?
    if (!import.meta.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY no está definida');
      return new Response(JSON.stringify({ error: 'Falta la API key de Resend' }), { status: 500 });
    }

    // const { data, error } = await resend.emails.send({
    //   from: 'Tu Sitio <tu-correo@tudominio.com>',
    //   to: ['delivered@resend.dev'],
    //   subject: `Nuevo mensaje para espanol con lady de ${name}`,
    //   replyTo: email,
    //   text: message,
    // });

    // if (error) {
    //   console.error('Error al enviar con Resend:', error);
    //   return new Response(JSON.stringify({
    //     success: false,
    //     message: "Hubo un problema al enviar el correo. Inténtalo de nuevo.",
    //     details: error.message
    //   }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    // }

    // return new Response(JSON.stringify({
    //   success: true,
    //   message: "¡Correo enviado con éxito! Gracias por contactarnos.",
    //   data,
    //   }), {
    //     status: 200,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    //   } catch (err) {
    //     console.error('Error al enviar correo:', err);
    //   return new Response(JSON.stringify({ error: 'error al enviar'  }), {
    //     status: 500,
  //   });
      const response = await resend.emails.send({
      from: 'Espanol con Lady <noreply@aprender.labotaviajera.com>',
      to: 'profelady@aprender.labotaviajera.com',
      subject: `Nuevo mensaje para la profe lady de ${name}`,
      html: `
        <h3>Nuevo mensaje desde el sitio web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `,
    });

    // Verifica respuesta de Resend
    if (response.error) {
      console.error('Error de Resend:', response.error);
      return new Response(JSON.stringify({ error: response.error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('❌ Error inesperado:', err);
    return new Response(JSON.stringify({ error: 'Error interno en el servidor' }), { status: 500 });
  
  }
}
