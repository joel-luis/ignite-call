import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    avatar_url: string
  }
}
