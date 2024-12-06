import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma"; // Import Prisma Client

export const authOptions = {
  adapter: PrismaAdapter(prisma), // Use Prisma Adapter
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login", // Error redirect
    verifyRequest: "/login",
    newUser: "/signup", // Redirect for new users
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id; // Attach user ID to session
      }
      return session;
    },
    async signIn({ user }) {
      if (!user) {
        throw new Error("You are not registered. Please sign up first.");
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
