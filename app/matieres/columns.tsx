"use client";

import { Button } from "@/components/ui/button";
import { Matiere } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Matiere>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "nom",
    header: "Nom"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const item = row.original;

      return (
        <div className="flex flex-row-reverse gap-4">
          <Button asChild size="icon" variant="link">
            <Link href={`/matieres/${item.id}`}>
              <EyeIcon size={18} />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
