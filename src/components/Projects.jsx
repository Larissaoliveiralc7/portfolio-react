function Projects() {
  const projetos = [
    {
      nome: "JF Service",
      descricao: "Plataforma de serviços locais",
      link: "#"
    },
    {
      nome: "Sistema de Agendamento",
      descricao: "Sistema online",
      link: "#"
    },
    {
      nome: "Portfólio Web",
      descricao: "Meu site profissional",
      link: "#"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div id="lista-projetos">
        {projetos.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.nome}</h3>
            <p>{p.descricao}</p>
            <a href={p.link} className="btn">Ver</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;