import { columns } from "@/app/eleves/columns";
import { DataTable } from "@/components/data-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { del, get } from "@/lib/api";
import { Classe, Eleve, Matiere } from "@/types";
import { redirect } from "next/navigation";
// import { DeleteButton } from "./(components)/deleteButton";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await get<Classe>(`/Classes/${params.id}?eleves=true`).catch(
    (err) => {
      redirect("/");
    }
  );

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl flex justify-between">
            <span>
              {data.niveau}
            </span>
          </CardTitle>
          <CardDescription className="text-xl">
            {data.professeur.prenom} {" "} {data.professeur.nom}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-[480px] overflow-y-auto">
          {data.eleves && <DataTable columns={columns} data={data.eleves} />}
        </CardContent>
        <CardFooter className="flex flex-row-reverse gap-4">
          {/* <DeleteButton></DeleteButton> */}
        </CardFooter>
      </Card>
    </div>
  );
}
