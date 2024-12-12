import { NavLink } from 'react-router-dom';

const BrandLogo: React.FC = () => {
  return (
    <NavLink to="/" className="nav-link">
      <span className="brand-name">Be You</span>
    </NavLink>
  );
};

export default BrandLogo;
