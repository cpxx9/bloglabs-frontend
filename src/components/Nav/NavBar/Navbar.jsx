import { NavLink } from 'react-router-dom';
import StyledNavBar from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/announcements">Announcements</NavLink>
    </StyledNavBar>
  );
};

export default Navbar;
