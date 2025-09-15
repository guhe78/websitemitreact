import React, { useState, useEffect } from "react";
import { fetchProjects } from "../apiServices";

import Card from "../components/parts/Card.comp.jsx";
import "../components/styles/ProjekteCards.style.scss";

function Projects() {
  const [projekte, setProjekte] = useState(null);
  const [fehler, setFehler] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjekte(data.projects);
      } catch (error) {
        setFehler(error.message);
      }
    };

    loadProjects();
  }, []);

  if (fehler) {
    return <div>Fehler: {fehler}</div>;
  }

  if (!projekte) {
    return <div>Lade Daten...</div>;
  }

  return (
    <div>
      <h1>Projekte</h1>
      <div className="row d-flex justify-content-center">
        {projekte.map((projekt) => (
          <div
            className="d-flex justify-content-center col-xs-1 col-md-6 col-lg-4 mb-3"
            key={projekt.id}
          >
            <Card
              key={projekt.id}
              title={projekt.name}
              text={projekt.description}
              linkName={projekt.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
