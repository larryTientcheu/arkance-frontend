"use client";

import { Button } from "@/components/ui/button";
import { Classe } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Classe>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "niveau",
    header: "Niveau",
  },


  {
    accessorKey: "professeur.nom",
    header: "Professeur Nom"
  },

  {
    accessorKey: "professeur.prenom",
    header: "Professeur Prenom"
  },
  {
    accessorKey: "professeurId",
    header: "Professeur Matricule",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex flex-row-reverse gap-4">
          {/* <Button size="icon" variant="ghost" onClick={() => console.log(item.id)}>
			<Link href="#"><Trash2Icon color="red" size={18} /></Link>
          </Button> */}
          <Button asChild size="icon" variant="link">
            <Link href={`/classes/${item.id}`}>
              <EyeIcon size={18} />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
