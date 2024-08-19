import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

import { Button } from "@/components/ui/button";
import { get } from "@/lib/api";
import { Classe } from "@/types";
import Link from "next/link";

export default async function ClassPage() {
	const data = await get<Classe[]>("/Classes")  
	return (
		<div className="w-full">
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl">Classes</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
	);
}
