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
import { DeleteButton } from "./(components)/deleteButton";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await get<Eleve>(`/Eleves/${params.id}?notes=true`).catch(
    (err) => {
      redirect("/");
    }
  );
  const classes = await get<Classe[]>(`/Classes`);

  const studentsClass = classes.find((c) => c.id === data.classeId);

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl flex justify-between">
            <span>
              {data.nom} {data.prenom}
            </span>{" "}
            <span className="text-xl text-slate-500">Genre: {data.genre}</span>
          </CardTitle>
          <CardDescription className="text-xl">
            {studentsClass?.niveau}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-[480px] overflow-y-auto">
          <div>
            {data.notes &&
              data.notes.map((note) => (
                <div
                  key={note.id}
                  className="border border-slate-200 p-2 my-2 rounded"
                >
                  <h1 className="text-xl font-semibold flex justify-between items-center ">
                    {note.matiere.nom}{" "}
                    <Badge variant="secondary">{note.appreciation}</Badge>
                  </h1>
                  <p className="flex items-center space-8">
                    <span className="text-lg w-16">
                      {note.valeur.toFixed(2)}
                    </span>{" "}
                  </p>
                </div>
              ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-row-reverse gap-4">
          <DeleteButton></DeleteButton>
        </CardFooter>
      </Card>
    </div>
  );
}
