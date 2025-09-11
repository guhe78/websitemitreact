import Navbar from "./Navbar.comp.jsx";
import "../styles/Header.style.css";

function Header() {
  return (
    <div className="container">
      <div className="header-img">
        <img className="img-fluid" src="/img/headerbildfia.png" alt="Header" />
      </div>
      <div className="header-navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
