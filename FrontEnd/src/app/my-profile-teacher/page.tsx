import FormTeacher from "@/components/FormTeacher";
import Sidebar from "@/components/sidebar";

export default function ProfileTeacher() {
  return (
    <div>
      <Sidebar session_token_role="professor" />

      <div className="flex flex-col items-center justify-center h-screen">
        <FormTeacher />
      </div>
    </div>
  );
}
