import { SubscribeButton } from "../SubscribeButton";

import { IconImage } from "../IconImage";

import { ZapIcon } from "../../assets/icons/ZapIcon";
import { ActivityIcon } from "../../assets/icons/ActivityIcon";
import { RocketIcon } from "../../assets/icons/RocketIcon";
import { GroupIcon } from "../../assets/icons/GroupIcon";
import { QuickReplyIcon } from "../../assets/icons/QuickReplyIcon";
import aboutImage from "../../assets/about_img.png";

import "./styles.scss";
import { useApp } from "../../contexts/useApp";

const ABOUT_DATA = [
  {
    title: "Vários temas",
    description: "Uma lista de aulas sobre vários temas",
    Icon: ActivityIcon,
  },
  {
    title: "Progresso",
    description: "Acompanhe seu progresso de estudos",
    Icon: RocketIcon,
  },
  {
    title: "Vários mentores",
    description: "Vários professores em um único local",
    Icon: GroupIcon,
  },
  {
    title: "Comunidade",
    description: "Faça parte da nossa comunidade.",
    Icon: QuickReplyIcon,
  },
];

export function AboutSection() {
  const { formattedPrice } = useApp();

  return (
    <section className="section__container about" id="about">
      <div className="section__content about__cta">
        {/* Icon */}
        <IconImage Icon={ZapIcon} className="zap-icon" />

        <p>
          Os professores do instituto cripto são os maiores especialista do
          mercado
        </p>
        <h2>
          Aprenda do zero a investir em <strong>criptomoedas</strong>
        </h2>

        <div className="about__cta-footer">
          <SubscribeButton />

          <p>
            <span>Assine a partir</span>
            <span>
              de <strong>{formattedPrice}</strong>
              <b> por mês no plano.</b>
            </span>
          </p>
        </div>

        <span className="about__cta-warranty">7 dias de garantia</span>
      </div>

      <div className="section__content about__content">
        <div className="about__box">
          <h2>
            Conheça <br />
            nossos <strong className="blur-text">conteúdos</strong>
          </h2>

          <p>
            Queremos te dar a praticidade de ter acesso a todas as aulas e
            recursos na palma da mão.
          </p>

          {/* Grid */}
          <div className="about__box-grid">
            {ABOUT_DATA.map(({ title, description, Icon }) => (
              <div className="about__box-grid-item" key={title}>
                <Icon />

                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>

          <img
            src={aboutImage}
            alt="Dois celulares, um com uma imagem de mulher branca mexendo no computador e outro com um homem branco mexendo no celular"
          />
        </div>
      </div>
    </section>
  );
}
