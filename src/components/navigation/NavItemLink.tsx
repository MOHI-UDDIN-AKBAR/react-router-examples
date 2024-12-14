import { NavLink } from 'react-router-dom';

type NavItemLinkProps = {
  to: string;
  label: string;
};

const NavItemLink: React.FC<NavItemLinkProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [isActive ? 'active' : '', 'nav-link'].join(' ')
      }
    >
      <span>{label}</span>
    </NavLink>
  );
};

export default NavItemLink;
