"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const formatCpf = (value: string) => {
  const cpf = value.replace(/\D/g, "").slice(0, 11);
  return cpf
  .replace(/(\d{3})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

const FormStudent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rodrigo Souza");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name,
    password: "*****",
    cpf: "000.000.000-00",
    email:"admin@gmail.com",
    ra: "12345678",
    course: "Análise de Sistemas",
    classGroup: "1º Semestre A",
  });

  /* imagem de perfil */
  const defaultImage = isEditing
    ? "./image/user-icon-add.png"
    : "./image/user-icon.png";
  const [image, setImage] = useState<string>(defaultImage);

  /* visibilidade das senhas */
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  /* sincroniza a imagem padrão quando muda o modo */
  useEffect(() => {
    setImage(defaultImage);
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({
      name,
      password: formData.password,
      cpf: formData.cpf, 
      email: formData.email,
      ra: formData.ra,
      course: formData.course,
      classGroup: formData.classGroup,
    });
  };

  const handleSave = () => {
    console.log("Dados salvos:", formData);
    setName(formData.name);
    setPassword(formData.password);
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="w-full max-w-5xl my-16 bg-forms-teacher-bg rounded-xl shadow-xl py-8 px-6 md:px-8">
      <form action=""> 
        {/* imagem de perfil */}
        <div className="w-32 mx-auto mb-8">
          <img
            src={image || "/image/user-icon.png"}
            alt="Imagem de perfil"
            className="w-full h-full object-cover rounded-full cursor-pointer"
          />
          {isEditing && (
            <div className="hover:opacity-80">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm"
              />
            </div>
          )}
        </div>

        {/* Nome + CPF */}
        <div className="flex flex-col md:flex-row gap-4 px-3">
          <div className="w-full md:w-1/2">
            <label>Nome:</label>
            {isEditing ? (
              <input
                type="text"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
              />
            ) : (
              <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
                {name}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <label>CPF:</label>
            {isEditing ? (
              <input
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                type="text"
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    cpf: formatCpf(e.target.value),
                  }))
                }
              />
            ) : (
              <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
                {formData.cpf}
              </p>
            )}
          </div>
        </div>

        {/* E-mail + RA */}
        <div className="flex flex-col md:flex-row gap-4 px-3 my-4">
          <div className="w-full md:w-1/2">
            <label>E-mail:</label>
            {isEditing ? (
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="email"
              placeholder="admin@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          ) : (
            <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
              {formData.email}
            </p>
          )}
          </div>

          <div className="w-full md:w-1/2">
            <label>RA:</label>
            {isEditing ? (
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="12345678"
              value={formData.ra}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, ra: e.target.value }))
              }
            />
        ) : (
            <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
              {formData.ra}
            </p>
          )}
          </div>
        </div>

        {/* Curso + Turma */}
        <div className="flex flex-col md:flex-row gap-4 px-3 my-4">
          <div className="w-full md:w-1/2">
            <label>Curso:</label>
            {isEditing ? (
              <input
                type="text"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.course}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, course: e.target.value }))
                }
              />
            ) : (
              <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
                {formData.course}
              </p>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <label>Turma:</label>
            {isEditing ? (
              <input
                type="text"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.classGroup}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    classGroup: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full">
                {formData.classGroup}
              </p>
            )}
          </div>
        </div>

        {/* Senhas */}
        {isEditing && (
          <div className="flex flex-col md:flex-row gap-4 px-3 my-4">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Senha Atual:
              </label>
              <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={password ? password : "**"}
                disabled
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() =>
                  setShowCurrentPassword((prev) => !prev)
                }
              >
                {showCurrentPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Nova Senha:
              </label>
              <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.password}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, password: e.target.value }))
                }
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowNewPassword((prev) => !prev)}
                >
                  {showNewPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </span>
              </div>
            </div>
          </div>
        )}

        {/* Botões */}
        <div className="flex justify-center mt-6">
          {isEditing ? (
            <div className="flex justify-center mx-auto">
              <button
                type="button"
                onClick={handleSave}
                className="bg-btn-teacher-bg px-16 sm:px-28 py-2 rounded-xl !text-white cursor-pointer"
              >
                Salvar
              </button>
            </div>
          ) : (
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleEditClick}
                className="bg-btn-teacher-bg px-16 sm:px-28 py-2 rounded-xl !text-white cursor-pointer"
              >
                Editar
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormStudent;