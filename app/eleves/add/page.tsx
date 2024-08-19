"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { get, post } from "@/lib/api";
import { Classe, Eleve } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [genre, setGenre] = useState("");
    const [classeId, setClasseId] = useState("");
    const [classes, setClasses] = useState<Classe[]>([]);

    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const fetchedClasses = await get<Classe[]>("/Classes");
            setClasses(fetchedClasses);
            setIsLoading(false);
        }
        fetchData();
    }, []);



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        event.preventDefault();

        const formData = {
            nom,
            prenom,
            genre,
            classeId,
        };

        await post("/Eleves", formData);
        setIsLoading(false)
        toast(`L'élève ${formData.nom} ${formData.prenom} a été rajouté au système`);
        router.push("/eleves")
        router.refresh()

    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">Ajouter un élève</CardTitle>
                    <CardDescription>Remplissez le formulaire pour ajouter un élève</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-4 items-center mb-4 justify-between">
                        <Input
                            name="nom"
                            type="text"
                            placeholder="Nom"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <Input
                            name="prenom"
                            type="text"
                            placeholder="Prenom"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        <Select name="genre" value={genre} onValueChange={(value) => setGenre(value)}>
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
                        {classes.length > 0 && <Select name="classeId" value={classeId} onValueChange={(value) => setClasseId(value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Classe" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {classes.map((c) => (
                                        <SelectItem key={c.id} value={`${c.id}`}>
                                            {c.niveau}
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
                        <Link href="/eleves">Annuler</Link>
                    </Button>
                </CardFooter>
            </Card>
        </form>
    );
}
