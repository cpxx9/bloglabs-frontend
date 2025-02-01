import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nav/NavBar/Navbar';
import Header from '../components/Header/Header';
import UserNav from '../components/UserNav/UserNav';
import useAuth from '../hooks/useAuth';

const MainLayout = () => {
  const { auth } = useAuth();
  return (
    <>
      <Header>
        {!auth?.accessToken && <Navbar />}
        <UserNav />
      </Header>
      <Outlet />
    </>
  );
};

export default MainLayout;
