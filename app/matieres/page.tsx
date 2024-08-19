import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

import { get } from "@/lib/api";
import { Matiere } from "@/types";


export default async function Page() {
  const data = await get<Matiere[]>("/Matieres");

  return (
    <div className="w-full">
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl">Matières</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}