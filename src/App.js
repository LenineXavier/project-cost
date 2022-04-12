import {BrowserRouter, Routes, Route,Link } from "react-router-dom"
import { Company } from "./components/pages/Company";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { NewProject } from "./components/pages/NewProject";

function App() {
  return (
    <BrowserRouter>

      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">New Project</Link>
      </div>
    
    
    
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/company" element={<Company/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/newproject" element={<NewProject/>} />
    </Routes>

    <div>
      <p>Footer</p>
    </div>
    </BrowserRouter>
  );
}

export default App;
