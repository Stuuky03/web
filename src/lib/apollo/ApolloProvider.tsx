"use client"

import { ApolloClient, InMemoryCache, ApolloProvider as ApolloClientProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ReactNode } from "react";

type ApolloProviderProps = {
  children: ReactNode,
}

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache()
})

// Apollo by default do not run Error Massages, so I have to add it manually
loadDevMessages();
loadErrorMessages();

const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  )
}

export default ApolloProvider