"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  const [showNav, setShowNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [bgGreen, setBgGreen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Si bajamos, ocultamos el nav
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false)
      } else {
        // Si subimos, mostramos nav y fondo verde
        setShowNav(true)
        if (currentScrollY > 50) {
          setBgGreen(true)
        } else {
          setBgGreen(false)
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${bgGreen ? "bg-[#2d4a1f]" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold w-36 text-white">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo de Servicios Ambientales"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[1.1rem] text-white">
          <Link href="/" className="transition-colors hover:text-[#e8a41f]">
            Inicio
          </Link>
          <Link href="/nosotros" className="transition-colors hover:text-[#e8a41f]">
            Nosotros
          </Link>
          <Link href="/servicios" className="transition-colors hover:text-[#e8a41f]">
            Servicios
          </Link>
        </div>

        <Button
          asChild
          className="bg-[#E5E6CC] text-foreground hover:bg-white/90 rounded-full px-8 w-36 text-[1.15rem] py-5 pb-6"
        >
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </nav>
  )
}
