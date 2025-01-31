import { useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import useLogout from '../hooks/useLogout';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  console.log(auth, persist);

  const signOut = async () => {
    await logout();
  };

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    if (!auth?.accessToken && persist) {
      console.log('test', auth, persist);
      verifyRefreshToken();
    } else if (!auth?.accessToken) {
      console.log('test1', auth, persist);
      setIsLoading(false);
      signOut();
    } else {
      console.log('test2', auth, persist);
      setIsLoading(false);
    }

    return () => (isMounted = false);
  }, []);

  useEffect(() => {}, [isLoading]);

  return <>{!persist ? <Outlet /> : isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
