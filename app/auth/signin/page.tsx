"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SignInPage = () => {
  const [phoneNumber, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/shop";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false, // No immediate redirect
      phoneNumber,
      password,
      callbackUrl,
    });

    if (result?.error) {
      setError("Invalid phone number or password.");
    } else {
      // Fetch the session data after successful login
      const session = await fetch("/api/auth/session").then((res) =>
        res.json()
      );

      // Check the user's role in the session data
      if (session?.user?.role === "admin") {
        // Redirect admins directly to /admin
        router.push("/admin");
      } else {
        // Otherwise, redirect to the previous page (callbackUrl)
        router.push(callbackUrl);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-seventy  to-accentthirty min-h-screen">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-accentthirty">
          Sign in
        </h2>
        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="number"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              value={phoneNumber}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accentthirty hover:bg-thirty focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a
            href="/auth/register"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

// Wrapping SignInPage in Suspense to handle useSearchParams properly
export default function SignInWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInPage />
    </Suspense>
  );
}
