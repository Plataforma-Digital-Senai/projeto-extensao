"use client";

import { useEffect, useState } from "react";
import { FaCrown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Close from "./Close";

interface Aluno {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    state: string;
  };
}

export default function List() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=10")
      .then((res) => res.json())
      .then((data) => setAlunos(data.users));
  }, []);

  return (
    <div
      className="lg:space-y-4 my-[7%] lg:my-[5%] ml-[15%] lg:ml-0 flex gap-2 rounded-md items-center justify-center shadow-lg w-4/6 lg:w-4/5 lg:h-full overflow-x-auto"
      style={{ backgroundColor: "#dce6f0" }}
    >
      <div className="relative w-full">
        <button className="absolute top-3 lg:top-8 left-3 md:left-auto md:right-7 z-10">
          <Close />
        </button>

        <div className="mx-4 lg:mx-0">
          <table className="lg:p-6 lg:mb-[10%] mt-16 lg:mt-[8%] lg:ml-[7%] lg:w-6/7 lg:h-[60%] border-none items-center justify-center">
            <thead className="text-xl text-black">
              <tr>
                <th className="lg:px-3 text-center font-normal">N°</th>
                <th className="lg:px-3 text-center font-normal">Nome:</th>
                <th className="lg:px-3 text-center font-normal">Turma:</th>
                <th className="lg:px-3 text-center font-normal">Líder</th>
                <th className="lg:px-3 text-center font-normal">Remover</th>
                <th className="lg:px-3 text-center font-normal">Situação:</th>
              </tr>
            </thead>

            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td className="p-3 text-center">
                    <div
                      className="bg-white text-center w-full flex items-center justify-center gap-2 text-black p-2 rounded-md border border-2"
                      style={{ borderColor: "#7E9DD6" }}
                    >
                      {aluno.id}
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div
                      className="bg-white text-left w-full flex items-center gap-2 text-black p-2 rounded-md border border-2"
                      style={{ borderColor: "#7E9DD6" }}
                    >
                      {aluno.firstName} {aluno.lastName}
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div
                      className="bg-white text-left w-full flex items-center gap-2 text-black p-2 rounded-md border border-2"
                      style={{ borderColor: "#7E9DD6" }}
                    >
                      {aluno.address.state}
                    </div>
                  </td>
                  <td className="p-3 lg:pl-[3%] text-center">
                    <button
                      className="bg-white flex items-center justify-center gap-2 p-2 rounded-md border border-2"
                      style={{ borderColor: "#7E9DD6" }}
                      title="Promover aluno a lider"
                    >
                      <div className="text-2xl">
                        <FaCrown />
                      </div>
                    </button>
                  </td>
                  <td className="p-3 lg:pl-[5%] text-center">
                    <button
                      className="bg-white flex items-center justify-center gap-2 text-red-600 p-2 rounded-md border border-2"
                      style={{ borderColor: "#7E9DD6" }}
                      title="Expulsar aluno"
                    >
                      <div className="text-2xl">
                        <MdCancel />
                      </div>
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      className="text-center w-full flex items-center justify-center gap-2 text-white p-2 rounded-md"
                      style={{ backgroundColor: "#1D154A" }}
                      title="Situação do aluno"
                    >
                      Aprovado
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex">
          <button
            className="text-center mb-[8%] lg:mb-[10%] ml-[8%] lg:ml-[61%] mt-5 lg:mt-0 max-sm:w-[80%] w-[40%] lg:w-[30%] text-xl lg:text-2xl items-center justify-center gap-2 text-white p-1 lg:p-2 rounded-md"
            style={{ backgroundColor: "#1D154A" }}
            title="Encerrar projeto"
          >
            Encerrar projeto
          </button>
        </div>
      </div>
    </div>
  );
}
