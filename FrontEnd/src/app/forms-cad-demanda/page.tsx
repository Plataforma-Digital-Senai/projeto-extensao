'use client';
import React, { FormEvent, useState, useRef } from 'react';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Sidebar from '@/components/sidebar';
import { Plus } from 'lucide-react';

const FloatingPlusButton = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '60px',
                height: '60px',
                backgroundColor: '#1D154A',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1000, 
            }}
        >
            {children}
        </button>
    );
};

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        nome: '',
        comunidade: '',
        email: '',
        telefone: '',
        descricao: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: keyof typeof formData
    ) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const toast = useRef<Toast>(null);
    const showInfo = () => {
        toast.current?.show({ severity: 'info', detail: 'Cadastro realizado com sucesso', life: 3000 });
    };

    const closeForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="flex min-h-screen relative">
            {/* Sidebar */}
            <div
                style={{
                    pointerEvents: isFormVisible ? 'none' : 'auto',// Desabilita cliques quando o formulário estiver visível
                }}
            >
                <Sidebar session_token_role="estudante" />
            </div>

            {/* Fundo Cinza que desabilita cliques */}
            {isFormVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(128, 128, 128, 0.5)',
                        zIndex: 999,
                    }}
                />
            )}

            {/*Formulário*/}
            <div className="flex-1 flex justify-center items-start p-4">
                {isFormVisible && (
                    <div
                        className="max-w-lg w-full mt-10 p-6 bg-[#DCE6F0] border-2 border-[#1D154A] rounded-lg shadow-lg relative"
                        style={{ zIndex: 1000 }} 
                    >
                        {/*Botão que fecha o card*/}
                        <button
                            onClick={closeForm}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#1D154A',
                                cursor: 'pointer',
                                padding: '0',
                                lineHeight: '1',
                            }}
                            aria-label="Fechar formulário"
                        >
                            X
                        </button>

                        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800">
                            Cadastrar nova demanda
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Nome */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <label className="block text-base font-medium text-black mb-1">
                                        Nome da instituição:
                                    </label>
                                    <InputText
                                        value={formData.nome}
                                        onChange={(e) => handleChange(e, 'nome')}
                                        className="w-full rounded-md shadow-sm"
                                        style={{ border: '3px solid #1D154A', borderRadius: '13px', height: '40px' }}
                                        placeholder="Digite o nome"
                                    />
                                </div>
                            </div>

                            {/* Comunidade */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <label className="block text-base font-medium text-black mb-1">
                                        Comunidade que atende:
                                    </label>
                                    <InputText
                                        value={formData.comunidade}
                                        onChange={(e) => handleChange(e, 'comunidade')}
                                        className="w-full rounded-md shadow-sm"
                                        style={{ border: '3px solid #1D154A', borderRadius: '13px', height: '40px' }}
                                        placeholder="Digite a comunidade"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <label className="block text-base font-medium text-black mb-1">
                                        E-mail para contato:
                                    </label>
                                    <InputText
                                        value={formData.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                        className="w-full rounded-md shadow-sm"
                                        style={{ border: '3px solid #1D154A', borderRadius: '13px', height: '40px' }}
                                        placeholder="Digite o e-mail"
                                    />
                                </div>
                            </div>

                            {/* Telefone */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <label className="block text-base font-medium text-black mb-1">
                                        Telefone para contato:
                                    </label>
                                    <InputText
                                        value={formData.telefone}
                                        onChange={(e) => handleChange(e, 'telefone')}
                                        className="w-full rounded-md shadow-sm"
                                        style={{ border: '3px solid #1D154A', borderRadius: '13px', height: '40px' }}
                                        placeholder="Digite o telefone"
                                    />
                                </div>
                            </div>

                            {/* Descrição */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-sm">
                                    <label className="block text-base font-medium text-black mb-1">
                                        Descrição para a demanda:
                                    </label>
                                    <InputTextarea
                                        value={formData.descricao}
                                        onChange={(e) => handleChange(e, 'descricao')}
                                        className="w-full rounded-md shadow-sm"
                                        style={{ border: '3px solid #1D154A', borderRadius: '13px', height: '100px', resize: 'none' }}
                                        placeholder="Digite a descrição"
                                        autoResize={false}
                                    />
                                </div>
                            </div>

                            {/* Botão */}
                            <div
                                className="card"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '60px',
                                    width: '100%',
                                    margin: '0',
                                    padding: '0',
                                }}
                            >
                                <Button
                                    label="Cadastrar"
                                    severity="info"
                                    onClick={showInfo}
                                    style={{
                                        backgroundColor: '#1D154A',
                                        color: 'white',
                                        borderRadius: '13px',
                                        height: '40px',
                                        border: 'none',
                                    }}
                                />
                            </div>
                            <Toast ref={toast} />
                        </form>
                    </div>
                )}
            </div>
            {/*Botão +*/}
            <div
                style={{
                    pointerEvents: isFormVisible ? 'none' : 'auto',
                    zIndex: isFormVisible ? 998 : 1000, 
                }}
            >
                <FloatingPlusButton>
                    <Plus size={40} color="#fff" />
                </FloatingPlusButton>
            </div>
        </div>
    );
};

export default FormComponent;