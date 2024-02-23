import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
        </Routes></BrowserRouter>
  );
}

export default App;
