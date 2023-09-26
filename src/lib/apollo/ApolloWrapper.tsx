"use client"

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ReactNode } from "react";

type ApolloProviderProps = {
  children: ReactNode,
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    fetchOptions: { cache: "no-store" },
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: typeof window === "undefined" ?
      ApolloLink.from([
        new SSRMultipartLink({
          stripDefer: true,
        }),
        httpLink,
      ])
      : httpLink,
  })
}

// Apollo by default do not run Error Massages, so I have to add it manually
loadDevMessages();
loadErrorMessages();

const ApolloWrapper = ({ children }: ApolloProviderProps) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider >
  )
}

export default ApolloWrapper