"use client";

import { NoticiaFormData, noticiaSchema } from "@/utils/date";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function NewsForm({
  noticia,
  onSuccess,
}: {
  noticia?: { id: number; titulo: string; conteudo: string; categoria: string };
  onSuccess?: () => void;
}) {
  async function onSubmit2(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoticiaFormData>({
    resolver: zodResolver(noticiaSchema),
  });

  const onSubmit = (data: NoticiaFormData) => {
    console.log(data.titulo);
  };

  return (
    <Card className="max-w-md mx-auto p-4">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Label htmlFor="titulo">Título:</Label>
            <Input
              id="titulo"
              {...register("titulo")}
              placeholder="Digite o título"
            />
            {errors.titulo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.titulo.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="conteudo">Conteúdo:</Label>
            <Textarea
              id="conteudo"
              {...register("conteudo")}
              placeholder="Digite o conteúdo"
              rows={4}
            />
            {errors.conteudo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.conteudo.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <Label htmlFor="categoria">Categoria:</Label>
            <Select onValueChange={(value: any) => console.log(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="cultura">Cultura</SelectItem>
                <SelectItem value="esportes">Esportes</SelectItem>
              </SelectContent>
            </Select>
            {errors.categoria && (
              <p className="text-red-500 text-sm mt-1">
                {errors.categoria.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
