"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();

	return (
		<Card className="flex items-center  justify-between p-4 mb-8">
			<Link href="/" className="text-xl font-light w-2/12"><h1 >Arkance GS</h1></Link>
			
			<div className="flex gap-10">
				<Link
					className={`hover:bg-blue-100 rounded-lg transition-all hover:text-blue-600 p-2 ${
						pathname.includes("/professeurs") ? "text-blue-600 bg-blue-200" : ""
					}`}
					href="/professeurs"
				>
					Professeurs
				</Link>
				<Link
					className={`hover:bg-blue-100 rounded-lg transition-all hover:text-blue-600 p-2 ${
						pathname.includes("/eleves") ? "text-blue-600 bg-blue-200" : ""
					}`}
					href="/eleves"
				>
					Élèves
				</Link>
				<Link
					className={`hover:bg-blue-100 rounded-lg transition-all hover:text-blue-600 p-2 ${
						pathname.includes("/classes") ? "text-blue-600 bg-blue-200" : ""
					}`}
					href="/classes"
				>
					Classes
				</Link>
				<Link
					className={`hover:bg-blue-100 rounded-lg transition-all hover:text-blue-600 p-2 ${
						pathname.includes("/matieres") ? "text-blue-600 bg-blue-200" : ""
					}`}
					href="/matieres"
				>
					Matières
				</Link>
			</div>
		</Card>
	);
}
