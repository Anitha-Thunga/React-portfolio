import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
  return (
    //<div className="app">
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          //stores the navigations
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>

    //  </div>
  )
}

export default App;
