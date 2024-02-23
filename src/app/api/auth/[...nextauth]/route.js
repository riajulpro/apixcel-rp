import { connectDB } from "@/lib/connect";
import User from "@/models/userModels";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
  try {
    await connectDB();

    const user = await User.findOne({
      email: credentials.email,
    });

    if (!user) throw new Error("Wrong credentials!");

    const isCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    console.log("There is an error logging in: ", error);
    throw new Error("Something went wrong!");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Login failed!");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.email = user.email;
        token._id = user._id;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.email = token.email;
        session.user._id = token._id;
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
