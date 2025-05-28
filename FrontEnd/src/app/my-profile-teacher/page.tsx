import FormTeacher from "@/components/FormTeacher";
import Sidebar from "@/components/sidebar";

export default function ProfileTeacher() {
  return (
    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[56px_1fr] min-h-screen">
      <div className="w-20 md:w-64">
        <Sidebar session_token_role="professor" />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-4xl">
          <FormTeacher />
        </div>
      </div>
    </div>
  );
}
