import { FaCrown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface Aluno {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    state: string;
  };
  gender: string;
}

export default function AlunoRow({
  aluno,
  onExpel,
  onPromote,
  onUnPromote,
  onApproved,
  onReproved,
}: {
  aluno: Aluno;
  onExpel: (id: number) => void;
  onPromote: (id: number) => void;
  onUnPromote: (id: number) => void;
  onApproved: (id: number) => void;
  onReproved: (id: number) => void;
}) {
  const isReprovado = aluno.address.state === "Tennessee";

  const statusButtonClasses = `custom-button itemListInside w-full text-white cursor-pointer ${
    isReprovado ? "bg-red-600" : "bg-[#1d154a]"
  } ${isReprovado ? "hover:bg-[#1d154a]" : "hover:bg-red-600"}`;

  return (
    <tr key={aluno.id}>
      <td className="itemList">
        <div className="itemListBorder itemListInside text-center w-full text-black">
          {aluno.id}
        </div>
      </td>
      <td className="itemList">
        <div className="itemListBorder itemListInside text-left w-full text-black">
          {aluno.firstName} {aluno.lastName}
        </div>
      </td>
      <td className="itemList">
        <div className="itemListBorder itemListInside text-left w-full text-black">
          {aluno.address.state}
        </div>
      </td>
      <td className="p-3 lg:pl-[3%] text-center">
        <button
          className={`itemListInside border-2 cursor-pointer border-[#7e9dd6] ${
            aluno.address.state === "Alabama"
              ? "bg-black text-white hover:bg-white hover:text-black"
              : "bg-white text-black hover:bg-black hover:text-white"
          }`}
          title="Promover aluno a líder"
          onClick={() =>
            aluno.address.state === "Alabama"
              ? onUnPromote(aluno.id)
              : onPromote(aluno.id)
          }
        >
          <FaCrown className="text-2xl" aria-label="Promover aluno a líder" />
        </button>
      </td>
      <td className="p-3 lg:pl-[5%] text-center">
        <button
          className="itemListInside cursor-pointer border-2 border-[#7e9dd6] bg-white text-red-600 hover:bg-red-600 hover:text-white"
          title="Expulsar aluno"
          onClick={() => onExpel(aluno.id)}
        >
          <MdCancel className="text-2xl" aria-label="Expulsar aluno" />
        </button>
      </td>
      <td className="itemList">
        <button
          className={statusButtonClasses}
          title="Situação do aluno"
          onClick={() =>
            isReprovado ? onApproved(aluno.id) : onReproved(aluno.id)
          }
        >
          {isReprovado ? "Reprovado" : "Aprovado"}
        </button>
      </td>
    </tr>
  );
}
