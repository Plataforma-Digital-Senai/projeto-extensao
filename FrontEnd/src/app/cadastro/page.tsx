'use client';
import React, { useState, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StyledMaskDemo() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ra, setRa] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const toast = useRef(null);
    const showInfo = () => {
    if (!validateEmail(email)) {
        setEmailError("E-mail inválido");
        return; 
    }

    setEmailError("");
    toast.current.show({ severity: 'info', detail: 'Usuário cadastrado com sucesso!' });
};

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const options = ['Cadastrar', 'Entrar'];
    const [opcao, setopcao] = useState(options[0]);

    const cursos = [
        { label: 'Curso 1', value: 'Curso 1' },
        { label: 'Curso 2', value: 'Curso 2' },
    ];

    const turmas = [
        { label: 'Turma A', value: 'Turma A' },
        { label: 'Turma B', value: 'Turma B' },
    ];

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">

                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-extrabold text-blue-800 mb-2 text-center ">UniSenai</h1>
                    <h2 className=" font-bold mb-6 text-center text-xl">Seja bem-vindo!</h2>

                    <div className=" w-60 flex justify-center mb-6 bg-[var(--fundo-botao)] p-2 rounded-xl m-auto border-1 border-[var(--botao)]">
                        <div className="card flex justify-center">
                            <SelectButton value={opcao} onChange={(e) => setopcao(e.value)} options={options} className="flex flex-row-reverse w-55 h-8 pl-1.25 custom-selectbutton" style={{ borderRadius: '13px' }} />
                        </div>
                    </div>

                    <form className="grid grid-cols-2 gap-4 text-sm text-black">

                        <div className="flex flex-col gap-1">
                            <label>Nome:</label>
                            <InputText value={nome} onChange={(e) => setNome(e.target.value)} className="w-full h-10" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>RA/NI:</label>
                            <InputText value={ra} onChange={(e) => setRa(e.target.value)} className="w-full h-10" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>Curso:</label>
                            <Dropdown value={curso} options={cursos} onChange={(e) => setCurso(e.value)}
                                placeholder="Selecione" className="w-full h-10" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>Turma:</label>
                            <Dropdown value={turma} options={turmas} onChange={(e) => setTurma(e.value)}
                                placeholder="Selecione" className="w-full h-10" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label>Email:</label>
                            <InputText
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={() => {
                                    if (!validateEmail(email)) {
                                        setEmailError("E-mail inválido");
                                    } else {
                                        setEmailError("");
                                    }
                                }}
                                className={`w-full h-10 ${emailError ? 'border border-red-500' : ''}`}
                            />
                            {emailError && <span className="text-red-500 text-xs">{emailError}</span>}
                        </div>

                        <div className="flex flex-col gap-1 relative">
                            <label>Senha:</label>
                            <Password
                                inputStyle={{ width: '100%', height: '40px' }}
                                inputClassName="w-full"
                                toggleMask
                                feedback={false}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <div className="flex flex-col gap-1 col-span-2">
                            <label>CPF:</label>
                            <InputMask
                                value={cpf}
                                onChange={(e) => setCpf(e.value as string)}
                                mask="999.999.999-99"
                                placeholder="000.000.000-00"
                                className="w-full h-10"
                            />
                        </div>

                    </form>

                    <div className="card flex justify-center mt-3">
                        <Toast ref={toast} />
                        <div className="flex flex-wrap gap-2">
                            <Button label="Cadastrar" severity="info" onClick={showInfo} className="custom-button" />
                        </div>
                    </div>

                </div>

                <div className="hidden md:block w-1/2 relative">
                    <img
                        src="./image/fundo-azul.jpeg"
                        alt="Fundo"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}
