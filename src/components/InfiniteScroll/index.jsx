import "./styles.scss";

export function InfiniteScroll() {
  return (
    <div className="marquee">
      <div className="marquee__content">
        <span>Mais de 300 alunos com certificação</span>
        <span>Mais de 45 horas de mentoria</span>
        <span>Acesso a carteira do Instituto Cripto</span>
        <span>Mais de 60 horas de curso</span>
        <span>Mais de 300 alunos com certificação</span>
        <span>Mais de 45 horas de mentoria</span>
      </div>

      <div className="marquee__content">
        <span>Mais de 300 alunos com certificação</span>
        <span>Mais de 45 horas de mentoria</span>
        <span>Acesso a carteira do Instituto Cripto</span>
        <span>Mais de 60 horas de curso</span>
        <span>Mais de 300 alunos com certificação</span>
        <span>Mais de 45 horas de mentoria</span>
      </div>
    </div>
  );
}
