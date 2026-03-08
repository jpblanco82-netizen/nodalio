'use client';
import Link from 'next/link';

export default function Gracias() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="text-6xl mb-6 animate-bounce">🚀</div>
        <h1 className="text-4xl font-black mb-4">¡Mensaje recibido!</h1>
        <p className="text-slate-400 mb-8 max-w-md">
          Gracias por contactar con NODAL.IO. Revisaré tu propuesta y te responderé lo antes posible.
        </p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition-all">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}