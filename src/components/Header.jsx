 function Header() {
  return (<header>
        <div className="logo">
          <i className="fas fa-code"></i> Portfólio
        </div>

        <nav>
          <ul>
            <li><a href="#sobre"><i className="fas fa-user"></i> Sobre</a></li>
            <li><a href="#projetos"><i className="fas fa-folder"></i> Projetos</a></li>
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </nav>
      </header>
        );
}

export default Header;