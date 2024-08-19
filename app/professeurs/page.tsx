import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

import { Button } from "@/components/ui/button";
import { get } from "@/lib/api";
import { Eleve, Professeur } from "@/types";
import Link from "next/link";

export default async function Page() {
  const data = await get<Professeur[]>("/Professeurs");

  return (
    <div className="w-full">
      <div className="flex items-center mb-4 justify-between">
        <h1 className="text-xl">Professeurs</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
