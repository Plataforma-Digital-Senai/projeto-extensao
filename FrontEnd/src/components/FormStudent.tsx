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
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({
    name,
    password: "*****",
    cpf: "000.000.000-00",
    email:"admin@gmail.com",
    ra: "12345678",
    course: "Análise e Desenvolvimento de Sistemas",
    classGroup: "1º Semestre A",
    image: ""
  });

  const [savedData, setSavedData] = useState(formData);

  /* visibilidade das senhas */
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showSavedMessage, setShowSavedMessage] = useState(false);  

  /* sincroniza a imagem padrão quando muda o modo */
  useEffect(() => {
     if (!isEditing) {
      setImagePreview("");
      }
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
      image: ""
    });
  };

  const handleSave = () => {
    console.log("Dados salvos:", formData);
    setSavedData({ ...formData, image: imagePreview || formData.image });
    setName(formData.name);
    setPassword(formData.password);
    setIsEditing(false);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };


  return (
    <div className="w-full max-w-5xl my-16 bg-forms-teacher-bg rounded-xl shadow-xl py-8 px-4 md:px-8 overflow-x-hidden">
      <form action=""> 
        {/* imagem de perfil */}
        <div className="flex justify-center mb-8">
          <div className="w-64 bg-sidebar h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-2 border-white shadow-md">
           <img
            src={
            isEditing
              ? imagePreview || savedData.image || "/image/user-icon-add.png"
              : savedData.image || "/image/user-icon.png"
            }
            alt="Imagem de perfil"
            className="w-full h-full object-cover"
          />
          </div>
          {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-3 text-sm"
              />
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
                disabled={true}
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
              disabled={true}
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
              disabled={true}
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
              <select
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.course}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, course: e.target.value }))
                }
              >
              <option value="">Selecione seu curso</option>
              <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
              <option value="Engenharia da Computação">Engenharia da Computação</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Redes de Computadores">Redes de Computadores</option>
              <option value="Sistemas de Informação">Sistemas de Informação</option>
              </select>
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
          {showSavedMessage && (
            <p className="fixed bottom-6 right-6 bg-green-400 text-white px-4 py-2 rounded-xl shadow-xl z-50 animate-fade-in-out">
              Dados salvos com sucesso!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormStudent;