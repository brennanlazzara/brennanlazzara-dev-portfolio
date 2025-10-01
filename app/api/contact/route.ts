import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend")
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "Portfolio <noreply@brennanlazzara.dev>",
        to: "brennan@brennanlazzara.dev",
        replyTo: data.email,
        subject: `${data.subject} - from ${data.name}`,
        text: `From: ${data.name} (${data.email})\n\nSubject: ${data.subject}\n\n${data.message}`,
        html: `
          <div>
            <p><strong>From:</strong> ${data.name} (${data.email})</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      })
    } else {
      // Fallback: log to console if API key not configured
      console.log("Contact form submission (no RESEND_API_KEY):", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("Contact form error:", e)
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 })
  }
}
