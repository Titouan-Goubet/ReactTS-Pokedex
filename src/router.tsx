import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PokemonPageCard from './components/PokemonPageCard';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="pokemon/:slug" element={<PokemonPageCard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRouter;
