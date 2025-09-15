import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useTheme } from "./contexts/Theme.context.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Impressum = lazy(() => import("./pages/Impressum.jsx"));
const NoPage = lazy(() => import("./pages/NoPage.jsx"));
const Header = lazy(() => import("./components/parts/Header.comp.jsx"));
const Footer = lazy(() => import("./components/parts/Footer.comp.jsx"));

function App() {
  return (
    <Container>
      <Header />
      <div className="content">
        <BrowserRouter>
          <Suspense fallback={<div>loading..</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
