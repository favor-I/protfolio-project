import IfiFooter from "./components/IfiFooter";
import IfiNavbar from "./components/IfiNavbar";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Projects from "./components/pages/Projects";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <IfiNavbar />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
      <IfiFooter />
    </>
  );
}

export default App;
