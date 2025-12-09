import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Eppa Harsha Vardhan | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer specializing in React, Node.js, and modern web technologies. Open source contributor and hackathon participant."
        />
        <meta
          name="keywords"
          content="Eppa Harsha, Full Stack Developer, Web Developer, React, Node.js, JavaScript, Open Source"
        />
        <meta property="og:title" content="Eppa Harsha Vardhan | Full Stack Web Developer" />
        <meta
          property="og:description"
          content="Full Stack Web Developer specializing in React, Node.js, and modern web technologies."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eppa Harsha Vardhan | Full Stack Web Developer" />
        <link rel="canonical" href="https://eppaharsha.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <OpenSource />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
