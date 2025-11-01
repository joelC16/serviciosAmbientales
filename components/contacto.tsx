import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="relative flex-1 py-16 px-4 sm:px-6">
        <Image
          className="absolute inset-0 object-cover object-center"
          src={"/imgContacto.jpg"}
          fill
          alt="Imagen de contacto"
        />

        <div className="container mx-auto max-w-7xl relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white text-center pb-10 sm:pb-14">
            Contacto
          </h1>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch mb-12">
            {/* Bloque verde */}
            <div className="flex-1 bg-[#7F8000] text-white rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                ¡Contactanos!
              </h2>

              <a
                href="mailto:sambientales.arg@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/iconEmail.svg"
                  width={55}
                  height={55}
                  alt="Email"
                />
              </a>

              <p className="text-lg sm:text-xl font-bold my-8 text-center">
                sambientales.arg@gmail.com
              </p>

              <div className="flex gap-6 sm:gap-8 flex-wrap justify-center">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconWpp.png" width={50} height={50} alt="WhatsApp" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconIg.png" width={50} height={50} alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconLinkedin.png" width={50} height={50} alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="flex-1 space-y-8 bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
              <div>
                <label className="block text-[1.1rem] sm:text-[1.24rem] text-[#243606] mb-3">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-3 focus:border-[#243606] focus:outline-none text-[#243606]"
                />
              </div>

              <div>
                <label className="block text-[1.1rem] sm:text-[1.24rem] text-[#243606] mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-3 focus:border-[#243606] focus:outline-none text-[#243606]"
                />
              </div>

              <div>
                <label className="block text-[1.1rem] sm:text-[1.24rem] text-[#243606] mb-3">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-3 focus:border-[#243606] focus:outline-none text-[#243606]"
                />
              </div>

              <div>
                <label className="block text-[1.1rem] sm:text-[1.24rem] text-[#243606] mb-3">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-3 focus:border-[#243606] focus:outline-none resize-none text-[#243606]"
                />
              </div>

              <button className="w-full bg-[#F6B317] hover:bg-[#d99410] text-[#243606] rounded-full py-4 px-8 text-base font-semibold transition-colors mt-8">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

