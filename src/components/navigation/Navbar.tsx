import { BrandLogo } from '../logo';
import NavItemLink from './NavItemLink';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-link-list brand-logo">
          <BrandLogo />
        </li>
        <li className="nav-link-list">
          <NavItemLink to="/" label="Home" />
        </li>
        <li className="nav-link-list">
          <NavItemLink to="/category" label="Category" />
        </li>
        <li className="nav-link-list">
          <NavItemLink to="/login" label="Login" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
