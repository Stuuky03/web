"use client"
import { api } from "@/lib/api/axios";
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
  signUp: (data: SignUpData) => Promise<void>
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

    try {

      const response = await api.post("/user/create", {
        username,
        email,
        password
      })

      console.log(response.data)

      response.status == 201 ? console.log("Alert: Usuário cadastrado com sucesso") : console.log("Error: Erro ao cadastrar usuário")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}