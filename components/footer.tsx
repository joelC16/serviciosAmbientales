import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#E5E6CC] text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#243606]">
            SASS - Servicios Ambientales. Todos los derechos reservados
          </p>
          <Link
            href="https://www.instagram.com/somosfractura_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-[#243606]"
          >
            <p className="text-sm text-[#243606]">Diseñado por Fractura</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
