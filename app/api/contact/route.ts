import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    console.log("API /contact called");

    const apiKey = process.env.RESEND_API_KEY;
    console.log("API KEY exists:", !!apiKey);

    if (!apiKey) {
      return new Response("Missing Resend API key", { status: 500 });
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    console.log("Body received:", body);

    const { name, company, email, message } = body;

    if (!email || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const result = await resend.emails.send({
      from: "contact@28devs.com",
      to: ["28devs23@gmail.com"],
      replyTo: email,
      subject: `New contact from ${name || "Unknown"}`,
      html: `<p>${message}</p>`,
    });

    console.log("Resend result:", result);

    return Response.json({ success: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
