
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import JavaProgramming from "./Languages/JavaProgramming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/java/java-fundamentals" element={<JavaProgramming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
