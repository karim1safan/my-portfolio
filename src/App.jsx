import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import BackToTop from "./components/BackToTop";
import Articles from "./components/articles/Articles";
import ArticleDetail from "./components/articles/ArticleDetail";

function Home() {
  return (
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
  );
}

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
