"use client";
import type { ProjetoProps } from "../types/projeto";
import {
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Upload } from "lucide-react";

type DetalhesProjetoProps = Pick<
	ProjetoProps,
	"titulo" | "objetivo" | "imagens" | "situacao"
>;

export const DetalhesMeusProjetos = ({
	titulo,
	objetivo,
	imagens,
	situacao,
}: DetalhesProjetoProps) => {
	return (
		<DialogContent className="bg-[#DCE6F0]">
			<DialogTitle className="text-center text-2xl">{titulo}</DialogTitle>
			<div className="px-4 space-y-6 md:px-10 md:space-y-10">
				<div className="w-full overflow-x-auto md:overflow-visible">
					<div className="flex flex-row flex-nowrap gap-4 md:flex-row md:justify-center md:space-x-5 md:gap-0">
						{imagens.map((imagem, idx) => (
							<img
								key={idx}
								src={imagem}
								className="w-32 h-24 border-4 border-[#1D154A] rounded-2xl object-cover md:w-50 md:h-35 md:border-5"
								alt={`Imagem ${idx + 1}`}
							/>
						))}
					</div>
				</div>
				<DialogDescription className="text-black text-base md:text-xl">
					{objetivo}
				</DialogDescription>
				<p className="text-base text-center md:text-xl">Situação: {situacao}</p>
			</div>
			<div className="flex flex-col gap-4 items-center md:flex-row md:justify-center md:gap-10">
				<Button className="text-base md:text-xl cursor-pointer bg-[#1D154A] flex items-center justify-center">
					<Download className="mr-2" /> Download Documentação
				</Button>
				<Button className="text-base md:text-xl cursor-pointer bg-[#1D154A] flex items-center justify-center">
					<Upload className="mr-2" /> Upload Documentação
				</Button>
			</div>
		</DialogContent>
	);
};
