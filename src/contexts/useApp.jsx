import { createContext, useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { formatCurrency } from "../utils/currency";

const AppContext = createContext({});

const GET_APP = gql`
  query GetApp {
    app(where: { id: "cl7g5bt0l7enu0cj1vtpymztz" }) {
      aula
      checkoutUrl
      emailContato
      intagramUrl
      mentores
      precoCurso
      razaoSocial
      telefoneContato
    }
  }
`;

export function AppContextProvider({ children }) {
  const { data } = useQuery(GET_APP);

  const formattedPrice = formatCurrency(data?.app?.precoCurso ?? 0);

  return (
    <AppContext.Provider value={{ ...data?.app, formattedPrice }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
