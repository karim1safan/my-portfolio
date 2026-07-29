import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <ThemeProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "var(--toast-bg, #333)",
            color: "var(--toast-color, #fff)",
          },
        }}
      />
      <Navbar />
      <main>
        <BackToTop />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
