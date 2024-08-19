"use client";

import { Button } from "@/components/ui/button";
import { Eleve, Professeur } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Professeur>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Prenom",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
];
