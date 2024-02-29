import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AppHolder from './layout/AppHolder';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorHolder from './layout/ErrorHolder';

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
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
