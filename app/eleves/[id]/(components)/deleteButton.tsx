"use client";

import { Button } from "@/components/ui/button";
import { del } from "@/lib/api";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const DeleteButton: FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  const deleteStudent = async () => {
    await del(`/Eleves/${id}`);
    router.push("/eleves")
    router.refresh()
  };

  return (
    <Button onClick={() => deleteStudent()} variant="destructive">
      Supprimer
    </Button>
  );
};
