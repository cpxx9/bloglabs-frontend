import { Link, useLocation } from 'react-router-dom';
import StyledNavBar from './StyledNavbar';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <StyledNavBar>
      <Link className="register-link" to="/register" state={{ path }}>
        Sign up
      </Link>
      <Link to="/login" state={{ path }}>
        Sign in
      </Link>
    </StyledNavBar>
  );
};

export default Navbar;
