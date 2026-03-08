'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Contacto() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xnjgnlqz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        router.push('/contacto/gracias');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 flex flex-col scroll-smooth">
      
      {/* 1. CABECERA (Sincronizada con el Maestro) */}
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
            <Link href="/sobre-mi" className="hover:text-blue-400 transition-colors">Sobre Mi</Link>
          </div>
          <div className="bg-blue-600/20 text-blue-400 px-6 py-2 rounded-full text-xs font-black tracking-widest border border-blue-500/30">
            CONTACTO
          </div>
        </div>
      </nav>

      {/* 2. FORMULARIO (Con campo de teléfono añadido) */}
      <main className="flex-grow flex items-center justify-center px-8 pt-40 pb-20 relative overflow-hidden">
        {/* Efecto de luz de fondo para coherencia visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-xl w-full relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-4">¿Hablamos?</h1>
            <p className="text-slate-400 font-light text-lg">
              Cuéntame tu idea y buscaremos la mejor arquitectura para hacerla realidad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Nombre</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  disabled={status === 'sending'}
                  className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm disabled:opacity-50"
                  placeholder="Tu nombre"
                />
              </div>

              {/* NUEVO CAMPO: TELÉFONO */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Teléfono</label>
                <input 
                  type="tel" 
                  name="phone"
                  disabled={status === 'sending'}
                  className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm disabled:opacity-50"
                  placeholder="+34 000 000 000"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Email de contacto</label>
              <input 
                type="email" 
                name="email"
                required
                disabled={status === 'sending'}
                className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm disabled:opacity-50"
                placeholder="tu@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 ml-4">Tu mensaje</label>
              <textarea 
                name="message"
                rows={4}
                required
                disabled={status === 'sending'}
                className="bg-slate-900 border border-slate-800 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none disabled:opacity-50"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest animate-pulse">
                Hubo un error. Inténtalo de nuevo.
              </p>
            )}

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-2xl shadow-blue-900/40 uppercase tracking-[0.2em] text-xs disabled:bg-slate-800 disabled:text-slate-500"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </main>

      {/* 3. PIE DE PÁGINA (Sincronizado con el Maestro) */}
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