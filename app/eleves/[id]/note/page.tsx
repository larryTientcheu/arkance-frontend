"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { get, post } from "@/lib/api";
import { Eleve, Matiere } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState("");
  const [matiereId, setMatiereId] = useState("");
  const [appreciation, setAppreciation] = useState("");
  const [matieres, setMatieres] = useState<Matiere[]>([]);
  const [matieresEleve, setMatieresEleve] = useState<Matiere[]>([]);

  const eleveId = params.id;

  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const fetchedMatieres = await get<Matiere[]>("/Matieres");
      const eleve = await get<Eleve>(`/Eleves/${eleveId}?notes=true`);

      // find matieres which are not in the eleve.notes
      // since the eleve already have a note for this matiere, we don't need to show it
      const matieres = fetchedMatieres.filter((m) => !eleve.notes?.some((n) => n.matiereId === m.id));

      setMatieres(matieres);
      setIsLoading(false);
    }
    fetchData();
  }, []);



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault();

    const formData = {
      appreciation,
      eleveId,
      matiereId,
      valeur: note,
    };

    await post("/Notes", formData);
    setIsLoading(false)
    toast(`La note a été ajoutée`);
    router.push(`/eleves/${eleveId}`)
    router.refresh()

  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Ajouter une note</CardTitle>
          <CardDescription>Remplissez le formulaire pour ajouter une note à un élève</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 items-center mb-4 justify-between">
            <Input
              name="note"
              type="number"
              max={20}
              min={0}
              step="any"
              placeholder="Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <Input
              name="appreciation"
              type="text"
              placeholder="Appreciation"
              value={appreciation}
              onChange={(e) => setAppreciation(e.target.value)}
            />
            {matieres.length > 0 && <Select name="matiereId" value={matiereId} onValueChange={(value) => setMatiereId(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Matiere" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {matieres.map((m) => (
                    <SelectItem key={m.id} value={`${m.id}`}>
                      {m.nom}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 flex-row-reverse">
          <Button disabled={isLoading} type="submit">Ajouter</Button>
          <Button disabled={isLoading} variant="outline">
            <Link href={`/eleves/${eleveId}`}>Annuler</Link>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
