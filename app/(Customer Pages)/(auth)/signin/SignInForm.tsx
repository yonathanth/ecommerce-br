"use client"; // Mark this as a client component

import { useState } from "react";
import { signIn } from "next-auth/react"; // Import from 'next-auth/react' for client-side use
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams(); // Hook to access search params
  const next = searchParams.get("next"); // Get the next param from the URL

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      // Handle error (e.g., show an error message)
      console.error(result.error);
    } else {
      router.push("./checkout");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="email" className="flex flex-col gap-1">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />
      </label>
      <label htmlFor="password" className="flex flex-col gap-1">
        Password
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-2 py-1"
          required
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Sign In
      </button>
    </form>
  );
}
