import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl80mid6n0ezw01uib17rctny/master",
  cache: new InMemoryCache(),
});
