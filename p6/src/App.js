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
      //-- "/accommodation/:id" --//
      <Route path="/accommodation/c67ab8a7/" element={<Accommodations />} />
      <Route path="/accommodation/b9123946/" element={<Accommodations />} />
      <Route path="/accommodation/46d188c5/" element={<Accommodations />} />
      <Route path="/accommodation/7af00cd6/" element={<Accommodations />} />
      <Route path="/accommodation/0979876d/" element={<Accommodations />} />
      <Route path="/accommodation/f72a452f/" element={<Accommodations />} />
      <Route path="/accommodation/b4c67936/" element={<Accommodations />} />
      <Route path="/accommodation/bc6f7112/" element={<Accommodations />} />
      <Route path="/accommodation/cb2f9222/" element={<Accommodations />} />
      <Route path="/accommodation/d60ca600/" element={<Accommodations />} />
      <Route path="/accommodation/2cf259e1/" element={<Accommodations />} />
      <Route path="/accommodation/5323c29b/" element={<Accommodations />} />
      <Route path="/accommodation/af6d2d48/" element={<Accommodations />} />
      <Route path="/accommodation/7cbb378e/" element={<Accommodations />} />
      <Route path="/accommodation/ba55a0cc/" element={<Accommodations />} />
      <Route path="/accommodation/1e181317/" element={<Accommodations />} />
      <Route path="/accommodation/1e180563/" element={<Accommodations />} />
      <Route path="/accommodation/2139a317/" element={<Accommodations />} />
      <Route path="/accommodation/6ff132c6/" element={<Accommodations />} />
      <Route path="/accommodation/cb02d69b/" element={<Accommodations />} />
    </Routes>
    </BrowserRouter>
    
  );
};


export default App;
