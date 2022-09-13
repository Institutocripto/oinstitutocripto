import { Header } from "../Header";
import { SubscribeButton } from "../SubscribeButton";

import waveHandImage from "../../assets/wave_hand.png";
import heroBgImage from "../../assets/hero_bg.png";
import avatar1 from "../../assets/avatar_01.png";
import avatar2 from "../../assets/avatar_02.png";
import avatar3 from "../../assets/avatar_03.png";

import { CheckCircleIcon } from "../../assets/icons/CheckCircleIcon";
import { StarIcon } from "../../assets/icons/StarIcon";

import { SocialMedia } from "../SocialMedia";

import "./styles.scss";
import { useApp } from "../../contexts/useApp";

const USER_AVATARS = [avatar1, avatar2, avatar3];

export function HeroSection() {
  const { formattedPrice } = useApp();

  return (
    <div className="hero">
      <Header />
      <div className="hero__container">
        <div className="hero__content mx-auto">
          <div className="hero__wrapper">
            <span className="tag">
              <img src={waveHandImage} alt="" />
              Os melhores mentores de criptomoedas você encontra aqui
            </span>
            <h1>
              Invista de forma segura no mercado de criptomoedas, e conquiste a
              sua liberdade financeira.
            </h1>
            <p>
              Uma escola cripto feita pelos melhores mentores do mercado. Mais
              de 100 aulas práticas sobre análise fundamentalista, análise
              gráfica, mindset e muito mais…
            </p>

            <div className="hero__footer">
              <SubscribeButton />

              <p>
                <span>Assine a partir</span>
                <span>
                  de <strong>{formattedPrice}</strong>
                  <b> por mês no plano.</b>
                </span>
              </p>
            </div>
          </div>

          <img
            className="hero__image"
            src={heroBgImage}
            alt="Menino com camiseta verde e óculos roxo e com planetas ao fundo"
          />
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stats-content">
          <div className="hero__stats-data">
            <div className="hero__users-container">
              <div className="hero__users-avatars">
                {USER_AVATARS.map((item) => (
                  <img key={item} src={item} alt="" />
                ))}
              </div>

              <div className="hero__users-count">
                <span>
                  Satisfação dos <strong>353</strong> alunos
                </span>
                <span>
                  <strong>97%</strong> <CheckCircleIcon />{" "}
                </span>
              </div>

              <div className="hero__users-divider" />

              <div className="hero__users-score">
                <span>Avaliação dos usuários</span>
                <span>
                  <div className="hero__users-score-stars">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <StarIcon key={item} />
                    ))}
                  </div>
                  <strong>4,8 de 5</strong>
                </span>
              </div>
            </div>
          </div>

          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
