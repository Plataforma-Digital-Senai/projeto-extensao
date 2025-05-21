import List from "@/components/List";
import Sidebar from "@/components/sidebar";

export default function Alunos() {
  return (
    <div className="flex flex-col items-center">
      <Sidebar session_token_role="professor" />
      <List />
    </div>
  );
}
