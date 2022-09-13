import "./styles.scss";

export function IconImage({ Icon, className }) {
  const compClassName = `icon-image ${className}`;

  return (
    <div className={compClassName}>
      <Icon />
    </div>
  );
}
