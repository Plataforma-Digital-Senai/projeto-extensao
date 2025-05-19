'use client'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import Sidebar from "@/components/sidebar";
import Image from 'next/image';

export default function Home() {
    const [email, setEmail] = useState('');
  return (
    <div className=" flex items-center justify-center min-h-screen bg-white">
      <div className="w-180 border-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-xl border-[#261178] ">
        <div className="flex flex-col items-center text-center gap-6">
          <div className='p-6 mt-10 rounded-full bg-[#524FB066]'>
            <Image
                src='/imagemChave.png'
                alt="Imagem Chave"
                width={90} // Defina conforme necessário
                height={90}
                /> 
            </div>
          <h1 className="text-3xl font-bold mt-2">Esqueceu sua Senha?</h1>
          <p className=" text-[#8F8F8F]">Não se preocupe, iremos te enviar as instruções</p>
          
          <div className="flex flex-col items-center">
            <span className="self-start mb-1">Email</span>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-80 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder: p-5"
                placeholder="Seu e-mail"
                
            />
            
            </div>
            <button className="p-2 rounded-md mt-1 cursor-pointer bg-[#1D154A] text-white w-40 hover:scale-110 transition duration-200 ease-in-out">Enviar</button>
          
          <div className='flex flex-row p-2 cursor-pointer hover:scale-110 transition duration-200 ease-in-out mb-10'><FaArrowLeftLong size={18} className="mt-1"/>
            <button className="cursor-pointer">Voltar</button>
          </div>
    
        </div>
      </div>
    </div>
  
  );
}
