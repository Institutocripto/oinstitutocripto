import { PhoneIcon } from "../../assets/icons/PhoneIcon";
import { MailIcon } from "../../assets/icons/MailIcon";

import "./styles.scss";

import logoImage from "../../assets/instituto_logo.png";
import { SocialMedia } from "../SocialMedia";

import { useApp } from "../../contexts/useApp";

export function Footer() {
  const { telefoneContato, emailContato, razaoSocial, checkoutUrl } = useApp();

  return (
    <footer className="footer">
      {/* Logo and Social Media */}
      <div className="footer-section">
        <div className="footer-section__content">
          <div className="footer-section__logo">
            <img src={logoImage} alt="Logo Instituto Cripto" />

            <span>
              Tudo para você se tornar expert em Criptomoedas com os melhores
            </span>
          </div>

          <SocialMedia />
        </div>
      </div>

      {/* Links and Contact */}
      <div className="footer-section">
        <div className="footer-section__content">
          <nav>
            <a href="">Início</a>
            <a href="">Sou Aluno</a>
            <a className="active" target="_blank" href={checkoutUrl ?? ""}>
              Assinar agora!
            </a>
          </nav>

          <div className="footer-section__contact">
            <span>
              <PhoneIcon />
              {telefoneContato ?? ""}
            </span>

            <span>
              <MailIcon />
              {emailContato ?? ""}
            </span>
          </div>
        </div>
      </div>

      {/* Final data */}
      <div className="footer-section">
        <div className="footer-section__content">
          <span>Criação de interface - Willian Costa</span>

          <span className="footer-section__company-data">
            {razaoSocial ?? ""}
          </span>
        </div>
      </div>
    </footer>
  );
}
