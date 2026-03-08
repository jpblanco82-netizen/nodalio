'use client';

import Image from 'next/image'
import Link from 'next/link'

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 scroll-smooth">
      
      {/* 1. CABECERA (Header idéntico al Maestro) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <Image src="/logo.png" alt="Nodal.io" width={40} height={40} className="rounded-lg" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">NODAL<span className="text-blue-500">.IO</span></span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">Solutions</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Link href="/#inicio" className="hover:text-blue-400 transition-colors">Inicio</Link>
            <Link href="/#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="/#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
            <Link href="/sobre-mi" className="text-blue-500 transition-colors">Sobre Mi</Link>
          </div>
          <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all text-center">
            CONTACTO
          </Link>
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

          {/* Lado del Texto (Recuperado y Sincronizado) */}
          <div className="w-full md:w-7/12 space-y-8 text-center md:text-left">
            <header>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-tight">
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
                  <span className="text-blue-500 font-black tracking-widest text-xs uppercase block mb-2">Proyecto Nodalio</span>
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
        <p className="text-slate-600 text-[10px] font-bold tracking-[0.5em] uppercase">
          © 2026 Nodal.io • Software Architecture
        </p>
      </footer>
    </div>
  )
}