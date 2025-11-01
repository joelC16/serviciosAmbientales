import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
    return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
  <div className="container mx-auto px-6 py-6">
    <div className="flex items-center justify-between isolate">
      <Link href="/" className="text-2xl font-bold w-36 mix-blend-difference">
        <Image src="/logo.png" width={50} height={50} alt="Logo de Servicios Ambientales" />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-[1.1rem] mix-blend-difference">
        <Link href="/" className="transition-colors">Inicio</Link>
        <Link href="/nosotros" className="transition-colors">Nosotros</Link>
        <Link href="/servicios" className="transition-colors">Servicios</Link>
      </div>

      <Button asChild className="bg-[#E5E6CC] text-foreground hover:bg-white/90 rounded-full px-8 w-36 text-[1.15rem] py-5 pb-6">
        <Link href="/contacto">Contacto</Link>
      </Button>
    </div>
  </div>
</nav>


    )
}
