import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_jQwpJkMZ_ydKkG8ZvEN1XKpYbAn4eYXQM");
const POST = async ({ request }) => {
  try {
    console.log("Request received");
    const body = await request.json();
    const { name, email, message } = body;
    if (false) ;
    const response = await resend.emails.send({
      from: "🧑🏻‍🎓Espanol con Lady <noreply@aprender.labotaviajera.com>",
      to: "profelady@aprender.labotaviajera.com",
      subject: `EspanolConLady - mensaje para lady de ${name}`,
      html: `
        <h3>⚠️ Nuevo mensaje desde tu sitio web ⚠️</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br>${message}</p>
      `
    });
    if (response.error) {
      console.error("Error de Resend:", response.error);
      return new Response(JSON.stringify({ error: response.error.message }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Error inesperado:", err);
    return new Response(JSON.stringify({ error: "Error interno en el servidor" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
