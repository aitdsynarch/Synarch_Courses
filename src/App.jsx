
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import JavaProgramming from "./Languages/JavaProgramming";
import Html5 from "./Development/HTML/Html5";
import GettingStarted from "./Development/HTML/GettingStarted";
import HtmlFundamentals from "./Development/HTML/HtmlFundamentals";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/java/java-fundamentals" element={<JavaProgramming />} />

        {/* HTML COURSES */}

        <Route path="/courses/web-development/html" element={<Html5 />} />
        <Route path="/courses/web-development/html/getting-started" element={<GettingStarted />} />
        <Route path="/courses/web-development/html/fundamentals" element={<HtmlFundamentals/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
