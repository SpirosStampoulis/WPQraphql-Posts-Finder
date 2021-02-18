import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://demo.wpgraphql.com/graphql",
  cache: new InMemoryCache()
});
