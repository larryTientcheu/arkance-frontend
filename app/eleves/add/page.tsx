import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { get } from "@/lib/api";
import { Eleve } from "@/types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";

export default async function Page() {
	const data = await get<Eleve[]>("/Eleves")

	return (
		<div className="w-full">
			<div className="flex flex-col gap-4 items-center mb-4 justify-between">
                <Input type="text" placeholder="Nom" />
                <Input type="text" placeholder="Prenom" />
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="Male">Homme</SelectItem>
                        <SelectItem value="Female">Femme</SelectItem>
                        <SelectItem value="Unknown">Autre</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Classe" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="Male">Homme</SelectItem>
                        <SelectItem value="Female">Femme</SelectItem>
                        <SelectItem value="Unknown">Autre</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
			</div>
		</div>
	);
}
