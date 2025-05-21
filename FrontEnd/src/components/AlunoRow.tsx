import { FaCrown } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface Aluno {
  id: number;
  firstName: string;
  lastName: string;
  address: {
    state: string;
  };
}

export default function AlunoRow({ aluno }: { aluno: Aluno }) {
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
          className="itemListBorder itemListInside"
          title="Promover aluno a líder"
        >
          <FaCrown className="text-2xl" aria-label="Promover aluno a líder" />
        </button>
      </td>
      <td className="p-3 lg:pl-[5%] text-center">
        <button
          className="itemListBorder text-red-600 itemListInside"
          title="Expulsar aluno"
        >
          <MdCancel className="text-2xl" aria-label="Expulsar aluno" />
        </button>
      </td>
      <td className="itemList">
        <button
          className="custom-button itemListInside w-full"
          title="Situação do aluno"
        >
          Aprovado
        </button>
      </td>
    </tr>
  );
}
