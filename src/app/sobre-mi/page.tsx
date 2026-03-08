'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function SobreMiPage() {
  // 1. ESTADOS (Misma lógica que el Maestro)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 scroll-smooth flex flex-col">
      
      {/* 1. CABECERA (Header idéntico al Maestro con Menú Descendente) */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto relative">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer z-[110]">
            <Image src="/logo.png" alt="Nodal.io" width={40} height={40} className="rounded-lg" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">NODAL<span className="text-blue-500">.IO</span></span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">Solutions</span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Link href="/#inicio" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link href="/#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="/#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
            <Link href="/sobre-mi" className="text-blue-500 transition-colors">Sobre Mi</Link>
          </div>

          <div className="flex items-center gap-4 z-[110]">
            <Link href="/contacto" className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all text-center">
              CONTACTO
            </Link>

            {/* Botón Hamburguesa */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL: TARJETA TRANSPARENTE QUE BAJA DESDE EL TOP */}
        <div className={`absolute top-full left-0 w-full p-4 transition-all duration-500 ease-in-out z-[105] md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}`}>
          <div className="bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col items-center gap-6 text-center">
              <Link href="/#inicio" onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-blue-500 transition-colors">Inicio</Link>
              <Link href="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-blue-500 transition-colors">Servicios</Link>
              <Link href="/#proyectos" onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 hover:text-blue-500 transition-colors">Proyectos</Link>
              <Link href="/sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500 transition-colors">Sobre Mi</Link>
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-blue-600/20 text-blue-400 border border-blue-500/30 px-10 py-3 rounded-full text-[10px] font-black tracking-widest uppercase text-center w-full">CONTACTO</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="relative pt-40 pb-20 overflow-hidden">
        {/* Efecto de luz de fondo del Hero */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Lado de la Imagen */}
          <div className="w-full md:w-5/12">
            <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-slate-800 shadow-[0_0_50px_-12px_rgba(59,130,246,0.4)]">
              <Image
                src="/javier_perez.png" 
                alt="Javier Pérez - Nodalio"
                fill
                className="object-cover object-top opacity-90"
                priority
              />
            </div>
          </div>

          {/* Lado del Texto */}
          <div className="w-full md:w-7/12 space-y-8 text-center md:text-left">
            <header>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight uppercase">
                PASIÓN POR LA <span className="text-blue-500">CONSTRUCCIÓN</span> DIGITAL
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-extralight tracking-tight leading-relaxed">
                Arquitectura de <span className="text-white font-medium italic">alto impacto</span> personal.
              </p>
            </header>

            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
              <p className="text-white font-medium italic border-l-2 border-blue-500 pl-4 bg-blue-500/5 py-2 text-left">
                "Soy un desarrollador impulsado por la curiosidad y la resolución de problemas reales."
              </p>
              
              <p className="text-left">
                Mi trayectoria en el mundo del software se define por una mentalidad de 
                <span className="text-white font-medium"> aprendizaje continuo y construcción activa</span>. 
                Como desarrollador autodidacta, entiendo la tecnología no como un concepto teórico, sino como una herramienta poderosa para dar vida a ideas y soluciones eficientes.
              </p>

              <p className="text-left">
                Para mí, la programación es una <span className="text-blue-400 font-medium italic">pasión</span> que exige rigor y una búsqueda constante de la excelencia. No me conformo con que el código simplemente funcione; me apasiona profundizar en cada herramienta y asegurar que cada despliegue sea sólido y profesional.
              </p>

              <div className="p-8 rounded-[2rem] bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-left">
                <p className="text-slate-300">
                  <span className="text-blue-500 font-black tracking-widest text-xs uppercase block mb-2">Proyecto Nodal.io</span>
                  Es el reflejo de esta filosofía: un proyecto nacido del entusiasmo por aprender y del compromiso con la calidad técnica. Aquí encontrarás la evolución de alguien que disfruta transformando retos en realidades digitales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. PIE DE PÁGINA (Idéntico al Maestro) */}
      <footer className="py-20 text-center border-t border-white/5 bg-slate-950">
        <div className="flex items-center justify-center gap-3 mb-8 opacity-20">
          <Image src="/logo.png" alt="mini" width={25} height={25} />
          <span className="font-black tracking-tighter uppercase">NODAL.IO</span>
        </div>
        <p className="text-slate-600 text-[10px] font-bold tracking-[0.5em] uppercase px-6 text-center">
          © 2026 Nodal.io • Software Architecture
        </p>
      </footer>
    </div>
  )
}