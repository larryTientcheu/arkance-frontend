"use client";

import { Button } from "@/components/ui/button";
import { Eleve } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, EyeIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { DeleteButtonIcon } from "./[id]/(components)/deleteIconButton";

export const columns: ColumnDef<Eleve>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
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
          <DeleteButtonIcon id={item.id} />
          <Button asChild size="icon" variant="link" >
            <Link href={`/eleves/${item.id}`}><EyeIcon size={18} /></Link>
          </Button>
        </div>
      );
    },
  },
];
