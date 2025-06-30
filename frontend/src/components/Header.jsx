import React from "react";

function Header() {
  return (
    <div>
      <div className="text-center">
        <img src="./img/headerbildfia.png" className="img-fluid" alt="..." />
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Über mich
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projekte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
