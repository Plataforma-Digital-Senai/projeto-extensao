import List from "@/components/List";
import Sidebar from "@/components/sidebar";
import SaveButton from "@/components/SaveButton";

export default function Alunos() {
  return (
    <div className="flex flex-col items-center">
      <Sidebar session_token_role="professor" />
      <List />
      <SaveButton />
    </div>
  );
}
