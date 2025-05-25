"use client";

import { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import Close from "./Close";
import AlunoRow from "./AlunoRow";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Aluno {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    state: string;
  };
  gender: string;
}

export default function List() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const searchParams = useSearchParams();
  const [total, setTotal] = useState(0);
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const router = useRouter();

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=${limit}&skip=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        const alunas = data.users
          .filter((user: Aluno) => user.gender === "female")
          .map((user: Aluno) => ({
            ...user,
          }));

        setAlunos(alunas);
        setTotal(data.total);
      });
  }, [limit, offset]);

  function expelAluno(id: number) {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id ? { ...aluno, gender: "male" } : aluno
      )
    );
  }

  function promoteAluno(id: number) {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Alabama" } }
          : aluno
      )
    );
  }

  function unPromoteAluno(id: number) {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Utah" } }
          : aluno
      )
    );
  }

  function approvedAluno(id: number) {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Utah" } }
          : aluno
      )
    );
  }

  function reprovedAluno(id: number) {
    setAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Tennessee" } }
          : aluno
      )
    );
  }

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
              {alunos
                .filter((aluno) => aluno.gender === "female")
                .map((aluno) => (
                  <AlunoRow
                    key={aluno.id}
                    aluno={aluno}
                    onExpel={expelAluno}
                    onPromote={promoteAluno}
                    onUnPromote={unPromoteAluno}
                    onApproved={approvedAluno}
                    onReproved={reprovedAluno}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex items-center justify-center mt-[10%] lg:mt-[-5%] !p-0 ">
          <Paginator
            first={parseInt(offset)}
            rows={parseInt(limit)}
            totalRecords={total}
            onPageChange={(e) => {
              router.push(`?limit=${e.rows}&offset=${e.first}`);
            }}
            template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
          />
        </div>
        <div className="w-full flex">
          <button
            className="mb-[12%] lg:mb-[9%] ml-[8%] lg:ml-[61%] mt-[10%] lg:mt-[5%] max-sm:w-[80%] w-[40%] lg:w-[30%] text-xl lg:text-2xl items-center justify-center gap-2 p-1 lg:p-2 rounded-md bg-[#1d154a] text-white text-center"
            title="Encerrar projeto"
          >
            Encerrar projeto
          </button>
        </div>
      </div>
    </div>
  );
}
