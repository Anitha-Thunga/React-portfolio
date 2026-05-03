import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          {/*<li><Link to="/onchange">Onchange</Link></li>
          <li><Link to="/updater">UpdaterFunction</Link></li>
          <li><Link to="/objects">Objetcs</Link></li>*/}
          <li><Link to="/Popup">Popup</Link></li>
        </ul>
      </nav>
    </>
  )
};
export default Navbar;