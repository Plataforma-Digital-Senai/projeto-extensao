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
      className="space-y-4 my-[5%] flex gap-2 rounded-md items-center justify-center shadow-lg min-w-4/5 h-full overflow-x-auto"
      style={{ backgroundColor: "#dce6f0" }}
    >
      <div className="relative w-full">
        <button className="absolute top-4 right-4 z-10">
          <Close />
        </button>

        <table className="p-6 mb-[10%] mt-[8%] ml-[7%] min-w-6/7 min-h-[60%] border-none items-center justify-center">
          <thead className="text-xl text-black">
            <tr>
              <th className="px-3 text-center font-normal">N°</th>
              <th className="px-3 text-center font-normal">Nome:</th>
              <th className="px-3 text-center font-normal">Turma:</th>
              <th className="px-3 text-center font-normal">Líder</th>
              <th className="px-3 text-center font-normal">Remover</th>
              <th className="px-3 text-center font-normal">Situação:</th>
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
                <td className="p-3 pl-5 text-center">
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
                <td className="p-3 pl-10 text-center">
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
        <div className="w-full flex">
          <button
            className="text-center mb-[10%] ml-[61%] w-[30%] text-2xl items-center justify-center gap-2 text-white p-2 rounded-md"
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
