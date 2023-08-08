import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import Accommodations from "./pages/Accommodations";
import './styles/style.css';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/accommodation/c67ab8a7/" element={<Accommodations />} />
    </Routes>
    </BrowserRouter>
    
  );
};


export default App;
