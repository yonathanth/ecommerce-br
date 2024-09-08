"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-400">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <p className="text-gray-600">Checking session...</p>
        </div>
      </div>
    );
  }
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-400">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome back, {session.user?.name || "shopper"}!
          </h1>
          <p className="mt-4 text-gray-600">You are already signed in.</p>
          <Link href="/shop">
            <Button className="mt-6 mr-4 bg-purple-600 text-white hover:bg-purple-700 transition duration-300">
              Continue Shopping
            </Button>
          </Link>
          <button
            onClick={() => signOut()}
            className="mt-4 text-red-500 hover:underline"
          >
            Not you? Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-400">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h1>
        <p className="text-gray-600 mb-6">
          Please Sign in to continue shopping.
        </p>
        <Link href="/auth/signin">
          <button className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition duration-300">
            Sign In with Credentials
          </button>
        </Link>

        <p className="mt-6 text-sm text-gray-500">
          Don&apos;s have an account?{" "}
          <Link
            className="text-purple-600 hover:underline"
            href="/auth/register"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
