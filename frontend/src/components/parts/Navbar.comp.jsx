import { LinkBtn } from "./LinkBtn.comp.jsx";
import { ToggleBtn } from "./ToggleBtn.comp.jsx";
import { useTheme } from "../../contexts/Theme.context.jsx";
import "../styles/Navbar.style.scss";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`navbar navbar-expand-md ${isDark ? "dark" : "light"}`}>
        <div className="container-fluid">
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
            <LinkBtn title="Kontakt" className="nav-buttons" link="/contact" />
            <LinkBtn
              title="GitHub"
              className="nav-buttons"
              link="https://github.com/guhe78/"
            />
            <ToggleBtn
              title={`${isDark ? "Light" : "Dark"}`}
              className={`${isDark ? "light" : "dark"}`}
              toggleHandler={toggleTheme}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
