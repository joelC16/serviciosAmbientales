import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Handshake, Search, Award, Zap, Leaf } from "lucide-react";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Header Section */}
        <section
          className="
    flex flex-col-reverse xl:flex-row
    items-center xl:items-end
    justify-center
    px-6 max-w-7xl mx-auto 
    pt-16 gap-12 md:gap-20 xl:gap-8
  "
        >
          {/* Imagen */}
          <div
            id="nosotros"
            className="relative w-full xl:w-[35%] flex justify-center xl:justify-end"
          >
            <div className="relative w-full max-w-[450px] xl:max-w-none h-[400px] sm:h-[480px] xl:h-[550px]">
              <Image
                src="/nosotrasAvatar.svg"
                alt="Nosotros"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Texto */}
          <div
            className="
      w-full xl:w-[65%]
      flex flex-col justify-center
      text-center xl:text-left
      xl:pb-12  /* 💡 separa el texto del borde inferior */
      xl:translate-y-[-20px] /* 💡 corrige el centrado visual */
    "
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#243606]">
              Sobre Nosotras
            </h1>
            <p className="text-lg sm:text-xl md:text-[1.45rem] mb-8 text-[#505E38]">
              Revelando nuestra identidad, visión y valores
            </p>

            <div className="space-y-6 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              <p className="text-base sm:text-lg text-[#505E38]">
                SSAS | Servicios Ambientales es una empresa que brinda
                soluciones integrales en materia ambiental, higiene y seguridad
                laboral, y monitoreos a través de laboratorio habilitado.
              </p>

              <p className="text-base sm:text-lg text-[#505E38]">
                Nace con el objetivo de acompañar a empresas, industrias y
                organizaciones en el cumplimiento normativo y la mejora continua
                de sus procesos, ayudándolas a reducir su impacto ambiental y
                optimizar sus condiciones operativas. Trabajamos con compromiso,
                cercanía y profesionalismo, porque creemos que cuidar el
                ambiente también es una forma de cuidar el futuro de cada
                negocio.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="">
          <div className="relative">
            {/* Bloque verde */}
            <div className="w-full">
              <div
                className="
      bg-[#243606]
      px-6 sm:px-10 lg:px-16 py-10
      shadow-2xl
      text-white
      flex flex-col items-center justify-center
    "
              >
                <div
                  className="
    flex flex-wrap justify-center items-center
    gap-16 sm:gap-18
    text-center
  "
                >
                  <div className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      <Image
                        src="/emojiConfianza.png"
                        alt="Confianza"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium">
                      Confianza
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      <Image
                        src="/emojiTransparencia.png"
                        alt="Transparencia"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium">
                      Transparencia
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      <Image
                        src="/emojiCalidad.png"
                        alt="Calidad"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium">Calidad</p>
                  </div>

                  <div className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      <Image
                        src="/emojiEficiencia.png"
                        alt="Eficiencia"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium">
                      Eficiencia
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-3 w-[100px] sm:w-[120px]">
                    <div className="w-15 h-15 sm:w-19 sm:h-19 flex items-center justify-center">
                      <Image
                        src="/emojiResponsabilidadAmbiental.png"
                        alt="Responsabilidad ambiental"
                        width={72}
                        height={72}
                        className="object-contain w-full h-full scale-110"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-center leading-tight mb-3">
                      Responsabilidad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloque beige */}
            <div className="bg-[#E5E6CC] p-10 sm:p-16 lg:py-40 lg:px-32">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                {/* Misión */}
                <div className="w-full lg:w-[49%]">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <Image
                      src="/iconMision.svg"
                      width={125}
                      height={125}
                      alt="Misión"
                      className="w-12 sm:w-16 h-auto"
                    />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3F3A34]">
                      Misión
                    </h2>
                  </div>
                  <div className="space-y-5 leading-relaxed text-center pb-10 lg:pb-0">
                    <p className="text-[#3F3A34] text-base sm:text-lg lg:text-[1.2rem] w-full">
                      Desarrollamos e implementamos soluciones innovadoras que
                      permiten optimizar los procesos productivos y minimizar el
                      consumo de recursos naturales, contribuyendo así a una
                      gestión más eficiente y sostenible.
                    </p>
                  </div>
                </div>

                {/* Línea divisoria (solo visible en desktop) */}
                <div className="hidden lg:block h-50 w-[2px] bg-black my-auto" />

                {/* Visión */}
                <div className="w-full lg:w-[49%]">
                  <div className="flex items-center gap-3 mb-6 justify-center">
                    <Image
                      src="/iconVision.svg"
                      width={135}
                      height={135}
                      alt="Visión"
                      className="w-12 sm:w-16 h-auto"
                    />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3F3A34]">
                      Visión
                    </h2>
                  </div>
                  <div className="space-y-5 leading-relaxed text-center">
                    <p className="text-[#3F3A34] text-base sm:text-lg lg:text-[1.2rem]">
                      Ser referentes en soluciones ambientales innovadoras en
                      Argentina, acompañando a empresas y comunidades en la
                      construcción de un futuro sostenible, donde el desarrollo
                      económico y la conservación del medioambiente convivan en
                      equilibrio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
