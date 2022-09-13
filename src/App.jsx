import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { apolloClient } from "./lib/apollo";
import { AppContextProvider } from "./contexts/useApp";

import { Home } from "./pages/Home";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}
