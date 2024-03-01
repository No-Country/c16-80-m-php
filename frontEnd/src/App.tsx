import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppHolder from './layout/AppHolder';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorHolder from './layout/ErrorHolder';
import Result from './pages/Result';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppHolder />,
    errorElement: <ErrorHolder />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />
      }
      ,
      {
        path: '/result',
        element: <Result />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
