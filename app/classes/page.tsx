import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

import { Button } from "@/components/ui/button";
import { get } from "@/lib/api";
import { Classe } from "@/types";
import Link from "next/link";

export default async function ClassPage() {
	const data = await get<Classe[]>("/Classes")
  console.log(data);
	return (
		<div className="w-full">
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl">Classes</h1>
        <Button asChild variant="secondary">
          <Link href="/eleves/add">Ajouter un Professeur</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
	);
}
