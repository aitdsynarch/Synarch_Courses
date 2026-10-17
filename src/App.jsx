
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import JavaProgramming from "./Languages/JavaProgramming";
import Html5 from "./Development/HTML/Html5";
import GettingStarted from "./Development/HTML/GettingStarted";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/java/java-fundamentals" element={<JavaProgramming />} />
        <Route path="/courses/web-development/html" element={<Html5 />} />
       <Route path="getting-started" element={<GettingStarted />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
