import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { get } from "@/lib/api";
import { Classe, Eleve } from "@/types";
import Link from "next/link";
import { FormEvent } from "react";

export default async function Page() {
    const data = await get<Eleve[]>("/Eleves")
    const classes = await get<Classe[]>("/Classes")

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
     
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        // const response = await fetch('/api/submit', {
        //   method: 'POST',
        //   body: formData,
        // })
      }

    return (
        <form className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">Ajouter un élève</CardTitle>
                    <CardDescription>Remplissez le formulaire pour ajouter un élève</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4 items-center mb-4 justify-between">
                        <Input name="nom" type="text" placeholder="Nom" />
                        <Input name="prenom" type="text" placeholder="Prenom" />
                        <Select name="genre">
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
                        <Select name="classeId">
                            <SelectTrigger>
                                <SelectValue placeholder="Classe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {classes.map((c) => <SelectItem key={c.id} value={`${c.id}`}>{c.niveau}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4 flex-row-reverse">
                    <Button type="submit">
                        Ajouter
                    </Button>
                    <Button variant="outline">
                        <Link href="/eleves">Annuler</Link>
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
