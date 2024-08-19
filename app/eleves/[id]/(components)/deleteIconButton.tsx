"use client";

import { Button } from "@/components/ui/button";
import { del } from "@/lib/api";
import { Trash2Icon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { FC } from "react";

export const DeleteButtonIcon: FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  const deleteStudent = async () => {
    await del(`/Eleves/${id}`);
    router.push("/eleves")
    router.refresh()
  };

  return (
    <Button size="icon" variant="ghost" onClick={() => deleteStudent()}>
      <Trash2Icon color="red" size={18} />
    </Button>
  );
};
