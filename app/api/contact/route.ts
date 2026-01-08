import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, company, email, message } = await req.json();

  if (!email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  await resend.emails.send({
    from: "28devs <contact@28devs.com>",
    to: ["contact@28devs.com"],
    replyTo: email,
    subject: `New contact from ${name || "Unknown"}`,
    html: `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });

  return Response.json({ success: true });
}
