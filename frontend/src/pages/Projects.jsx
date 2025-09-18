import React, { useState, useEffect } from "react";
import { fetchProjects } from "../apiServices";

import Card from "../components/parts/Card.comp.jsx";
import "../components/styles/ProjekteCards.style.scss";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data.projects);
      } catch (error) {
        setError(error.message);
      }
    };

    loadProjects();
  }, []);
  console.log(projects);

  if (error) {
    return <div>Fehler: {error}</div>;
  }

  if (!projects) {
    return <div>Lade Daten...</div>;
  }

  return (
    <div>
      <h1>Projekte</h1>
      <div className="row d-flex justify-content-center">
        {projects.map((project) => (
          <div
            className="d-flex justify-content-center col-xs-1 col-md-6 col-lg-4 mb-3"
            key={project.id}
          >
            <Card
              key={project.id}
              title={project.name}
              text={project.description}
              linkName={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
