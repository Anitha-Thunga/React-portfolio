import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Onchange from "./pages/Onchange.jsx";
import Updater from "./pages/UpdaterFunction.jsx";
import Objects from "./pages/Objects.jsx";
import Popup from "./pages/Popup.jsx";

function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          //stores the navigations
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/onchange" element={<Onchange />} />
          <Route path="/updater" element={<Updater />} />
          <Route path="/objects" element={<Objects />} />
        
          <Route path="/popup" element={<Popup />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
