import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-3 grid-cols-3 gap-4 w-full">
			<Link href="/matieres" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Professeurs par matières enseignées
			</Link>
			<Link href="/classes" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Elèves par classe
			</Link>
			<Link href="/eleves" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Notes d&apos;un éléve
			</Link>
			<Link href="/eleves" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Liste tous les élèves
			</Link>
			<Link href="/eleves/add" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Ajouter un élève
			</Link>
			<Link href="/eleves" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Ajouter une note à un élève
			</Link>
			<Link href="/eleves" className="border border-slate-200 text-center hover:bg-blue-200 cursor-pointer shadow-lg rounded-lg p-8 text-lg transition-all">
				Modifier une note d&apos;un élève
			</Link>
		</div>
	);
}
