import React, { useState, useEffect } from "react";
import { fetchProjects } from "../apiServices";

import Cards from "../components/Card";

function Projects() {
  const [projekte, setProjekte] = useState(null);
  const [fehler, setFehler] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjekte(data);
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
      <div className="row">
        {projekte.projects.map((projekt) => (
          <div className="col-xs-1 col-md-6 col-lg-4 mb-3">
            <Cards
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
