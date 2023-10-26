import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from 'pages/about/AboutPage';
import MainPage from 'pages/main/MainPage';
import WorksPage from 'pages/works/WorksPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/works', element: <WorksPage /> },
    ],
  },
]);

export default router;
