import Image from 'next/image';
import imagemChave from './img/imagemChave.png';

export default function Foto() {
  return (
    <div className='p-6 mt-10 rounded-full bg-[#524FB066]'>
       <Image
        src={imagemChave}
        alt="Imagem Chave"
        width={90} // Defina conforme necessário
        height={90}
        /> 
    </div>
    
  )
}