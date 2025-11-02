import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="relative flex-1 py-12 px-2 sm:py-14 sm:px-4">
        {/* Imagen de fondo */}
        <Image
          className="absolute inset-0 object-cover object-center"
          src={"/imgContacto.jpg"}
          fill
          alt="Imagen de contacto"
        />

        <div className="container mx-auto max-w-7xl relative">
          <h1 className="text-2.5xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 text-white text-center">
            Contacto
          </h1>

          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-14 items-stretch mb-8 sm:mb-10">
            {/* Bloque verde */}
            <div className="flex-1 bg-[#7F8000] text-white rounded-3xl p-5 sm:p-7 md:p-14 flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 text-center">
                ¡Contactanos!
              </h2>

              <a
                href="mailto:sambientales.arg@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                <Image src="/iconEmail.svg" width={40} height={40} alt="Email" />
              </a>

              <p className="text-base sm:text-lg font-bold my-4 sm:my-6 text-center">
                sambientales.arg@gmail.com
              </p>

              <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconWpp.png" width={40} height={40} alt="WhatsApp" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconIg.png" width={40} height={40} alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/iconLinkedin.png" width={40} height={40} alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="flex-1 space-y-5 sm:space-y-6 bg-white rounded-3xl p-5 sm:p-7 md:p-10 shadow-lg">
              {["Nombre y Apellido", "Email", "Asunto"].map((label) => (
                <div key={label}>
                  <label className="block text-sm sm:text-[1rem] text-[#243606] mb-2">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-[#243606]/30 bg-transparent py-2 focus:border-[#243606] focus:outline-none text-[#243606]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm sm:text-[1rem] text-[#243606] mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full border-b-2 border-[#243606]/30 bg-transparent py-2 focus:border-[#243606] focus:outline-none resize-none text-[#243606]"
                />
              </div>

              <button className="w-full bg-[#F6B317] hover:bg-[#d99410] text-[#243606] rounded-full py-3 px-6 text-base font-semibold transition-colors mt-5">
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



