import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import StyledUserNav from './StyledUserNav';
import { Link, useLocation } from 'react-router-dom';
import user from '../../icons/user.svg';

const UserNav = () => {
  const logout = useLogout();
  const location = useLocation();
  const path = location.pathname;
  const { auth } = useAuth();
  const [dropDownClass, setDropDownClass] = useState('dropdown inactive');

  const decoded = auth.accessToken ? jwtDecode(auth.accessToken) : 'Sign in';
  const username = decoded?.user?.username;

  const html = document.getElementById('html');

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

  useEffect(() => {
    html.addEventListener('click', (e) => {
      if (e.target.children.length !== 0) setDropDownClass('dropdown inactive');
    });
  }, []);

  return (
    <StyledUserNav>
      <Link className="header-link" to="/">
        <h1>BlogLabs</h1>
      </Link>
      <div className="user-wrap">
        <button onClick={handleDropDown}>
          <img className="user-icon" src={user} alt="user icon" />
        </button>
        <div className={dropDownClass}>
          {!username ? (
            <>
              <Link
                className="register-link"
                to={'/register'}
                state={{ path }}
                onClick={makeInactive}>
                Sign up
              </Link>
              <Link to={'/login'} state={{ path }} onClick={makeInactive}>
                Log in
              </Link>
            </>
          ) : (
            <>
              <p className="welcome">Hi, {username}</p>
              <a href="" onClick={signOut}>
                Log out
              </a>
            </>
          )}
        </div>
      </div>
    </StyledUserNav>
  );
};

export default UserNav;
