import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import Projects from "./components/pages/Projects";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} ></Route>
        <Route path="/about-me" element = {<AboutMe />} ></Route>
        <Route path="/services" element = {<Services />} ></Route>
        <Route path="/projects" element = {<Projects />} ></Route>
        <Route path="/contact-me" element = {<ContactMe />} ></Route>
      </Routes> 
    </Router>    
  );
}

export default App;
