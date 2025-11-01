import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MessageCircle, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-[#243606] text-center pb-14">Contacto</h1>

          <div className="grid md:grid-cols-2 gap-12 items-start md:items-center mb-12">
            {/* Left side - Contact info with green rounded box */}
            <div className="bg-[#243606] text-white rounded-3xl p-16 flex flex-col items-center justify-center min-h-[450px] h-full md:min-h-[500px]">
              <h2 className="text-4xl font-bold mb-16 text-center text-white">¡Contactanos!</h2>

              <div className="flex gap-8">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  {/* <MessageCircle className="w-14 h-14" strokeWidth={1.5} /> */}
                  <Image src="/iconWpp.png" width={55} height={55} alt="Wpp de servicios ambientales"></Image>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  {/* <Instagram className="w-14 h-14" strokeWidth={1.5} /> */}
                  <Image src="/iconIg.png" width={55} height={55} alt="Instagram de servicios ambientales"></Image>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  {/* <Linkedin className="w-14 h-14" strokeWidth={1.5} /> */}
                  <Image src="/iconLinkedin.png" width={55} height={55} alt="Wpp de servicios ambientales"></Image>
                </a>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[1.24rem] text-[#243606] mb-3">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b-2 border-foreground/30 bg-transparent py-3 focus:border-foreground focus:outline-none transition-colors text-[#243606]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-[1.24rem] text-[#243606]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b-2 border-foreground/30 bg-transparent py-3 focus:border-foreground focus:outline-none transition-colors text-[#243606]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-3 text-[1.24rem] text-[#243606]">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border-b-2 border-foreground/30 bg-transparent py-3 focus:border-foreground focus:outline-none transition-colors text-[#243606]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-[1.24rem] text-[#243606]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border-b-2 border-foreground/30 bg-transparent py-3 focus:border-foreground focus:outline-none transition-colors resize-none text-[#243606]"
                  placeholder=""
                />
              </div>

              <button className="w-full bg-[#F6B317] hover:bg-[#d99410] text-foreground rounded-full py-4 px-8 text-base font-semibold transition-colors mt-8">
                Quiero Asesoramiento
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
