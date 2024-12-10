"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Spinner Component
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvgovgyk");

  if (state.succeeded) {
    return (
      <p className="text-center mt-8 text-green-500">
        valeu paizao, tamo junto
      </p>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      {state.submitting && <LoadingSpinner />}
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Formulario</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email:
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                className="border-gray-300"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message" className="text-gray-700 font-medium">
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-gray-100 rounded-sm border border-gray-300 p-2"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className={`w-full p-2 mt-4 text-white rounded ${
                  state.submitting
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {state.submitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
