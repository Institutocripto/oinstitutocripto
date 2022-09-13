import summary01Img from "../../assets/summary_01.png";
import summary02Img from "../../assets/summary_02.png";

import "./styles.scss";

export function SummarySection() {
  return (
    <>
      <section className="section__container summary__container">
        <div className="section__content summary__content">
          <div className="summary__text-wrapper">
            <h2>
              <b>Domine os ativos com maior potencial do mercado financeiro</b>
            </h2>

            <div className="summary__text-paragraph">
              <p>
                Investidor, se você investe em criptomoedas sem saber como
                analisá-las da forma correta e identificar projetos
                promissores,está dando um tiro no escuro.
              </p>

              <p className="summary__list">
                <strong>Se você não sabe:</strong>
                <ul>
                  <li>Como analisar os fundamentos de uma criptomoeda</li>
                  <li>O passo a passo da análise gráfica</li>
                  <li>
                    O Mindset para lucrar sem se deixar levar pelas emoções
                  </li>
                </ul>
              </p>

              <p>
                Seus investimentos são perigosos porque dificilmente irá
                encontrar alguma boa oportunidade no mercado ou projeto
                promissores que multipliquem em 100x seu capital.
              </p>
            </div>
          </div>

          <img
            src={summary01Img}
            alt="Duas mãos brancas segurando uma moeda bitcoin"
          />
        </div>
      </section>
      <section className="section__container summary__container">
        <div className="section__content summary__content">
          <img src={summary02Img} alt="Duas mãos digitando em um notebook" />

          <div className="summary__text-wrapper">
            <h2>
              Essa é a hora de parar de ser inimigo do lucro, e tornar-se um{" "}
              <b>Investidor especialista em cripto</b>
            </h2>

            <div className="summary__text-paragraph">
              <p>
                Chegou o momento decisivo para parar de ter prejuízo nos seus
                investimentos e colocar a sua energia em aprender como ter
                rentabilidade nos ativos com maior potencial de retorno.
              </p>

              <p>
                O instituto cripto alia a teoria à prática de forma simples para
                que você domine o mercado e consiga ter ótimos retornos nas
                primeiras semanas de investimento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
