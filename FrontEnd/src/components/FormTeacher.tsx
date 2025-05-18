const FormTeacher = () => {
  return (
    <div className="w-full max-w-5xl my-32 !bg-forms-teacher-bg rounded-xl shadow-xl py-8 px-8">
      <form action="" className="">
        <div className="w-32 mx-auto mb-20">
          <img
            src="./image/user-icon.png"
            alt="Imagem de perfil padrão"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex space-x-4 px-3">
          <div className="w-1/2">
            <label>Nome:</label>
            <input
              className="border border-text bg-input-teacher-bg-a px-4 py-2 rounded-xl w-full"
              type="text"
              placeholder="Rodrigo Souza"
              disabled
            />
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
        <div className="flex justify-center pt-20">
          <button className="bg-btn-teacher-bg px-28 py-2 rounded-xl !text-white">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTeacher;
