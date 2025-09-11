function About() {
  return (
    <div>
      <div class="aboutme-heading py-3">
        <h2>Etwas über mich..</h2>
      </div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-touch="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card">
              <div class="card-header">
                <h6>Meine Fähigkeiten</h6>
              </div>
              <div class="card-body">
                <p class="text-start">
                  Auch wenn ich noch am Anfang meiner Karriere stehe, bringe ich
                  bereits Wissen und praktische Erfahrung in den folgenden
                  Bereichen mit:
                </p>
                <ul class="list-group">
                  <li class="list-group-item">
                    <p>
                      <span class="fw-semibold">Softwareentwicklung:</span>
                      Entwicklung effizienter Lösungen mit modernen
                      Programmiersprachen und Frameworks. Java Python
                      Webentwicklung: Erste Projekte in der Gestaltung und
                      Umsetzung von benutzerfreundlichen Webanwendungen. <br />
                      <span class="fst-italic">
                        HTML CSS JavaScript React Astro Bootstrap
                      </span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p>
                      <span class="fw-semibold">Datenbanken:</span>
                      Grundlagen in der Erstellung und Verwaltung von
                      Datenbanksystemen für strukturierte Datenverarbeitung.{" "}
                      <br />
                      <span class="fst-italic">MySQL</span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p>
                      <span class="fw-semibold">
                        Lernbereitschaft und Anpassungsfähigkeit:
                      </span>
                      Stets motiviert, meine Fähigkeiten weiterzuentwickeln und
                      neue Technologien zu erlernen.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-header">
                <h6>Projekte und Praktikumserfahrungen</h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  In meinem Praktikum konnte ich aktiv an Projekten im Bereich
                  Anwendungsentwicklung mitarbeiten und mein theoretisches
                  Wissen in Projekten anwenden. Meine Projektübersicht zeigt
                  Beispiele für meine bisherigen Arbeiten und
                  Entwicklungsansätze.
                </p>
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-header">
                <h6>Aktuell in der Weiterbildung</h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  Um optimal auf zukünftige berufliche Herausforderungen
                  vorbereitet zu sein, erweitere ich derzeit mein Wissen in
                  verschiedenen Technologien und Programmiersprachen. Aktuell
                  beschäftige ich mich intensiv mit React, Angular, Astro,
                  JavaScript, HTML, CSS und Java. Da ich mich noch in der
                  Findungsphase für meinen beruflichen Weg befinde, lege ich
                  Wert darauf, ein breites technisches Fundament aufzubauen, um
                  flexibel auf die Anforderungen meines zukünftigen Arbeitgebers
                  eingehen zu können. Natürlich auch Html, CSS und JavaScript.
                  Diese Seite habe ich mit Astro erstellt.
                </p>
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <div class="card">
              <div class="card-header">
                <h6>Umschulung</h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  Eine Ausbildung in Form einer Umschulung zu machen bedeutet,
                  dass man ein Jahr lang Unterricht hat und ein Jahr lang ein
                  Praktikum in einem Betrieb macht um praktische Berufserfahrung
                  zu bekommen und sein Ablschlussprojekt anzufertigen. <br />
                  Mein Abschlussprojekt war eine Anwendung um die
                  Werkzeugausgabe in einer Lehrwerkstatt zu organisieren. Die
                  Auszubildenden leihen sich Werkzeug aus und der Mitarbeiter in
                  der Werkzeugausgabe kann es einer Anwendung eintragen. Die
                  Anwendung habe ich mit Java und MySQL entwickelt. Während der
                  Ausbildung und des Praktikums habe ich mich mit Java, SQL,
                  Python und dem JS-"Framework" React beschäftigt.
                </p>
              </div>
            </div>
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default About;
