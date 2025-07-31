import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth"

declare module "next-auth" {
  interface User {
    token?: string
  }

  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials")
          return null
        }

        try {
       const res = await fetch("http://localhost:5000/auth/signin", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: credentials?.email,
    password: credentials?.password,
  }),
})

const responseData = await res.json()

console.log("responseData", responseData);
if (responseData?.token) {
  const user = responseData

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token: user.token,
    role: user.role,
    companyId: user.companyId,
  } as any
}

        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token
      }
      return token
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  pages: {
    signIn: "/validate-access-code",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development", // Enable debug logs in development
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
