import React, { useState, useEffect } from "react";
import { fetchAbout } from "../apiServices";
import { useTheme } from "../contexts/Theme.context.jsx";
import "../components/styles/About.style.scss";
import "../components/styles/ProjekteCards.style.scss";

export default function About() {
  const [abouts, setAbouts] = useState(null);
  const [error, setError] = useState(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const data = await fetchAbout();
        setAbouts(data.abouts);
      } catch (error) {
        setError(error.message);
      }
    };

    loadAbout();
  }, []);

  if (error) {
    return <div>Fehler: {error}</div>;
  }

  if (!abouts) {
    return <div>Lade Daten...</div>;
  }

  return (
    <div>
      <div className="aboutme-heading py-3">
        <h2>Etwas über mich..</h2>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {abouts.map((about, index) => (
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label={`Slide ${about.id}`}
              key={index}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {abouts.map((about, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className={`card about-card ${isDark ? "dark" : "light"}`}>
                <div className="card-body">
                  <h5 className="card-header">{about.title}</h5>
                  <div className="card-text">
                    {about.description}
                    <div className="ml-4 space-y-2">
                      {Object.entries(about.details).map(([key, values]) => (
                        <div key={key} className="mt-3">
                          <p className="font-semibold">{key}:</p>
                          <div className="list-disc list-inside">
                            {values.map((item, index) => (
                              <div key={index}>{item}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
