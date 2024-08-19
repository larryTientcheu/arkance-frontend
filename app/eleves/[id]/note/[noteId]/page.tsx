"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { get, put } from "@/lib/api";
import { Matiere, Notes } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function EditNotePage({ params }: { params: { id: string; noteId: string } }) {
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useState<Notes | null>(null);
  const [matieres, setMatieres] = useState<Matiere[]>([]);

  const { id: eleveId, noteId } = params;
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const [fetchedNote, fetchedMatieres] = await Promise.all([
        get<Notes>(`/Notes/${noteId}`),
        get<Matiere[]>("/Matieres"),
      ]);
      setNote(fetchedNote);
      setMatieres(fetchedMatieres);
      setIsLoading(false);
    }
    fetchData();
  }, [noteId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!note) return;

    await put(`/Notes/${noteId}`, note);
    setIsLoading(false);
    toast(`La note a été modifiée`);
    router.push(`/eleves/${eleveId}`);
    router.refresh();
  };

  if (!note) return <div>Chargement...</div>;

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Modifier la note</CardTitle>
          <CardDescription>Modifiez les informations de la note</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 items-center mb-4 justify-between">
          {matieres.length > 0 && (
              <Select
                name="matiereId"
                disabled
                value={note.matiereId.toString()}
                onValueChange={(value) => setNote({ ...note, matiereId: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Matiere" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {matieres.map((m) => (
                      <SelectItem key={m.id} value={m.id.toString()}>
                        {m.nom}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
            <Input
              name="note"
              type="number"
              max={20}
              min={0}
              step="any"
              placeholder="Note"
              value={note.valeur}
              onChange={(e) => setNote({ ...note, valeur: parseInt(e.target.value, 10) })}
            />
            <Input
              name="appreciation"
              type="text"
              placeholder="Appreciation"
              value={note.appreciation}
              onChange={(e) => setNote({ ...note, appreciation: e.target.value })}
            />
            
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 flex-row-reverse">
          <Button disabled={isLoading} type="submit">
            Modifier
          </Button>
          <Button disabled={isLoading} variant="outline">
            <Link href={`/eleves/${eleveId}`}>Annuler</Link>
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
