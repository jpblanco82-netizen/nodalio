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
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 scroll-smooth flex flex-col">
      
      {/* 1. CABECERA (HEADER) - CORRECCIÓN DE COLISIÓN MÓVIL */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-slate-950/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto relative">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer z-[110]">
            <Image src="/logo.png" alt="Nodal.io" width={32} height={32} className="rounded-lg shrink-0" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none">NODAL<span className="text-blue-500">.IO</span></span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">Solutions</span>
            </div>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <Link href="/sobre-mi" className="hover:text-blue-400 transition-colors">Sobre Mi</Link>
          </div>

          <div className="flex items-center gap-4 z-[110]">
            <Link href="/contacto" className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-[10px] font-black tracking-widest transition-all">
              CONTACTO
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[120]"
              aria-label="Toggle Menu"
            >
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL (Overlay Opaco) - Evita que se vea el Hero debajo */}
        <div className={`fixed inset-0 bg-slate-950 z-[105] transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full gap-10 text-center">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black tracking-tighter uppercase">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black tracking-tighter uppercase">Servicios</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black tracking-tighter uppercase">Proyectos</a>
            <Link href="/sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-3xl font-black tracking-tighter uppercase">Sobre Mi</Link>
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="mt-6 bg-blue-600 px-12 py-5 rounded-2xl text-sm font-black tracking-widest uppercase shadow-xl shadow-blue-900/40">CONTACTO</Link>
          </div>
        </div>
      </nav>

      {/* 2. HERO - AUMENTADO PT PARA EVITAR AMONTONAMIENTO */}
      <section id="inicio" className="relative pt-44 md:pt-52 pb-20 overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[250px] bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="relative inline-block mb-10 group w-full max-w-[320px] md:max-w-[450px] aspect-video mx-auto">
            <Image 
              src="/logo.png" 
              alt="Logo Nodalio" 
              fill
              className="relative object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9] uppercase">
              NODAL<span className="text-blue-500">.IO</span>
            </h1>
            <p className="text-lg md:text-3xl text-slate-300 max-w-2xl mx-auto mb-10 font-extralight tracking-tight leading-relaxed">
              Arquitectura digital de <span className="text-white font-medium italic">alto impacto</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
              <a href="#proyectos" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-blue-900/40 uppercase tracking-widest text-xs">
                Explorar Proyectos
              </a>
              <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 text-slate-300 font-bold uppercase tracking-widest text-[10px]">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                Infraestructura Segura
              </div>
            </div>

            {/* STACK TECNOLÓGICO */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.4em] mb-8">Especialista en tecnología moderna</p>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 opacity-40 hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] md:text-xs font-black tracking-tighter">TYPESCRIPT</span>
                <span className="text-[9px] md:text-xs font-black tracking-tighter">NEXT.JS</span>
                <span className="text-[9px] md:text-xs font-black tracking-tighter text-blue-400 font-bold">SUPABASE</span>
                <span className="text-[9px] md:text-xs font-black tracking-tighter">TAILWIND CSS</span>
                <span className="text-[9px] md:text-xs font-black tracking-tighter text-green-500 font-bold">GOOGLE WORKSPACE</span>
                <span className="text-[9px] md:text-xs font-black tracking-tighter">VERCEL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section id="servicios" className="px-6 py-24 bg-slate-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((s, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all text-center md:text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl md:text-3xl mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h4 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROYECTO DESTACADO */}
      <section id="proyectos" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] border border-slate-800 bg-slate-900">
          <div className="flex flex-col md:grid md:grid-cols-2">
            <div className="p-8 md:p-20 z-10 relative text-center md:text-left order-2 md:order-1">
              <span className="text-blue-500 font-bold tracking-widest text-[10px] uppercase">Proyecto Destacado</span>
              <h3 className="text-3xl md:text-5xl font-black mt-6 mb-8 uppercase tracking-tighter">Nutrifit Pro</h3>
              <p className="text-base md:text-xl text-slate-400 mb-10 font-light leading-relaxed">
                Plataforma integral de gestión nutricional desarrollada con arquitectura basada en Supabase y Next.js.
              </p>
              <Link href="https://www.nutrifit-pro.es" target="_blank" className="text-white font-bold text-base md:text-lg border-b-2 border-blue-600 pb-2 hover:text-blue-400 transition-colors inline-block">
                VISITAR PLATAFORMA →
              </Link>
            </div>
            
            <div className="h-64 md:h-auto min-h-[350px] bg-black/40 flex items-center justify-center border-b md:border-b-0 md:border-l border-white/5 relative overflow-hidden order-1 md:order-2">
              {projectImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImg ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image src={img} alt="Captura Nutrifit" fill className="object-cover object-top opacity-80" />
                </div>
              ))}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {projectImages.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? "bg-blue-500 w-8" : "bg-white/20 w-2"}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-16 text-center border-t border-white/5 bg-slate-950">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-20">
          <Image src="/logo.png" alt="mini" width={20} height={20} />
          <span className="font-black tracking-tighter text-sm uppercase">NODAL.IO</span>
        </div>
        <p className="text-slate-600 text-[8px] md:text-[9px] font-bold tracking-[0.4em] uppercase px-6">© 2026 Nodal.io • Software Architecture</p>
      </footer>
    </div>
  )
}