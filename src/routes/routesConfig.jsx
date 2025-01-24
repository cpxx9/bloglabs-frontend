import MainLayout from '../layouts/MainLayout';
import Root from '../routes/Root/Root';
import NotFound from '../routes/NotFound';
import { createRoutesFromElements, Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import RequireAuth from '../components/RequireAuth';
import PersistLogin from '../components/PersistLogin';
import Post from './Post/Post';

const routesConfig = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route element={<PersistLogin />}>
      <Route path="/" element={<Root />} />
      <Route path="/posts/:id" element={<Post />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>,
);

// const routesConfig = [
//   {
//     path: '/',
//     element: <MainLayout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         path: '/',
//         element: <Root />,
//       },
//       {
//         path: '*',
//         element: <NotFound />,
//       },
//     ],
//   },
// ];

export default routesConfig;
