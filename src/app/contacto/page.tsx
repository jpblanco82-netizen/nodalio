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
        // Redirección manual a nuestra página de éxito
        router.push('/contacto/gracias');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30 flex flex-col">
      {/* Header */}
      <nav className="p-8 max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Nodal.io" width={30} height={30} className="rounded-lg" />
          <span className="text-lg font-black tracking-tighter">NODAL<span className="text-blue-500">.IO</span></span>
        </Link>
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
          ← Volver al inicio
        </Link>
      </nav>

      {/* Formulario */}
      <main className="flex-grow flex items-center justify-center px-8 py-12">
        <div className="max-w-xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">¿Hablamos?</h1>
            <p className="text-slate-400 font-light">
              Cuéntame tu idea y buscaremos la mejor arquitectura para hacerla realidad.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                rows={6}
                required
                disabled={status === 'sending'}
                className="bg-slate-900 border border-slate-800 rounded-[2rem] px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none disabled:opacity-50"
                placeholder="¿En qué puedo ayudarte?"
              ></textarea>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest">
                Hubo un error. Inténtalo de nuevo.
              </p>
            )}

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 uppercase tracking-[0.2em] text-xs disabled:bg-slate-800 disabled:text-slate-500"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </main>

      <footer className="p-8 text-center text-slate-700 text-[10px] uppercase tracking-widest border-t border-white/5">
        © 2026 Nodal.io • Software Architecture & Solutions
      </footer>
    </div>
  )
}