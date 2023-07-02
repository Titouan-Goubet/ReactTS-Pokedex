import { Link, useNavigate } from 'react-router-dom';

interface CardProps {
  name: Name;
  category: string;
  generation: number;
  sprites: Sprites;
}

interface Name {
  fr: string;
  en: string;
  jp: string;
}

export interface Sprites {
  regular: string;
  shiny?: string;
  gmax?: Gmax;
}

export interface Gmax {
  regular: string;
  shiny?: string;
}

export interface Type {
  name: string;
  image: string;
}

function Card({ name, category, generation, sprites }: CardProps) {
  const navigate = useNavigate();
  return (
    <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link
        to={`/pokemon/${name.fr.toLowerCase()}`}
        onClick={() => navigate(`/pokemon/${name.fr.toLowerCase()}`)}
      >
        <img className="" src={sprites.regular} alt="Pokemon représenté" />
      </Link>
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name.fr}
        </h2>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {category}
        </p>
        <p className="">Pokemon de la génération : {generation}</p>
      </div>
    </article>
  );
}

export default Card;
