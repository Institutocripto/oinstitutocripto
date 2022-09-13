import { gql, useQuery } from "@apollo/client";

import { useApp } from "../../contexts/useApp";
import { SubscribeButton } from "../SubscribeButton";

import "./styles.scss";

const GET_RECURSOS = gql`
  query GetRecursos {
    recursos(first: 50) {
      titulo
    }
  }
`;

export function CTASection() {
  const { data } = useQuery(GET_RECURSOS);
  const { precoCurso } = useApp();

  return (
    <section className="cta">
      <div className="section__content cta__content">
        <span className="legend">
          Os professores do instituto cripto são os maiores especialistas do
          mercado
        </span>
        <h2>
          Dê o primeiro passo e{" "}
          <strong className="blur-text">torne-se expert</strong>
        </h2>
        <span className="cta__price-legend">Por apenas</span>

        <p className="cta__price">
          R${" "}
          <strong>
            {(precoCurso ?? 0).toLocaleString("pt-br", {
              style: "decimal",
              minimumFractionDigits: 2,
            })}
          </strong>{" "}
          por mês no plano anual
        </p>

        <SubscribeButton />

        {/* grid */}
        <ul>
          {data?.recursos?.map(({ titulo }) => (
            <li key={titulo}>{titulo}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
