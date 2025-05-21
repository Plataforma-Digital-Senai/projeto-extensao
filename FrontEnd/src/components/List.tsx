"use client";

import { useEffect, useState } from "react";
import Close from "./Close";
import AlunoRow from "./AlunoRow";

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
            <thead className="text-xl">
              <tr>
                <th className="titleList">N°</th>
                <th className="titleList">Nome:</th>
                <th className="titleList">Turma:</th>
                <th className="titleList">Líder</th>
                <th className="titleList">Remover</th>
                <th className="titleList">Situação:</th>
              </tr>
            </thead>

            <tbody className="font-medium">
              {alunos.map((aluno) => (
                <AlunoRow key={aluno.id} aluno={aluno} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex">
          <button
            className="custom-button mb-[8%] lg:mb-[10%] ml-[8%] lg:ml-[61%] mt-5 lg:mt-0 max-sm:w-[80%] w-[40%] lg:w-[30%] text-xl lg:text-2xl items-center justify-center gap-2 p-1 lg:p-2 rounded-md"
            title="Encerrar projeto"
          >
            Encerrar projeto
          </button>
        </div>
      </div>
    </div>
  );
}
