import { useTheme } from "../../contexts/Theme.context";
import "../styles/Footer.style.css";

function Footer() {
  const { isDark } = useTheme();

  return (
    <div
      className={`container footer text-center fixed-bottom ${
        isDark ? "dark" : "light"
      }`}
    >
      <div className="row">
        <div className="col">
          <a className="nav-link" href="/impressum">
            Impressum
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
