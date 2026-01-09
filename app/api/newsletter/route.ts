import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response("Missing API key", { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { name, email } = await req.json();

    if (!email) {
      return new Response("Missing email", { status: 400 });
    }

    await resend.emails.send({
      from: "28devs <contact@28devs.com>",
      to: ["28devs23@gmail.com"],
      replyTo: email,
      subject: "28devs – New newsletter subscription",
      html: `
        <h2>New newsletter subscription</h2>
        <p><strong>Name:</strong> ${name || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
      text: `
New newsletter subscription

Name: ${name || "-"}
Email: ${email}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("NEWSLETTER ERROR:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
