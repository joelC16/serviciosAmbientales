import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Handshake, Search, Award, Zap, Leaf } from "lucide-react"
import Image from "next/image"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1  className="text-5xl md:text-6xl font-bold mb-4 text-balance text-[#243606]">Sobre Nosotras</h1>
            <p className="text-[1.45rem] mb-8 text-[#505E38]">Revelando nuestra identidad, visión y valores</p>

            <div className="space-y-6 text-center leading-relaxed">
              <p className="text-[1.2rem] text-[#505E38]">
                SSAS - Servicios Ambientales es una empresa con base en CABA y Provincia de Buenos Aires que brinda
                soluciones integrales en materia ambiental, higiene y seguridad laboral, y monitoreos a través de
                laboratorio habilitado.
              </p>

              <p className="text-[1.2rem] text-[#505E38]">
                Nace con el objetivo de acompañar a empresas, industrias y organizaciones en el cumplimiento normativo y
                la mejora continua de sus procesos, ayudándolas a reducir su impacto ambiental y optimizar sus
                condiciones operativas. Trabajamos con compromiso, cercanía y profesionalismo, porque creemos que cuidar
                el ambiente también es una forma de cuidar el futuro de cada negocio.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        {/* Mission & Vision Section */}
        <section className="relative px-4 sm:px-6 lg:pb-24 pt-32 sm:pt-24 lg:pt-52">
          <div className="max-w-7xl mx-auto relative">

            {/* Bloque verde */}
            <div
              className="
        w-full max-w-6xl mx-auto 
        px-4 sm:px-6 
        lg:absolute lg:-top-[8rem] lg:left-1/2 lg:-translate-x-1/2 
        z-20 
        transition-all
      "
            >
              <div
                className="
          bg-[#243606] 
          rounded-[5rem] sm:rounded-[7rem] 
          px-6 sm:px-10 lg:px-16 py-6 sm:py-10 
          shadow-2xl 
          text-white
          flex flex-col items-center justify-center
        "
              >
                <div
                  className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 
            gap-6 
            text-center items-center justify-center
          "
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Image src="/emojiConfianza.png" width={70} height={70} alt="Confianza" className="w-12 sm:w-16 h-auto" />
                    <p className="text-sm sm:text-base font-medium">Confianza</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Image src="/emojiTransparencia.png" width={70} height={70} alt="Transparencia" className="w-12 sm:w-16 h-auto" />
                    <p className="text-sm sm:text-base font-medium">Transparencia</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Image src="/emojiCalidad.png" width={60} height={60} alt="Calidad" className="w-11 sm:w-14 h-auto" />
                    <p className="text-sm sm:text-base font-medium">Calidad</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Image src="/emojiEficiencia.png" width={70} height={70} alt="Eficiencia" className="w-12 sm:w-16 h-auto" />
                    <p className="text-sm sm:text-base font-medium">Eficiencia</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <Image src="/emojiResponsabilidadAmbiental.png" width={90} height={90} alt="Responsabilidad ambiental" className="w-14 sm:w-20 h-auto" />
                    <p className="text-sm sm:text-base font-medium text-center leading-tight">
                      Responsabilidad ambiental
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque beige */}
            <div className="bg-[#E5E6CC] rounded-[1rem] sm:rounded-[3.5rem] p-10 sm:p-16 lg:py-40 lg:px-32 relative z-10 mt-6 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {/* Misión */}
                <div>
                  <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                    <Image src="/iconMision.png" width={125} height={125} alt="Misión" className="w-12 sm:w-16 h-auto" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3F3A34]">Misión</h2>
                  </div>
                  <div className="space-y-5 leading-relaxed text-center md:text-left">
                    <p className="text-[#3F3A34] text-base sm:text-lg lg:text-[1.2rem]">
                      Desarrollamos e implementamos soluciones innovadoras que permiten
                      optimizar los procesos productivos y minimizar el consumo de
                      recursos naturales,
                    </p>
                    <p className="text-[#3F3A34] text-base sm:text-lg lg:text-[1.2rem]">
                      contribuyendo así a una gestión más eficiente y sostenible.
                    </p>
                  </div>
                </div>

                {/* Visión */}
                <div>
                  <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                    <Image src="/iconVision.png" width={135} height={135} alt="Visión" className="w-12 sm:w-16 h-auto" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3F3A34]">Visión</h2>
                  </div>
                  <div className="space-y-5 leading-relaxed text-center md:text-left">
                    <p className="text-[#3F3A34] text-base sm:text-lg lg:text-[1.2rem]">
                      Ser referentes en soluciones ambientales innovadoras en Argentina,
                      acompañando a empresas y comunidades en la construcción de un
                      futuro sostenible, donde el desarrollo económico y la conservación
                      del medioambiente convivan en equilibrio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>






      </main>

    </div>
  )
}
