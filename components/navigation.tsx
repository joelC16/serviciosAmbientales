"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgGreen, setBgGreen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Bloquear scroll cuando el menú móvil esté abierto
  useEffect(() => {
    if (mobileOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  // Comportamiento solo desktop (>=750px)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Actualizamos el fondo SIEMPRE
      setBgGreen(currentScrollY > 50);

      if (window.innerWidth >= 750) {
        // Hacia abajo (y ya pasaste 50px): ocultar
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowNav(false);
        } else {
          // Hacia arriba o arriba de todo: mostrar
          setShowNav(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    const handleResize = () => {
      // Si bajás a móvil, que no quede “oculto”
      if (window.innerWidth < 750) setShowNav(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  const brandGreen = "#243606";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* ======= DESKTOP (>=750px) ======= */}
      <div
        className={`hidden min-[750px]:block transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: bgGreen ? "#2d4a1f" : "transparent" }}
      >
        <div className="relative container mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold w-36 text-white">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
          </Link>

          {/* LINKS */}
          <div className="flex items-center gap-10 text-[1.1rem] text-white absolute left-1/2 -translate-x-1/2">
            <a
              href="#inicio"
              className="w-20 transition-colors hover:text-[#e8a41f]"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="w-20 transition-colors hover:text-[#e8a41f]"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="w-20 transition-colors hover:text-[#e8a41f]"
            >
              Servicios
            </a>
          </div>

          {/* BOTÓN */}
          <Button
            asChild
            className="bg-[#E5E6CC] text-foreground hover:bg-white/90 rounded-full px-6 w-36 text-[1.03rem] font-bold py-5"
          >
            <a href="#contacto">Contacto</a>
          </Button>
        </div>
      </div>

      {/* ======= MOBILE (<750px) ======= */}
      <div className="block max-[749px]:block min-[750px]:hidden">
        {/* Barra superior móvil */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ backgroundColor: brandGreen }}
        >
          <Link href="/" className="w-36">
            <Image src="/logo.png" width={50} height={50} alt="Logo" />
          </Link>

          {/* Hamburguesa */}
          <button
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-[84%] max-w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-hidden={!mobileOpen}
        >
          {/* Franja con logo */}
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ backgroundColor: brandGreen }}
          >
            <Link
              href="/"
              className="w-36"
              onClick={() => setMobileOpen(false)}
            >
              <Image src="/logo.png" width={50} height={50} alt="Logo" />
            </Link>
            <button
              aria-label="Cerrar menú"
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="px-2 py-4">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#servicios", label: "Servicios" },
              { href: "#contacto", label: "Contacto" },
            ].map((item, i, arr) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-4 text-lg font-medium ${
                  i < arr.length - 1 ? "border-b" : ""
                }`}
                style={{ color: brandGreen, borderColor: "#e5e7eb" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </nav>
  );
}
