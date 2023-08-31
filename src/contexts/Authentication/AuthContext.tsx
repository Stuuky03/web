"use client"
import { api } from "@/lib/api/axios";
import { AxiosResponse } from "axios";
// import { Encrypt } from "@/lib/encrypt/bcrypt";
import { createContext, ReactNode, useEffect, useState } from "react";

type SignUpData = {
  username: string,
  email: string,
  password: string
}

type User = {
  id: string;
  username: string;
  email: string;
}

type AuthContextData = {
  isAuthenticated: boolean,
  user: User,
  signUp: (data: SignUpData) => Promise<AxiosResponse>
}


type AuthProvider = {
  children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<User>({ id: '', username: '', email: '' })
  const isAuthenticated = false;

  async function signUp({ username, email, password }: SignUpData) {
    // const hashedPassword = await Encrypt.cryptPassword(password)
    const response = await api.post("/user/create", {
      username,
      email,
      password
    })


    return response
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}