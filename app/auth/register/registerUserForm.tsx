"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import Link from "next/link"; // Import Link for navigation
import { addUser } from "./_actions/registerUser";

export function RegistrationForm() {
  const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
  const { pending } = useFormStatus();

  const handleSubmit = async (formData: FormData) => {
    const result = await addUser({}, formData);
    if (result?.errors) {
      setFormErrors(result.errors); // Set validation or server errors
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          handleSubmit(formData);
        }}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-lg w-full"
      >
        <h1 className="text-2xl font-bold text-center text-accentthirty mb-4">
          Register at Brikti&apos;s
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
          {formErrors.firstName && (
            <div className="text-red-500">{formErrors.firstName[0]}</div>
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
          {formErrors.lastName && (
            <div className="text-red-500">{formErrors.lastName[0]}</div>
          )}
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
          {formErrors.phoneNumber && (
            <div className="text-red-500">{formErrors.phoneNumber[0]}</div>
          )}
        </div>

        <div className="space-y-2 mb-3">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            required
            className="rounded-lg border border-purple-300 focus:ring-purple-500 focus:border-purple-500"
          />
          {formErrors.password && (
            <div className="text-red-500">{formErrors.password[0]}</div>
          )}
        </div>

        <SubmitButton pending={pending} />

        {/* Add a section for users who already have an account */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-purple-600 font-semibold hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-accentthirty text-white mt-4 py-2 rounded-lg shadow hover:bg-thirty focus:ring-2 focus:ring-purple-600"
    >
      {pending ? "Registering..." : "Register"}
    </Button>
  );
}
