"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormTeacher = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rodrigo Souza");
  const [password, setPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [formData, setFormData] = useState({ name, password: "" });

  const defaultImage = isEditing
    ? "./image/user-icon-add.png"
    : "./image/user-icon.png";

  const [image, setImage] = useState<string>(defaultImage);

  useEffect(() => {
    setImage(defaultImage);
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({ name, password: "" });
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
      <form action="" className="">
        <div className="w-32 mx-auto mb-8">
          <label htmlFor="fileInput">
            <img
              src={image}
              alt="Imagem de perfil"
              className={`w-full h-full object-cover rounded-full cursor-pointer ${
                isEditing ? "hover:opacity-80" : ""
              }`}
            />
          </label>

          {isEditing && (
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-3">
          <div className="w-full md:w-1/2">
            <label>Nome:</label>
            {isEditing ? (
              <input
                type="text"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
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
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 px-3 my-4">
          <div className="w-full md:w-1/2">
            <label>E-mail:</label>
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="email"
              placeholder="admin@gmail.com"
              disabled
            />
          </div>

          <div className="w-full md:w-1/2">
            <label>NI:</label>
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="12345678"
              disabled
            />
          </div>
        </div>

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
                  value={password ? password : "senhaAleatoria"}
                  disabled
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowCurrentPassword((prev) => !prev)}
                >
                  {showCurrentPassword ? (
                    <Eye size={18} />
                  ) : (
                    <EyeOff size={18} />
                  )}
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

        <div className="flex justify-center mt-6">
          {isEditing ? (
            <>
              <div className="flex justify-center mx-auto">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-btn-teacher-bg px-16 sm:px-28 py-2 rounded-xl !text-white cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-center mx-auto">
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

export default FormTeacher;
