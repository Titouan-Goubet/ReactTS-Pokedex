import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './components/App';
import PokemonPageCard from './components/PokemonPageCard';
import Home from './components/Home';

function MainRouter() {
  return (
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemon/:slug" element={<PokemonPageCard />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
