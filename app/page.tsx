import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Nosotros from "@/components/nosotros";
import NuestrosServicios from "@/components/nuestrosServicios";
import Contacto from "@/components/contacto";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url(/fondoHeader.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-8 flex flex-row items-center justify-center">
            <div className="relative w-[80%] sm:w-2/3 lg:w-[45%] h-55">
              <Image
                src={"/logoHeader.svg"}
                fill
                alt="Logo de servicios ambientales"
              ></Image>
            </div>
          </div>

          <p className="text-[1.05rem] md:text-[1.30rem] mb-3 mx-auto text-pretty leading-relaxed font-bold">
            GESTIÓN AMBIENTAL <span className="px-6">|</span> HIGIENE Y
            SEGURIDAD <span className="px-6">|</span> LABORATORIO
          </p>
          <p className="text-[1.2rem] md:text-[1.30rem] mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprometidos con un futuro sostenible
          </p>

          {/* <Button
            asChild
            size="lg"
            className="bg-[#E5E6CC] text-foreground hover:bg-white/90 rounded-full px-10 py-8 text-[1.15rem]"
          >
            <Link href="/contacto">Quiero Asesoramiento</Link>
          </Button> */}
        </div>
      </section>
      <section className="relative min-h-screen flex-col items-center justify-center">
        <Nosotros></Nosotros>
        <NuestrosServicios></NuestrosServicios>
        <Contacto></Contacto>
      </section>
    </div>
  );
}
