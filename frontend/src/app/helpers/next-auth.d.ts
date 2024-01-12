import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
    };
    backendTokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
