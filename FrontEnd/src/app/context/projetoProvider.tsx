"use client";
import { createContext, type ReactNode } from "react";

const projetos = [
	{
		id: 1,
		titulo: "Amor Inclusivo",
		imagens: [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGmgGhWRoKLk1o0afoQ23q_soUSf_As5A0A&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGmgGhWRoKLk1o0afoQ23q_soUSf_As5A0A&s",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGmgGhWRoKLk1o0afoQ23q_soUSf_As5A0A&s",
		],
		objetivo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, repellendus. Facere maiores esse assumenda aspernatur molestias at fugit sint blanditiis quisquam corrupti consectetur sed, voluptate corporis consequatur, quaerat sit quod!",
		situacao: "Em andamento",
	},
	{
		id: 2,
		titulo: "Amor Inclusivo 2",
		imagens: [
			"https://i.pinimg.com/736x/2a/80/60/2a8060400f4868f904e1e35d381fecfa.jpg",
			"https://i.pinimg.com/736x/2a/80/60/2a8060400f4868f904e1e35d381fecfa.jpg",
			"https://i.pinimg.com/736x/2a/80/60/2a8060400f4868f904e1e35d381fecfa.jpg",
		],
		objetivo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, repellendus. Facere maiores esse assumenda aspernatur molestias at fugit sint blanditiis quisquam corrupti consectetur sed, voluptate corporis consequatur, quaerat sit quod!",
		situacao: "Em andamento",
	},
	{
		id: 3,
		titulo: "Amor Inclusivo 3",
		imagens: [
			"https://i.pinimg.com/736x/1d/07/6e/1d076ee87cd5c67e16fa91828bb52d20.jpg",
			"https://i.pinimg.com/736x/1d/07/6e/1d076ee87cd5c67e16fa91828bb52d20.jpg",
		],
		objetivo:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, repellendus. Facere maiores esse assumenda aspernatur molestias at fugit sint blanditiis quisquam corrupti consectetur sed, voluptate corporis consequatur, quaerat sit quod!",
		situacao: "Em andamento",
	},
];

export const ProjetoContext = createContext(projetos);

export const ProjetoProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ProjetoContext.Provider value={projetos}>
			{children}
		</ProjetoContext.Provider>
	);
};
