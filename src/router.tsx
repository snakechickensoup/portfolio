import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AboutPage from 'pages/about/AboutPage';
import MainPage from 'pages/main/MainPage';
import WorksPage from 'pages/works/WorksPage';
import ProjectsPage from 'pages/projects/ProjectsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/works', element: <WorksPage /> },
      { path: '/projects', element: <ProjectsPage /> },
    ],
  },
]);

export default router;
