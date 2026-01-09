import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return new Response("Server misconfiguration", { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { name, company, email, message } = await req.json();

    if (!email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    await resend.emails.send({
      // 1️⃣ Nombre + dominio verificado
      from: "28devs <contact@28devs.com>",

      // 2️⃣ Envío directo a Gmail (ok para MVP)
      to: ["28devs23@gmail.com"],

      // 3️⃣ Reply real al usuario
      replyTo: email,

      // 4️⃣ Asunto menos genérico (MUY importante)
      subject: `28devs – Message from ${name || email}`,

      // 5️⃣ HTML con contexto (no solo un <p>)
      html: `
        <h2>New contact message</h2>

        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,

      // 6️⃣ TEXTO PLANO (CLAVE para Gmail)
      text: `
New contact message

Name: ${name || "-"}
Company: ${company || "-"}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
