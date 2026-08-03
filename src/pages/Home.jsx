import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import TechStack from "../components/TechStack/TechStack";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
       <Services />
         <About />
           <Experience />
           <TechStack />
           <Contact />
           <Footer />
    </>
  );
}

export default Home;