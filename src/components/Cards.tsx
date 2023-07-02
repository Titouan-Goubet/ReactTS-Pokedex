import { useAppSelector } from '../hooks/redux';
import Card from './Card';

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
      <h1 className="text-3xl font-bold text-center mb-8">Mon pokédex</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.pokedexId} {...pokemon} />
        ))}
      </div>
    </>
  );
}

export default Cards;
