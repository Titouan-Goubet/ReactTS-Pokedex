import { useAppSelector } from '../hooks/redux';
import Card from './Card';
import '../styles/animate.css';

interface CardsProps {
  inputRangeValue: number;
}

function Cards({ inputRangeValue }: CardsProps) {
  const searchValue = useAppSelector((state) => state.pokemons.searchValue);
  const pokemonsData = useAppSelector((state) => state.pokemons.list);

  const filteredPokemons = searchValue
    ? pokemonsData.filter((pokemon) =>
        pokemon.name.fr.toLowerCase().includes(searchValue.toLowerCase())
      )
    : pokemonsData.slice(1, inputRangeValue + 1);

  return (
    <>
      <h1 className="font-custom font-extrabold text-4xl text-center mb-8 typing-text">
        <span className="text">Mon pokédex</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.pokedexId} {...pokemon} />
        ))}
      </div>
    </>
  );
}

export default Cards;
