"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { addUser } from "./_actions/registerUser";

export function RegistrationForm() {
  const [error, action] = useFormState(addUser, {});

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-50 to-blue-50">
      <form
        action={action}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-lg w-full"
      >
        <h1 className="text-2xl font-bold text-center text-purple-800 mb-4">
          Register at Brikti's
        </h1>

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {error.firstName && (
            <div className="text-red-500">{error.firstName}</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {error.lastName && (
            <div className="text-red-500">{error.lastName}</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {error.email && <div className="text-red-500">{error.email}</div>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {error.phoneNumber && (
            <div className="text-red-500">{error.phoneNumber}</div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {error.password && (
            <div className="text-red-500">{error.password}</div>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-purple-700 text-white py-2 rounded-lg shadow hover:bg-purple-800 focus:ring-2 focus:ring-purple-600"
    >
      {pending ? "Registering..." : "Register"}
    </Button>
  );
}
