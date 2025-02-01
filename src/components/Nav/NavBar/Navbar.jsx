import { Link } from 'react-router-dom';
import StyledNavBar from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavBar>
      <Link className="register-link" to="/register">
        Sign up
      </Link>
      <Link to="/login">Sign in</Link>
    </StyledNavBar>
  );
};

export default Navbar;
