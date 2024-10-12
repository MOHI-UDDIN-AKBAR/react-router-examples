import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav">
        <li className="nav-link">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: 'green' } : {})}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/books" end>
            Books
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/service">
            {({ isActive }) => (
              <span style={isActive ? { color: 'green' } : {}}>Service</span>
            )}
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/contact"
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isActive ? 'active' : '',
                isPending ? 'pending' : '',
                isTransitioning ? 'transitioning' : '',
              ].join(' ')
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
