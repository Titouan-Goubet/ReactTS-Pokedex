import { useState } from 'react';
import Cards from './Cards';
import InputRangeComponent from './InputRange';

function Home() {
  const [inputRangeValue, setInputRangeValue] = useState(10);

  const handleInputRangeChange = (value: number) => {
    setInputRangeValue(value);
  };

  return (
    <>
      <InputRangeComponent
        min={10}
        max={200}
        step={10}
        initialValue={inputRangeValue}
        onChange={handleInputRangeChange}
      />
      <Cards inputRangeValue={inputRangeValue} />
    </>
  );
}

Home.defaultProps = {
  pokemons: null,
};

export default Home;
