"use client";

import { useState } from "react";
import Image from "next/image";

export default function NuestrosServicios() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const servicios = [
    {
      titulo: "Gestión ambiental",
      color: "bg-[#243606]",
      colorTexto: "text-white",
      texto:
        "Brindamos asesoramiento integral para garantizar el cumplimiento de la normativa ambiental y promover prácticas sostenibles que reduzcan el impacto ambiental de cada actividad.",
      lista: [
        "Impacto Ambiental (CAA, EIA, AA)",
        "Gestión, declaraciones juradas y asesoramiento integral de los residuos",
        "Efluentes Gaseosos (LEGA, REF)",
        "Efluentes Líquidos (ADA, AySA, ACUMAR)",
        "Contaminación Acústica (RAC, Ruidos molestos)",
        "Pasivos ambientales (FASE I y FASE II)",
        "Sistemas de gestión",
        "Asesoramiento legal ambiental",
        "Seguimiento de expedientes, respuesta ante inspecciones y/o notificaciones pendientes, etc.",
      ],
      imagen: "/servicios1.svg",
      imagenDerecha: true,
    },
    {
      titulo: "Higiene y seguridad en el trabajo",
      color: "bg-[#7F8000]",
      colorTexto: "text-white",
      texto:
        "Implementamos medidas preventivas y programas de seguridad para proteger la salud de los trabajadores y optimizar las condiciones laborales.",
      lista: [
        "Realización de estudios",
        "Relevamientos generales",
        "Respuesta a emergencias",
        "Capacitaciones",
        "Sistemas de Autoprotección (SAP)",
        "Construcción",
      ],
      imagen: "/servicios2.svg",
      imagenDerecha: false,
    },
    {
      titulo: "Laboratorio",
      color: "bg-[#E5E6CC]",
      colorTexto: "text-[#243606]",
      texto:
        "Realizamos controles y análisis periódicos del aire, agua, suelo y ruido, asegurando el seguimiento constante de los parámetros ambientales.",
      lista: [
        "Monitoreos y análisis de agua",
        "Monitoreos y análisis de suelo",
        "Monitoreos y análisis de aire",
      ],
      imagen: "/servicios3.svg",
      imagenDerecha: true,
    },
  ];

  const expandedStates = [expanded1, expanded2, expanded3];
  const setExpandedStates = [setExpanded1, setExpanded2, setExpanded3];

  return (
    <section
      id="servicios"
      className="py-20 px-6 sm:px-10 bg-white overflow-hidden"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-14 text-balance text-[#243606] text-center">
        Nuestros servicios
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        {servicios.map((serv, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-stretch justify-between gap-4 ${
              !serv.imagenDerecha ? "md:flex-row-reverse" : ""
            }`}
          >
            <ServicioBloque
              expanded={expandedStates[i]}
              setExpanded={setExpandedStates[i]}
              titulo={serv.titulo}
              texto={serv.texto}
              lista={serv.lista}
              imagen={serv.imagen}
              color={serv.color}
              colorTexto={serv.colorTexto}
              imagenDerecha={serv.imagenDerecha}
              esSegundo={i === 1}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-14">
        <a
          href="/brochure.pdf"
          download
          className="w-fit bg-[#F6B317] hover:bg-[#d99410] text-foreground rounded-full py-5 px-14 text-[1.1rem] font-semibold transition-colors duration-200"
        >
          Descargar Brochure Completo
        </a>
      </div>
    </section>
  );
}

function ServicioBloque({
  expanded,
  setExpanded,
  titulo,
  texto,
  lista,
  imagen,
  color,
  colorTexto,
  imagenDerecha,
}: any) {
  return (
    <>
      <div
        className={`
          ${color} rounded-[2rem] p-13
          relative z-20 flex flex-col md:flex-row transition-all duration-500 ease-out
          ${
            expanded
              ? "md:w-full md:h-[520px]"
              : "md:w-[60%] max-w-[470px] h-[420px] sm:h-[520px]"
          }
        `}
      >
        {/* CONTENIDO PRINCIPAL */}
        <div
          className={`
            flex flex-col transition-all duration-500 ease-out
            ${
              expanded
                ? "w-full md:w-[35%] md:justify-start text-left"
                : "w-full justify-end text-left"
            }
            relative z-20
          `}
        >
          <h2
            className={`${colorTexto} text-xl sm:text-2xl lg:text-3xl font-bold mb-4`}
          >
            {titulo}
          </h2>
          <p
            className={`${colorTexto} text-base sm:text-lg lg:text-[1.15rem] mb-6 leading-relaxed`}
          >
            {texto}
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-fit bg-[#F6B317] hover:bg-[#d99410] text-foreground rounded-full py-3 px-10 text-sm font-semibold transition-colors duration-200"
          >
            {expanded ? "- INFO" : "+ INFO"}
          </button>
        </div>

        {/* CONTENIDO EXPANDIDO */}
        {expanded && (
          <div
            className={`
              md:w-[65%] flex flex-col justify-start p-6
              transition-all duration-500 ease-out
            `}
          >
            <ul className="text-base sm:text-lg leading-relaxed space-y-2 list-disc pl-5">
              {lista.map((item: string, idx: number) => (
                <li className={`${colorTexto}`} key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* IMAGEN */}
      <div
        className={`
          relative rounded-[2rem] overflow-hidden transition-all duration-500 ease-out
          ${
            expanded
              ? "opacity-0 md:w-0 md:absolute"
              : "w-full md:w-[60%] h-[420px] sm:h-[520px]"
          }
          ${!imagenDerecha ? "md:order-1" : ""}
        `}
      >
        {!expanded && (
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </>
  );
}

