import { LinkBtn } from "./LinkBtn.comp.jsx";
import { ToggleBtn } from "./ToggleBtn.comp.jsx";
import { useTheme } from "../../contexts/Theme.context.jsx";
import {
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaProjectDiagram,
} from "react-icons/fa";
import { FiMail, FiGithub } from "react-icons/fi";
import "../styles/Navbar.style.scss";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <nav
        className={`navbar navbar-expand-md ${
          isDark ? "navbar-dark" : "navbar-light"
        }`}
      >
        <div className="d-flex justify-content-between w-100">
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
                  <a
                    className="nav-link"
                    aria-label="Link mainpage"
                    aria-current="page"
                    href="/"
                  >
                    <FaHome /> Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-label="Link about me"
                    href="/about"
                  >
                    <FaUser /> Über mich
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-label="Link projects"
                    href="/projects"
                  >
                    <FaProjectDiagram /> Projekte
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-buttons-group-right align-items-start">
            <a
              className="nav-buttons"
              aria-label="Contact mail link"
              href="/contact"
            >
              <FiMail className="icon-mail" />
            </a>
            <a
              className="nav-buttons"
              aria-label="Github Page link"
              href="https://github.com/guhe78/"
              target="_blank"
            >
              <FiGithub className="icon-github" />
            </a>
            <ToggleBtn
              title={
                isDark ? (
                  <FaSun className="icon-sun" />
                ) : (
                  <FaMoon className="icon-moon" />
                )
              }
              className={`${isDark ? "light" : "dark"}`}
              aria-label="Toggle Theme dark light button"
              toggleHandler={toggleTheme}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
