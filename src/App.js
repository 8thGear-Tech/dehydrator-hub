import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogContent from "./pages/BlogContent";
import Machinery from "./pages/Machinery";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-content/:blogId" element={<BlogContent />} />
      <Route path="/product/:productId" element={<Product />} />
        </Routes></BrowserRouter>
  );
}

export default App;
