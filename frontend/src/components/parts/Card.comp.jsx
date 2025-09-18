import { LinkBtn } from "./LinkBtn.comp.jsx";
import { useTheme } from "../../contexts/Theme.context.jsx";
import "../styles/Cards.style.scss";

function Card({ imgUrl, title, text, linkName }) {
  const { isDark } = useTheme();

  return (
    <div className={`card project-card ${isDark ? "dark" : "light"}`}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <div className="link-btn">
          <LinkBtn title="GitHub" className="custom-button" link={linkName} />
        </div>
      </div>
    </div>
  );
}

export default Card;
