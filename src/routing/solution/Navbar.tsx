import { NavLink } from 'react-router-dom';
import './NavBarStyle.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Start</NavLink>
      <NavLink to="/go">Go</NavLink>
      <NavLink to="/yellow">Yellow</NavLink>
      <NavLink to="/microsoft">Microsoft</NavLink>
    </nav>
  );
}

export default Navbar;
