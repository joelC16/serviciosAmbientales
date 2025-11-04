import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // a quién llega
      subject: subject || "Nuevo mensaje de contacto",
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        Mensaje:
        ${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Error enviando el correo:", error)
    return new Response(JSON.stringify({ success: false }), { status: 500 })
  }
}
