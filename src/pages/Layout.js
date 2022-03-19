import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './Layout.css';

const Layout = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

  return (
    <div className="navbarOuter">
      <div className="css-hamburger" onClick={handleClick}>
        {click ? <FiX /> : <FiMenu />}
      </div>
      <nav className={click? 'css-navbar active' : 'css-navbar'}>
        <div className="css-navbar-container">
          <ul className={click ? 'css-nav-menu active' : 'css-nav-menu'}>
            <li className="nav-item">
              <Link className="css-title-Home" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="css-title-Skills" to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;