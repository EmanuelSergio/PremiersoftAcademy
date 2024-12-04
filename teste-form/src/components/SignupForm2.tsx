"use client";

import { UserData } from "@/types";
import { useState } from "react";

export default function SignupForm2() {
  const [user, setUser] = useState<UserData>({
    name: "",
    email: "",
    adress: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  };

  return <></>;
}
