import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma/client";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) return null;

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const currentUser = await prisma.user.findUnique({
          where: { email },
        });

        if (!currentUser) return null;

        const passwordMatch = await bcrypt.compare(
          password,
          currentUser.hashedPassword
        );

        return passwordMatch ? currentUser : null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
