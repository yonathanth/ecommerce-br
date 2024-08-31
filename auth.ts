import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma/client";
import bcrypt from "bcrypt";

interface Credentials {
  email: string;
  password: string;
}
export const authOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

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

        return passwordMatch ? user : null;
      },
    }),
  ],
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
