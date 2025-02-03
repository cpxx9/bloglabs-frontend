import { axiosPrivate } from '../api/axios';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      localStorage.setItem('persist', false);
      setAuth({});
      const res = await axiosPrivate.get('/logout');
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
