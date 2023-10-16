"use client"
import { api } from "@/lib/api/axios";
import { AxiosResponse } from "axios";
import { createContext, ReactNode, useState } from "react";

type SignUpData = {
  username: string,
  email: string,
  password: string
}
type LoginData = {
  emailOrUsername: string,
  password: string
}

type User = {
  id: string;
  username: string;
  email: string;
}

type AuthContextData = {
  login: (data: LoginData) => void
  isAuthenticated: boolean,
  user: User | null | undefined,
  signUp: (data: SignUpData) => Promise<AxiosResponse>
}


type AuthProviderProps = {
  children: ReactNode,
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>()
  const isAuthenticated = false;

  async function login({ emailOrUsername, password }: LoginData) {
    console.log(`usernameOrEmail: ${emailOrUsername} - password: ${password}`)
  }

  async function signUp({ username, email, password }: SignUpData) {
    // const hashedPassword = await Encrypt.cryptPassword(password)
    const response = await api.post("/user/create", {
      username,
      email,
      password
    }, {
      validateStatus: status => (status < 500)
    })

    console.log(`Request Completed - Response Code: ${response.status}`)
    return response
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signUp, login }}>
      {children}
    </AuthContext.Provider>
  )
}