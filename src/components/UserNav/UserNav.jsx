import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import StyledUserNav from './StyledUserNav';
import { Link } from 'react-router-dom';

const UserNav = ({ children }) => {
  const logout = useLogout();
  const { auth } = useAuth();
  const [dropDownClass, setDropDownClass] = useState('dropdown inactive');

  const decoded = auth.accessToken ? jwtDecode(auth.accessToken) : 'Sign in';
  const username = decoded?.user?.username;

  const signOut = async () => {
    await logout();
  };

  const handleDropDown = () => {
    if (dropDownClass === 'dropdown inactive') {
      setDropDownClass('dropdown active');
    } else {
      setDropDownClass('dropdown inactive');
    }
  };

  const makeInactive = () => {
    setDropDownClass('dropdown inactive');
  };

  return (
    <StyledUserNav>
      <button onClick={handleDropDown}>
        <h3>{username ? username : '==='}</h3>
      </button>
      <div className={dropDownClass}>
        {!username ? (
          <Link to={'/login'} onClick={makeInactive}>
            Log in
          </Link>
        ) : (
          <a href="" onClick={signOut}>
            Log out
          </a>
        )}
      </div>
    </StyledUserNav>
  );
};

export default UserNav;
