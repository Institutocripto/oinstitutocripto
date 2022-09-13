import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { useApp } from "../../contexts/useApp";

import "./styles.scss";

export function SocialMedia() {
  const { intagramUrl } = useApp();

  return (
    <div className="social-media">
      <p>Acompanhe nas redes</p>

      <div className="social-media__wrapper">
        <a target="_blank" href={intagramUrl ?? ""}>
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
