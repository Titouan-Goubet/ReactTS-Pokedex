import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';

function PokemonPageCard() {
  const { slug } = useParams();
  const pokemons = useAppSelector((state) => state.pokemons.list);

  const pokemon = pokemons.find(
    (element) => element.name.fr.toLowerCase() === slug
  );

  if (!pokemon) {
    return <div>Pokemon non trouvé</div>;
  }

  return (
    <div className="z-10 absolute">
      <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className=""
          src={pokemon?.sprites.regular}
          alt="Pokemon représenté"
        />
        <div className="p-5">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pokemon?.name.fr}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {pokemon?.category}
          </p>
          <p className="">Pokemon de la génération : {pokemon?.generation}</p>
        </div>
      </article>
    </div>
  );
}

export default PokemonPageCard;
