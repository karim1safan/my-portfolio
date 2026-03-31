import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certifications from "./components/Certification/Certifications";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
