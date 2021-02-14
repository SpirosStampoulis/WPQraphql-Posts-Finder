import React from "react";
// import { ApolloProvider } from "@apollo/client";

import "./styles.css";
// import { client } from "./services/apollo";
import PostsFinder from "./components/postsFinder";

export default function App() {
  return (
    // <ApolloProvider client={client}>
      <div className="app">
        <h1 className="title">WPGraphQL Posts Finder</h1>
        <PostsFinder />
      </div>
    // </ApolloProvider>
  );
}
