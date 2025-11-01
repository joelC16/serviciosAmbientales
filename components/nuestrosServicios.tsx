import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Handshake, Search, Award, Zap, Leaf } from "lucide-react"
import Image from "next/image"

export default function NuestrosServicios() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1">
                <section className="py-20 px-6 sm:px-10 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-14 text-balance text-[#243606] text-center">Nuestros servicios</h1>

                        <div className="flex flex-col gap-16">
                            {/* FILA 1 */}
                            <div className="flex flex-col md:flex-row items-stretch md:items-stretch justify-between gap-4">
                                {/* Bloque de texto */}
                                <div className="bg-[#243606] text-white rounded-[2rem] p-6 py-14 w-full md:w-[60%] max-w-[470px] flex flex-col justify-end gap-4">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Gestión ambiental</h2>
                                    <p className="text-base sm:text-lg lg:text-[1.2rem]">
                                        Brindamos asesoramiento integral para garantizar el cumplimiento de la normativa ambiental
                                        y promover prácticas sostenibles que reduzcan el impacto ambiental de cada actividad.
                                    </p>
                                </div>

                                {/* Imagen */}
                                <div className="relative rounded-[2rem] overflow-hidden w-full md:w-[60%] h-[420px] sm:h-[520px]">
                                    <Image
                                        src="/servicios1.png"
                                        alt="Gestión ambiental"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* FILA 2 - invertida */}
                            <div className="flex flex-col md:flex-row-reverse items-stretch md:items-stretch justify-between gap-4">
                                {/* Bloque de texto */}
                                <div className="bg-[#7F8000] text-white rounded-[2rem] p-6 py-14 w-full md:w-[60%] max-w-[470px] flex flex-col justify-end gap-4">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Higiene y seguridad en el trabajo</h2>
                                    <p className="text-base sm:text-lg lg:text-[1.2rem]">
                                        Implementamos medidas preventivas y programas de seguridad para proteger la salud de los trabajadores
                                        y optimizar las condiciones laborales.
                                    </p>
                                </div>

                                {/* Imagen */}
                                <div className="relative rounded-[2rem] overflow-hidden w-full md:w-[60%] h-[420px] sm:h-[520px]">
                                    <Image
                                        src="/servicios2.png"
                                        alt="Higiene y seguridad"

                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* FILA 3 */}
                            <div className="flex flex-col md:flex-row items-stretch md:items-stretch justify-between gap-4">
                                {/* Bloque de texto */}
                                <div className="bg-[#F6B317] text-white rounded-[2rem] p-6 py-14 w-full md:w-[60%] max-w-[470px] flex flex-col justify-end gap-4">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Monitoreo ambiental</h2>
                                    <p className="text-base sm:text-lg lg:text-[1.2rem]">
                                        Realizamos controles y análisis periódicos del aire, agua, suelo y ruido, asegurando el seguimiento constante de los parámetros ambientales.
                                    </p>
                                </div>

                                {/* Imagen */}
                                <div className="relative rounded-[2rem] overflow-hidden w-full md:w-[60%] h-[420px] sm:h-[520px]">
                                    <Image
                                        src="/servicios3.png"
                                        alt="Gestión ambiental"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* FILA 4 - invertida */}
                            <div className="flex flex-col md:flex-row-reverse items-stretch md:items-stretch justify-between gap-4">
                                {/* Bloque de texto */}
                                <div className="bg-[#E87522] text-white rounded-[2rem] p-6 py-14 w-full md:w-[60%] max-w-[470px] flex flex-col justify-end gap-4">
                                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Relevamientos generales</h2>
                                    <p className="text-base sm:text-lg lg:text-[1.2rem]">
                                        Llevamos a cabo diagnósticos técnicos y evaluaciones en campo que permiten conocer el estado actual de las instalaciones y planificar acciones de mejora.  
                                    </p>
                                </div>

                                {/* Imagen */}
                                <div className="relative rounded-[2rem] overflow-hidden w-full md:w-[60%] h-[420px] sm:h-[520px]">
                                    <Image
                                        src="/servicios4.png"
                                        alt="Higiene y seguridad"

                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>







            </main>

        </div>
    )
}
