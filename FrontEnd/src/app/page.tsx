import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar session_token_role="professor" />

      <main className="flex-1 ml-16 md:ml-[64px] transition-all duration-300 ease-in-out md:px-8 py-6">
        <div className="bg-[#dce6f0] rounded-xl shadow-lg p-8  max-w-3xl mx-auto w-full">
          /* Área das imagens */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="border-2 bg-gray-100 border-solid border-blue-950 rounded-md flex items-center justify-center h-48">
              <span className="text-gray-400">Insira uma imagem</span>
            </div>
            <div className="border-2 bg-gray-100 border-solid border-blue-950 rounded-md flex items-center justify-center h-48">
              <span className="text-gray-400">Insira uma imagem</span>
            </div>
          </div>

          <div className="mb-4 mt-10 ">
            <label className="block font-semibold mb-1 text-[#003366]">Descrição:</label>
            <input
              type="text"
              placeholder="Se configura como..."
              className="text-blue-950 bg-gray-100 w-full border border-blue-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         
          <div className="mb-6">
            <label className="block font-semibold mb-1 text-[#003366]">Objetivos:</label>
            <input
              type="text"
              placeholder="Se configura como..."
              className="text-blue-950 bg-gray-100 w-full border border-blue-950 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-10">
            <div className="text-sm text-gray-500 text-center md:text-left">
              Horas Válidas: <span className="font-semibold">40 <br /><br className="md:hidden"/></span> Vagas: <span className="font-semibold">0/40</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-md transition w-full sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Upload Documentação
              </button>
              <button className="bg-blue-950 text-white px-4 py-2 rounded-md transition w-full sm:w-auto">
                Salvar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
