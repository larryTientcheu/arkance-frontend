"use client";

import { Button } from "@/components/ui/button";
import { del } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";

export const DeleteButton: FC = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const deleteStudent = async () => {
    await del(`/Eleves/${params.id}`);
    router.replace("/eleves/");
  };

  return (
    <Button onClick={() => deleteStudent()} variant="destructive">
      Supprimer
    </Button>
  );
};
