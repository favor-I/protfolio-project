import { 
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Projects from "./components/pages/Projects";
import Services from "./components/pages/Services";

function App() {
  return (
    
    <>
      {/* <Router>
      </Router> */}
      <Navbar />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
      <Footer />
      
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul> */}
    </>
    
    
  );
}

export default App;
