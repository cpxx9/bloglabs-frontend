import { useNavigate, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import StyledNavBar from './StyledNavbar';
import useLogout from '../../../hooks/useLogout';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { auth } = useAuth();

  const signOut = async () => {
    await logout();
    navigate('/login');
  };

  const location = useLocation();
  return (
    <StyledNavBar>
      <NavLink to="/">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/announcements">Announcements</NavLink>
      {location.pathname !== '/login' && (
        <NavLink
          to={!auth.accessToken ? '/login' : '/logout'}
          onClick={auth.accessToken ? signOut : null}>
          {!auth.accessToken ? 'Log in' : 'Log out'}
        </NavLink>
      )}
    </StyledNavBar>
  );
};

export default Navbar;
