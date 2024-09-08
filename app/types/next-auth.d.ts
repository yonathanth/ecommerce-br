import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null; // Add role to the user in the session
    };
  }

  interface User {
    id: string;
    role?: string | null; // Ensure the user has an id and a role
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // Add id to the JWT token
    role?: string | null; // Add role to the JWT token
  }
}
