"use client";

import { useEffect, useState } from "react";

const FormTeacher = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rodrigo Souza");
  const [password, setPassword] = useState("");
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
    <div className="w-full max-w-5xl my-32 !bg-forms-teacher-bg rounded-xl shadow-xl py-8 px-8">
      <form action="" className="">
        <div className="w-32 mx-auto mb-8">
          <img
            src={image}
            alt="Imagem de perfil"
            className="w-full h-full object-cover"
          />

          {isEditing && (
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-sm"
              />
            </div>
          )}
        </div>

        <div className="flex space-x-4 px-3">
          <div className="w-1/2">
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

          <div className="w-1/2">
            <label>CPF:</label>
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="XXX.XXX.XXX-XX"
              disabled
            />
          </div>
        </div>

        <div className="flex space-x-4 px-3 py-3">
          <div className="w-1/2">
            <label>E-mail:</label>
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="email"
              placeholder="admin@gmail.com"
              disabled
            />
          </div>

          <div className="w-1/2">
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
          <div className="flex space-x-4 px-3 py-3">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Senha Atual:
              </label>
              <input
                type="password"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={password ? password : "********"}
                disabled
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Nova Senha:
              </label>
              <input
                type="password"
                className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          {isEditing ? (
            <>
              <div className="flex justify-center mx-auto">
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-btn-teacher-bg px-28 py-2 rounded-xl !text-white"
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
                className="bg-btn-teacher-bg px-28 py-2 rounded-xl !text-white"
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
