import FormStudent from "@/components/FormStudent";
import Sidebar from "@/components/sidebar";

export default function ProfileStudent() {
  return (
      <div className="grid grid-cols-[60px_1fr] md:grid-cols-[56px_1fr] h-screen overflow-hidden">
        <div className="w-20 md:w-64 h-screen overflow-y-auto">
      <Sidebar session_token_role="Estudante" />
      </div>

      <div className="flex items-center justify-center h-screen overflow-hidden">
        <div className="w-full max-w-4xl px-4 md:px-8">
        <FormStudent />
      </div>
     </div>
    </div>
  );
}