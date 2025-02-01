import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import StyledUserNav from './StyledUserNav';
import { Link, useLocation } from 'react-router-dom';

const UserNav = () => {
  const logout = useLogout();
  const location = useLocation();
  const path = location.pathname;
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
      <Link to="/">
        <h1>BlogLabs</h1>
      </Link>
      <div className="user-wrap">
        <button onClick={handleDropDown}>
          <h3>{username ? username : '==='}</h3>
        </button>
        <div className={dropDownClass}>
          {!username ? (
            <>
              <Link to={'/register'} state={{ path }} onClick={makeInactive}>
                Sign up
              </Link>
              <Link to={'/login'} state={{ path }} onClick={makeInactive}>
                Log in
              </Link>
            </>
          ) : (
            <a href="" onClick={signOut}>
              Log out
            </a>
          )}
        </div>
      </div>
    </StyledUserNav>
  );
};

export default UserNav;
