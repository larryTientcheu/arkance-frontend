"use client";

import { Button } from "@/components/ui/button";
import { Eleve } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Eleve>[] = [
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
  {
    accessorKey: "classeId",
    header: "Classe",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex flex-row-reverse gap-4">
		  <Button size="icon" variant="ghost" onClick={() => console.log(item.id)}>
			<Link href="#"><Trash2Icon color="red" size={18} /></Link>
          </Button>
          <Button asChild size="icon" variant="link" >
		  	<Link href={`/eleves/${item.id}`}><EyeIcon size={18} /></Link>
          </Button>
        </div>
      );
    },
  },
];
