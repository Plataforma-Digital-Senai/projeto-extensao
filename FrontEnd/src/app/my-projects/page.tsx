"use client";
import Sidebar from "@/components/sidebar";
import { Projeto } from "./projeto";
import { useContext } from "react";
import { ProjetoContext } from "../context/projetoProvider";

export default function MeusProjetos() {
	const projetos = useContext(ProjetoContext);

	return (
		<div className="w-full h-screen flex justify-center items-center max-md:items-start">
			<Sidebar session_token_role="Estudante" />
			<main className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:py-10 max-md:gap-5">
				{projetos.map((projeto, index) => (
					<Projeto
						key={index}
						titulo={projeto.titulo}
						situacao={projeto.situacao}
						imagens={projeto.imagens}
						objetivo={projeto.objetivo}
					/>
				))}
			</main>
		</div>
	);
}
