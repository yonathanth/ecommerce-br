import NextAuth, { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
// Define authOptions with proper types
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "abebe@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        return passwordsMatch ? user : null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // Attach the user's role to the token
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token?.id) {
        session.user.id = token.id;
        session.user.role = token.role; // Attach the user's role to the session
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
  },
};
