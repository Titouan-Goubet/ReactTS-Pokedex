import { SetStateAction, useState } from 'react';
import Cards from './Cards';
import InputRangeComponent from './InputRange';
import SearchBar from './SearchBar';
import FilterPokemons from './FilterPokemons';

function Home() {
  const [selectedValue, setselectedValue] = useState('');

  const handleStateChange = (newValue: SetStateAction<string>) => {
    setselectedValue(newValue);
  };
  const [inputRangeValue, setInputRangeValue] = useState(200);

  const handleInputRangeChange = (value: SetStateAction<number>) => {
    setInputRangeValue(value);
  };

  return (
    <>
      <InputRangeComponent
        min={10}
        max={1000}
        step={30}
        initialValue={inputRangeValue}
        onChange={handleInputRangeChange}
      />
      <SearchBar />
      <FilterPokemons onStateChange={handleStateChange} />
      <Cards inputRangeValue={inputRangeValue} selectedValue={selectedValue} />
    </>
  );
}

Home.defaultProps = {
  pokemons: null,
};

export default Home;
