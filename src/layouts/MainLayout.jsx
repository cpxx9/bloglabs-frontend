import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nav/NavBar/Navbar';
import Header from '../components/Header/Header';
import UserNav from '../components/UserNav/UserNav';

const MainLayout = () => {
  return (
    <>
      <Header>
        <Navbar />
        <UserNav />
      </Header>
      <Outlet />
    </>
  );
};

export default MainLayout;
