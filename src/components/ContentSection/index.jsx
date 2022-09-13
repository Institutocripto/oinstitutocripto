import { gql, useQuery } from "@apollo/client";

import { UserIcon } from "../../assets/icons/UserIcon";
import { PlayIcon } from "../../assets/icons/PlayIcon";

import "./styles.scss";

const GET_CONTEUDOS = gql`
  query GetConteudos {
    conteudos(orderBy: publishedAt_ASC, first: 20) {
      titulo
      bonus
    }
  }
`;

export function ContentSection() {
  const { data } = useQuery(GET_CONTEUDOS);

  return (
    <section className="section__container content" id="mentorship">
      <div className="section__content content__content">
        <span>Do zero ao especialista</span>

        <header>
          <h2>O que você vai aprender</h2>

          <aside>
            <div>
              <span>
                <PlayIcon />+ de 120 aulas
              </span>

              <span>
                <UserIcon />5 Mentores
              </span>
            </div>

            <p>
              Conteúdo altamente aprofundado e especializado, em várioas
              assuntos no mundo cripto para você ir do básico ao avançado
            </p>
          </aside>
        </header>

        <ul>
          {data?.conteudos?.map(({ titulo, bonus }) => (
            <li key={titulo}>
              <span>{titulo}</span>
              {bonus && <strong>Bônus</strong>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
