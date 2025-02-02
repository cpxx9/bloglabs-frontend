import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nav/NavBar/Navbar';
import Header from '../components/Header/Header';
import UserNav from '../components/UserNav/UserNav';
import useAuth from '../hooks/useAuth';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const { auth } = useAuth();
  return (
    <>
      <div className="no-foot">
        <Header>
          {!auth?.accessToken && <Navbar />}
          <UserNav />
        </Header>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
