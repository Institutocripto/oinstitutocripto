import { useState, useRef, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import { ArrowIcon } from "../../assets/icons/ArrowIcon";

import "./styles.scss";

const GET_TESTEMUNHOS = gql`
  query GetTestemunhos {
    testemunhos(orderBy: publishedAt_ASC) {
      conteudo
      cargo
      id
      nome
      imagem {
        url
      }
    }
  }
`;

export function TestimonialsSection() {
  const { data } = useQuery(GET_TESTEMUNHOS);
  const [slideIndex, setSlideIndex] = useState(0);

  const carrouselContainerRef = useRef(null);

  const maxSlideIndex = data?.testemunhos?.length - 1;

  useEffect(() => {
    if (carrouselContainerRef.current && data) {
      const childWidth = carrouselContainerRef.current.children[0].clientWidth;

      carrouselContainerRef.current.style.transform = `translateX(-${
        (childWidth + 28) * slideIndex
      }px)`;
    }
  }, [slideIndex]);

  function handleNextButton() {
    if (slideIndex === maxSlideIndex) {
      return;
    }

    setSlideIndex(slideIndex + 1);
  }

  function handlePreviousButton() {
    if (slideIndex === 0) {
      return;
    }

    setSlideIndex(slideIndex - 1);
  }

  return (
    <section className="section__container testimonials">
      <div className="section__content testimonials__content">
        <h2>O que estão falando por ai.</h2>

        <div style={{ position: "relative" }}>
          <div className="testimonials__actions">
            <button
              type="button"
              className="testimonials__button"
              title="Testemunha Anterior"
              disabled={slideIndex === 0}
              onClick={handlePreviousButton}
            >
              <ArrowIcon />
            </button>
            <button
              type="button"
              className="testimonials__button"
              title="Próxima testemunha"
              disabled={slideIndex === maxSlideIndex}
              onClick={handleNextButton}
            >
              <ArrowIcon />
            </button>
          </div>

          <div className="testimonials__list" ref={carrouselContainerRef}>
            {data?.testemunhos?.map(
              ({ conteudo, cargo, id, nome, imagem: { url } }) => (
                <div key={id} className="testimonials__item">
                  <div className="testimonials__item-content">
                    <p>{conteudo}</p>

                    <footer>
                      <img src={url} alt={`Imagem perfil ${nome} ${cargo}`} />
                      <span className="testimonials__item-name">{nome}</span>
                      <span className="testimonials__item-label">{cargo}</span>
                    </footer>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
