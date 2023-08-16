import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import './styles/style.css';
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import Page9 from "./pages/Page9";
import Page10 from "./pages/Page10";
import Page11 from "./pages/Page11";
import Page12 from "./pages/Page12";
import Page13 from "./pages/Page13";
import Page14 from "./pages/Page14";
import Page15 from "./pages/Page15";
import Page16 from "./pages/Page16";
import Page17 from "./pages/Page17";
import Page18 from "./pages/Page18";
import Page19 from "./pages/Page19";
import Page20 from "./pages/Page20";



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/accommodation/c67ab8a7/" element={<Page1 />} />
      <Route path="/accommodation/b9123946/" element={<Page2 />} />
      <Route path="/accommodation/46d188c5/" element={<Page3 />} />
      <Route path="/accommodation/7af00cd6/" element={<Page4 />} />
      <Route path="/accommodation/0979876d/" element={<Page5 />} />
      <Route path="/accommodation/f72a452f/" element={<Page6 />} />
      <Route path="/accommodation/b4c67936/" element={<Page7 />} />
      <Route path="/accommodation/bc6f7112/" element={<Page8 />} />
      <Route path="/accommodation/cb2f9222/" element={<Page9 />} />
      <Route path="/accommodation/d60ca600/" element={<Page10 />} />
      <Route path="/accommodation/2cf259e1/" element={<Page11 />} />
      <Route path="/accommodation/5323c29b/" element={<Page12 />} />
      <Route path="/accommodation/af6d2d48/" element={<Page13 />} />
      <Route path="/accommodation/7cbb378e/" element={<Page14 />} />
      <Route path="/accommodation/ba55a0cc/" element={<Page15 />} />
      <Route path="/accommodation/1e181317/" element={<Page16 />} />
      <Route path="/accommodation/1e180563/" element={<Page17 />} />
      <Route path="/accommodation/2139a317/" element={<Page18 />} />
      <Route path="/accommodation/6ff132c6/" element={<Page19 />} />
      <Route path="/accommodation/cb02d69b/" element={<Page20 />} />
    </Routes>
    </BrowserRouter>
    
  );
};


export default App;
