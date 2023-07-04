import React, { useState } from 'react';

interface FilterPokemonsProps {
  onStateChange: (newValue: string) => void;
}

function FilterPokemons({ onStateChange }: FilterPokemonsProps) {
  const [selectValue, setSelectValue] = useState('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectValue(newValue);
    onStateChange(newValue);
  };

  return (
    <div>
      <form>
        <select
          value={selectValue}
          onChange={handleSelectChange}
          className="mb-8 block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="ascOrder">Filtrer par ordre alphabétique A-Z</option>
          <option value="Hp">Filtrer par HP</option>
          <option value="Dmg">Filtrer par puissance d&quot;attaque</option>
        </select>
      </form>
    </div>
  );
}

export default FilterPokemons;
