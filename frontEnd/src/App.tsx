import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import AppHolder from './layout/AppHolder';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorHolder from './layout/ErrorHolder';
import Result from './pages/Result';
import Match from './pages/Match';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHolder><Outlet /></AppHolder>,
    errorElement: <ErrorHolder/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/match',
        element: <Match />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
