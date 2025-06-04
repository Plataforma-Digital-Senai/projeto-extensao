'use client';
import React, { useState, useRef } from "react";
import { InputText } from 'primereact/inputtext';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    const toast = useRef(null);
    const showInfo = () => {
        if (!validateEmail(email)) {
            setEmailError("E-mail inválido");
            return;
        }

        setEmailError("");
        if (toast.current) {
            toast.current.show({ severity: 'info', detail: 'Usuário cadastrado com sucesso!' });
        }
        setEmail('');
        setSenha('');
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const options = ['Cadastrar', 'Entrar'];
    const [opcao, setopcao] = useState(options[1]);

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden h-[600px]">
                <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-extrabold text-blue-800 mb-2 text-center">UniSenai</h1>
                    <h2 className="font-bold mb-4 text-center text-xl">Seja bem-vindo!</h2>

                    <div className="w-full sm:w-72 flex justify-center mb-6 bg-[var(--fundo-botao)] p-2 rounded-xl mx-auto border border-[var(--botao)]">
                        <SelectButton
                            value={opcao}
                            onChange={(e) => setopcao(e.value)}
                            options={options}
                            className="flex flex-row-reverse w-full sm:w-64 h-8 pl-1.5 custom-selectbutton mr-6"
                            style={{ borderRadius: '13px' }}
                        />
                    </div>

                    <form className="flex flex-col gap-4 text-sm text-black">
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
                                required className={`w-full h-10 ${emailError ? 'border border-red-500' : ''}`}
                            />
                            {emailError && <span className="text-red-500 text-xs">{emailError}</span>}
                        </div>

                        <div className="relative flex flex-col gap-1">
                            <p className="mb-1">Senha:</p>
                            <InputText
                                type={senhaVisivel ? 'text' : 'password'}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                placeholder="Digite sua senha"
                                required className="w-full h-10 text-sm pl-6 pr-10 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setSenhaVisivel(!senhaVisivel)}
                                className="absolute bottom-0.5 right-3 transform -translate-y-1/2 text-gray-500"
                            >
                                {senhaVisivel ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                            </button>
                        </div>
                    </form>

                    <div className="card flex justify-center mt-6">
                        <Toast ref={toast} />
                        <Button label={opcao} severity="info" onClick={showInfo} className="w-full sm:w-auto custom-button" />
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