import { columns } from "@/app/professeurs/columns";
import { DataTable } from "@/components/data-table";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { del, get } from "@/lib/api";
import { Matiere } from "@/types";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await get<Matiere>(`/Matieres/${params.id}?professeurs=true`).catch(
    (err) => {
      redirect("/");
    }
  );

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl flex justify-between">
              {data.nom}
          </CardTitle>
        </CardHeader>
        <CardContent className="max-h-[480px] overflow-y-auto">
          {data.professeurs && <DataTable columns={columns} data={data.professeurs} />}
        </CardContent>
        <CardFooter className="flex flex-row-reverse gap-4">
          {/* <DeleteButton></DeleteButton> */}
        </CardFooter>
      </Card>
    </div>
  );
}
