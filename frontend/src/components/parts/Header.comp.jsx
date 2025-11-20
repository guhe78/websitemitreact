import Navbar from "./Navbar.comp.jsx";
import "../styles/Header.style.scss";
import { useTheme } from "../../contexts/Theme.context.jsx";

function Header() {
  const { isDark } = useTheme();

  return (
    <div className="container">
      <div className="header-img">
        <img
          className="img-fluid"
          src={`${
            isDark ? "/img/bannerfiadark.png" : "/img/bannerfialight.png"
          }`}
          alt="Header"
        />
        <h1 className="header-title">
          Fachinformatiker Anwendungsentwicklung Portfolio
        </h1>
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
