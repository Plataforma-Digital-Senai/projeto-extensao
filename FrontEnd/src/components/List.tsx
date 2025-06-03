"use client";

import { useEffect, useState } from "react";
import { Paginator } from "primereact/paginator";
import Close from "./Close";
import AlunoRow from "./AlunoRow";
import ConfirmModal from "./ConfirmModal";
import { useSearchParams, useRouter } from "next/navigation";

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
  const [allAlunos, setAllAlunos] = useState<Aluno[]>([]);
  const [visibleAlunos, setVisibleAlunos] = useState<Aluno[]>([]);
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState<() => void>(
    () => () => {}
  );

  const searchParams = useSearchParams();
  const limit = searchParams.get("limit") || "10";
  const offset = searchParams.get("offset") || "0";
  const router = useRouter();

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=100&skip=0`)
      .then((res) => res.json())
      .then((data) => {
        const apenasInscritos = data.users.filter(
          (user: Aluno) => user.gender === "female"
        );
        setAllAlunos(apenasInscritos);
        setTotal(apenasInscritos.length);
      });
  }, []);

  useEffect(() => {
    const females = allAlunos.filter((a) => a.gender === "female");
    const start = parseInt(offset);
    const end = start + parseInt(limit);
    setVisibleAlunos(females.slice(start, end));
  }, [allAlunos, offset, limit]);

  function confirmation(mensagem: string, acao: () => void) {
    setModalMessage(mensagem);
    setConfirmAction(() => () => {
      acao();
      setModalOpen(false);
    });
    setModalOpen(true);
  }

  function expelAluno(id: number) {
    setVisibleAlunos((prevVisible) => {
      const updated = prevVisible.filter((a) => a.id !== id);
      const restantes = allAlunos.filter(
        (a) => !updated.find((v) => v.id === a.id) && a.id !== id
      );
      if (restantes.length > 0) {
        updated.push(restantes[0]);
      }
      return updated;
    });

    setAllAlunos((prevAll) =>
      prevAll.map((a) => (a.id === id ? { ...a, gender: "male" } : a))
    );
  }

  function handleExpel(id: number) {
    confirmation("Deseja remover este aluno?", () => expelAluno(id));
  }

  function promoteAluno(id: number) {
    setAllAlunos((prev) =>
      prev.map((aluno) => {
        if (aluno.id === id) {
          return { ...aluno, address: { ...aluno.address, state: "Alabama" } };
        } else if (aluno.address.state === "Alabama") {
          return { ...aluno, address: { ...aluno.address, state: "Utah" } };
        } else {
          return aluno;
        }
      })
    );
  }

  function handlePromoteLeader(id: number) {
    confirmation(
      "Deseja promover este aluno a líder? *Só pode existir um aluno líder por vez.",
      () => promoteAluno(id)
    );
  }

  function unPromoteAluno(id: number) {
    setAllAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Utah" } }
          : aluno
      )
    );
  }

  function handleUnPromote(id: number) {
    confirmation("Deseja tirar o cargo de líder deste aluno?", () =>
      unPromoteAluno(id)
    );
  }

  function approvedAluno(id: number) {
    setAllAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Utah" } }
          : aluno
      )
    );
  }

  function handleApprove(id: number) {
    confirmation("Deseja aprovar este aluno?", () => approvedAluno(id));
  }

  function reprovedAluno(id: number) {
    setAllAlunos((prev) =>
      prev.map((aluno) =>
        aluno.id === id
          ? { ...aluno, address: { ...aluno.address, state: "Tennessee" } }
          : aluno
      )
    );
  }

  function handleReprove(id: number) {
    confirmation("Deseja reprovar este aluno?", () => reprovedAluno(id));
  }

  return (
    <>
      {modalOpen && (
        <ConfirmModal
          isOpen={modalOpen}
          message={modalMessage}
          onConfirm={confirmAction}
          onCancel={() => setModalOpen(false)}
        />
      )}
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
                {visibleAlunos.map((aluno) => (
                  <AlunoRow
                    key={aluno.id}
                    aluno={aluno}
                    onExpel={handleExpel}
                    onPromote={handlePromoteLeader}
                    onUnPromote={handleUnPromote}
                    onApproved={handleApprove}
                    onReproved={handleReprove}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full flex items-center justify-center mt-[10%] lg:mt-[-5%] !p-0">
            <Paginator
              first={parseInt(offset)}
              rows={parseInt(limit)}
              totalRecords={total}
              onPageChange={(e) => {
                router.push(`?limit=${e.rows}&offset=${e.first}`);
              }}
              template={{
                layout: "PrevPageLink CurrentPageReport NextPageLink",
              }}
            />
          </div>

          <div className="w-full flex">
            <button className="mb-[12%] lg:mb-[9%] ml-[8%] lg:ml-[61%] mt-[10%] lg:mt-[5%] max-sm:w-[80%] w-[40%] lg:w-[30%] text-xl lg:text-2xl p-2 rounded-md bg-[#1d154a] text-white">
              Encerrar projeto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
