import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import PokemonPageCard from './components/PokemonPageCard';
import Home from './components/Home';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'pokemon/:slug',
        element: <PokemonPageCard />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
