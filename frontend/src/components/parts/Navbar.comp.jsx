import Button from "./Button.comp.jsx";
import "../styles/Navbar.style.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            FIAE
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button title="Kontakt" className="nav-buttons" link="/contact" />
            <Button
              title="GitHub"
              className="nav-buttons"
              link="https://github.com/guhe78/"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
