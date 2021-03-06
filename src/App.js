import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "./components/layout/Container";
import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { NewProject } from "./components/pages/NewProject";
import {NavBar} from "./components/layout/NavBar"
import {Footer} from "./components/layout/Footer"
import { Projects } from "./components/pages/Projects";

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
    
    <Container>
    
    <Routes>
    <Route path="/projects" element={<Projects/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/company" element={<Company/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/newproject" element={<NewProject/>} />
    
    </Routes>
    </Container>


    
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
