import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#243606] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">SASS - Servicios Ambientales. Todos los derechos reservados</p>
          <Link href="https://www.instagram.com/somosfractura_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <p className="text-sm">Diseñado por Fractura</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
