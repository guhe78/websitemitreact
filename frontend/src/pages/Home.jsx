import { useTheme } from "../contexts/Theme.context";

import "../components/styles/Home.style.scss";

function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? "dark" : "light"}>
      <h2>Willkommen...</h2>
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="h-100 p-5 border rounded-3 mt-5 home-card">
            <p className="card-title mb-5 fs-5">
              ...auf meiner Portfolio-Seite
            </p>
            <p className="card-text">
              Mein Name ist Günter, und ich bin Fachinformatiker für
              Anwendungsentwicklung. Ich habe meine Ausbildung zum
              Fachinformatiker - Anwendungsentwicklung in Form einer Umschulung
              erfolgreich abgeschlossen. Während meiner Umschulung und meines
              Praktikums konnte ich fundierte Kenntnisse in der
              Softwareentwicklung sammeln und meine Leidenschaft für innovative
              Technologien entdecken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
