"use server";

import prisma from "@/prisma/client";
import { z } from "zod";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  password: z.string().min(6),
});

export async function addUser(prevState: unknown, formData: FormData) {
  const result = userSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    return { errors: result.error.formErrors.fieldErrors };
  }

  const data = result.data;

  // Check if the email already exists in the database
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    return { errors: { email: ["Email is already in use"] } };
  }

  const hashedPassword = await hash(data.password, 10);

  await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      hashedPassword,
    },
  });

  redirect("/auth/signin");
}
