'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Estado para el carrusel de imágenes de Nutrifit
  const [currentImg, setCurrentImg] = useState(0);
  
  const projectImages = [
    "/nutrifit-1.png",
    "/nutrifit-2.png",
    "/nutrifit-3.png",
    "/nutrifit-4.png"
  ];

  // Temporizador ajustado a 5 segundos (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % projectImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projectImages.length]);

  const services = [
    {
      title: "Desarrollo Web",
      desc: "Aplicaciones ultrarrápidas y optimizadas con Next.js.",
      icon: "⚡"
    },
    {
      title: "Sistemas de Gestión",
      desc: "Automatización de procesos internos para maximizar la eficiencia.",
      icon: "⚙️"
    },
    {
      title: "Apps de Alto Rendimiento",
      desc: "Optimización de tiempos y procesos mediante software a medida.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 scroll-smooth">
      
      {/* 1. CABECERA (HEADER) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <Image src="/logo.png" alt="Nodal.io" width={40} height={40} className="rounded-lg" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">NODAL<span className="text-blue-500">.IO</span></span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">Solutions</span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <Link href="/sobre-mi" className="hover:text-blue-400 transition-colors">Sobre Mi</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contacto" className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all text-center">
              CONTACTO
            </Link>

            {/* Botón Hamburguesa (Solo Móvil) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            >
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL (Overlay) */}
        <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 text-sm font-black uppercase tracking-[0.3em]">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-blue-500 transition-colors">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-blue-500 transition-colors">Servicios</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-blue-500 transition-colors">Proyectos</a>
            <Link href="/sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-blue-500 transition-colors">Sobre Mi</Link>
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-blue-600 px-10 py-4 rounded-2xl text-base">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO IMPACTANTE */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          {/* AJUSTE RESPONSIVE: w-full y max-w-[450px] para evitar amontonamiento en móviles */}
          <div className="relative inline-block mb-12 group w-full max-w-[450px] aspect-[16/9] mx-auto">
            <div className="absolute -inset-10 bg-blue-500 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <Image 
              src="/logo.png" 
              alt="Logo Nodalio" 
              fill
              className="relative object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.85]">
              NODAL<span className="text-blue-500">.IO</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-300 max-w-2xl mx-auto mb-10 font-extralight leading-relaxed tracking-tight">
              Arquitectura digital de <span className="text-white font-medium italic">alto impacto</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="#proyectos" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-blue-900/40 uppercase tracking-widest text-sm">
                Explorar Proyectos
              </a>
              <div className="flex items-center gap-3 px-8 py-5 rounded-2xl border border-slate-800 bg-slate-900/50 text-slate-300 font-bold uppercase tracking-widest text-xs">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="uppercase tracking-widest">Infraestructura Segura</span>
              </div>
            </div>

            {/* STACK TECNOLÓGICO */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">Especialista en tecnología moderna</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
                <span className="text-[11px] md:text-xs font-black tracking-tighter">TYPESCRIPT</span>
                <span className="text-[11px] md:text-xs font-black tracking-tighter">NEXT.JS</span>
                <span className="text-[11px] md:text-xs font-black tracking-tighter text-blue-400">SUPABASE</span>
                <span className="text-[11px] md:text-xs font-black tracking-tighter">TAILWIND CSS</span>
                <span className="text-[11px] md:text-xs font-black tracking-tighter text-green-500">GOOGLE WORKSPACE</span>
                <span className="text-[11px] md:text-xs font-black tracking-tighter">VERCEL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section id="servicios" className="px-8 py-32 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((s, i) => (
              <div key={i} className="group p-10 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROYECTO DESTACADO */}
      <section id="proyectos" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="p-12 md:p-20 z-10 relative">
              <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase">Proyecto Destacado</span>
              <h3 className="text-5xl font-black mt-6 mb-8">Nutrifit Pro</h3>
              <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                Plataforma integral de gestión nutricional. Desarrollo centrado en la escalabilidad y el rendimiento con arquitectura basada en Supabase y Next.js.
              </p>
              <Link href="https://www.nutrifit-pro.es" target="_blank" className="text-white font-bold text-lg border-b-2 border-blue-600 pb-2 hover:text-blue-400 transition-colors">
                VISITAR PLATAFORMA →
              </Link>
            </div>
            
            <div className="h-full min-h-[450px] bg-black/20 flex items-center justify-center border-l border-white/5 relative overflow-hidden">
              {projectImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImg ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image 
                    src={img} 
                    alt={`Captura Nutrifit ${index + 1}`} 
                    fill 
                    className="object-cover object-top opacity-80" 
                  />
                </div>
              ))}
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {projectImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === currentImg ? "bg-blue-500 w-8" : "bg-white/20 w-2"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex items-center justify-center gap-3 mb-8 opacity-20">
          <Image src="/logo.png" alt="mini" width={25} height={25} />
          <span className="font-black tracking-tighter">NODAL.IO</span>
        </div>
        <p className="text-slate-600 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 Nodal.io • Software Architecture</p>
      </footer>
    </div>
  )
}