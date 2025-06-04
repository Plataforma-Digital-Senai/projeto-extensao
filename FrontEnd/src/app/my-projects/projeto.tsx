"use client";
import type { ProjetoProps } from "../types/projeto";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { DetalhesMeusProjetos } from "./details";
import Image from "next/image";

type ProjetoComponentProps = Pick<
	ProjetoProps,
	"titulo" | "objetivo" | "imagens" | "situacao"
>;

export const Projeto = ({
	titulo,
	objetivo,
	imagens,
	situacao,
}: ProjetoComponentProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="bg-[#1D154A] border-5 border-[#1D154A] w-55 h-60 flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/40">
					<div className="h-40 rounded-t-md">
						<img
							src={imagens[1]}
							alt=""
							width={300}
							height={300}
							className="h-40 rounded-t-md"
						/>
					</div>
					<div className="bg-[#1D154A] h-20 flex justify-center items-center">
						<h1 className="text-white text-2xl">{titulo}</h1>
					</div>
				</Card>
			</DialogTrigger>
			<DetalhesMeusProjetos
				titulo={titulo}
				objetivo={objetivo}
				imagens={imagens}
				situacao={situacao}
			/>
		</Dialog>
	);
};
