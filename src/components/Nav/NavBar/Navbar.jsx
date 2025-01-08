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
      <NavLink to="/users">Users</NavLink>
      {location.pathname !== '/login' && (
        <NavLink to={!auth.user ? '/login' : '/logout'} onClick={auth.user ? signOut : null}>
          {!auth.user ? 'Log in' : 'Log out'}
        </NavLink>
      )}
    </StyledNavBar>
  );
};

export default Navbar;
