import { useApp } from "../../contexts/useApp";

import "./styles.scss";

export function SubscribeButton({ label = "Assinar agora" }) {
  const { checkoutUrl } = useApp();

  return (
    <a className="subscribe-btn" target="_blank" href={checkoutUrl}>
      {label}
    </a>
  );
}
