"use client"
import { useState } from "react"
import Image from "next/image"
import { Footer } from "./footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Enviando...")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("✅ Mensaje enviado con éxito")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("❌ Error al enviar el mensaje")
      }
    } catch (error) {
      console.error(error)
      setStatus("⚠️ No se pudo enviar el correo")
    }
  }

  return (
    <div id="contacto" className="min-h-screen flex flex-col bg-background relative">
      <main className="relative flex-1 py-12 px-2 sm:py-14 sm:px-4">
        <Image
          className="absolute inset-0 object-cover object-center"
          src={"/imgContacto.jpg"}
          fill
          alt="Imagen de contacto"
        />

        <div className="container mx-auto max-w-7xl relative">
          <h1 className="text-5xl font-bold mb-8 text-white text-center">Contacto</h1>

          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            {/* Bloque verde */}
            <div className="flex-1 bg-[#7F8000] text-white rounded-3xl p-10 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold mb-6 text-center">¡Contactanos!</h2>

              <a href="mailto:sambientales.arg@gmail.com" className="hover:opacity-80 transition-opacity">
                <Image src="/iconEmail.svg" width={40} height={40} alt="Email" />
              </a>

              <p className="text-lg font-bold my-6 text-center">
                sambientales.arg@gmail.com
              </p>

              <div className="flex gap-6 justify-center">
                <a href="https://api.whatsapp.com/message/OR6EH2233ZJGE1?autoload=1&app_absent=0" target="_blank">
                  <Image src="/iconWpp.png" width={40} height={40} alt="WhatsApp" />
                </a>
                <a href="https://www.instagram.com/ssas.serviciosambientales/" target="_blank">
                  <Image src="/iconIg.png" width={40} height={40} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/ssas-servicios-ambientales/?originalSubdomain=ar" target="_blank">
                  <Image src="/iconLinkedin.png" width={40} height={40} alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 space-y-6 bg-white rounded-3xl p-10 shadow-lg"
            >
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label className="block text-[#243606] mb-2">
                    {field === "name"
                      ? "Nombre y Apellido"
                      : field === "email"
                      ? "Email"
                      : "Asunto"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full border-b-2 border-[#243606]/30 bg-transparent py-2 focus:border-[#243606] focus:outline-none text-[#243606]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[#243606] mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-2 focus:border-[#243606] focus:outline-none resize-none text-[#243606]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F6B317] hover:bg-[#d99410] text-[#243606] rounded-full py-3 px-6 text-base font-semibold transition-colors"
              >
                Enviar
              </button>

              {status && <p className="text-center mt-3 text-[#243606]">{status}</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
