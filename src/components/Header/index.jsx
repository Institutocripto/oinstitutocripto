import { HashLink } from "react-router-hash-link";

import { SubscribeButton } from "../SubscribeButton";

import { UserIcon } from "../../assets/icons/UserIcon";
import logoImage from "../../assets/instituto_logo.png";

import { useApp } from "../../contexts/useApp";

import "./styles.scss";

export function Header() {
  const { formattedPrice } = useApp();

  return (
    <header className="header">
      <div className="header__content mx-auto d-flex align-items-center justify-content-between">
        <div className="header__navigation d-flex align-items-center">
          <img src={logoImage} alt="Logo Instituto Cripto" />

          <nav>
            <HashLink className="link" to="/">
              Início
            </HashLink>
            <HashLink className="link" to="/#mentorship">
              Mentorias
            </HashLink>
            <HashLink className="link" to="/#about">
              Sobre nós
            </HashLink>
          </nav>
        </div>

        <div className="header__actions">
          <a className="user__link disabled" href="">
            <UserIcon />
            Sou aluno
          </a>

          <SubscribeButton label={`Assinar por ${formattedPrice}`} />
        </div>
      </div>
    </header>
  );
}
