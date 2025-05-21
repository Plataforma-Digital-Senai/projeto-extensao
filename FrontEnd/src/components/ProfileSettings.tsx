// components/ProfileSettings.tsx
import { useState } from "react";

export default function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("João da Silva");
  const [password, setPassword] = useState(""); // senha oculta inicialmente
  const [formData, setFormData] = useState({ name, password: "" });

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData({ name, password: "" }); // limpa senha no início da edição
  };

  const handleSave = () => {
    // Aqui você faria a chamada à API para salvar os dados
    console.log("Dados salvos:", formData);

    setName(formData.name);
    setPassword(formData.password);
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Configurações de Perfil</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nome</label>
        {isEditing ? (
          <input
            type="text"
            className="mt-1 block w-full border rounded-md px-3 py-2"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="mt-1 text-gray-800">{name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Senha</label>
        {isEditing ? (
          <input
            type="password"
            className="mt-1 block w-full border rounded-md px-3 py-2"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        ) : (
          <p className="mt-1 text-gray-800">********</p>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Salvar
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}
