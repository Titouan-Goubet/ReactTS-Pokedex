import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

function PokemonPageCard() {
  const { slug } = useParams();

  const pokemons = useAppSelector((state) => state.pokemons.list);

  const pokemon = pokemons.find(
    (element) => element.name.fr.toLowerCase() === slug
  );

  return (
    <div>
      <h1>PokemonPageCard</h1>
    </div>
  );
}

export default PokemonPageCard;
