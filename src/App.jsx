import { useEffect, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./style.css";

function App() {
  const projetos = [
    { nome: "JF Service", descricao: "Plataforma de serviços locais", link: "#" },
    { nome: "Sistema de Agendamento", descricao: "Sistema online", link: "#" },
    { nome: "Portfólio Web", descricao: "Meu site profissional", link: "#" }
  ];

  const texto = "Desenvolvedora Front-End";
  const [textoDigitado, setTextoDigitado] = useState("");

  useEffect(() => {
    let i = 0;

   const intervalo = setInterval(() => {
    setTextoDigitado(texto.slice(0, i + 1));
    i++;

    if (i === texto.length) {
      clearInterval(intervalo);
    }
  }, 80);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
     

      <section className="hero">
        <p className="mini-text">👋 OLÁ, EU SOU LARISSA</p>
        <h1 id="typing">{textoDigitado}</h1>

        <p className="description">
          Criando interfaces modernas, responsivas e funcionais com HTML, CSS e JavaScript.
        </p>

        <div className="social">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>

        <a href="#projetos" className="btn">
          <i className="fas fa-arrow-down"></i> Ver Projetos
        </a>
      </section>

      <section id="sobre">
        <div className="sobre-container">
          <img src="/foto.jpg" alt="Minha foto" />

          <div>
            <h2><i className="fas fa-user-circle"></i> Sobre mim</h2>
            <p>
              Sou estudante de Tecnologia da Informação, apaixonada por desenvolvimento web.
              Busco evoluir criando projetos modernos e profissionais.
            </p>
          </div>
        </div>
      </section>

      <section id="projetos">
        <h2><i className="fas fa-folder-open"></i> Meus Projetos</h2>

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

      <footer>
        <p>
          <i className="fas fa-heart"></i> 2026 Larissa • Feito com HTML, CSS e JS
        </p>
      </footer>
    </>
  );
}

export default App;
