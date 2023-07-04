import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { fetchPokemons } from '../store/reducers/pokemons';
import Navbar from './Navbar';
import '../styles/app.css';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
