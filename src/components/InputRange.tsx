import React, { useState } from 'react';

interface InputRangeComponentProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: (value: number) => void;
}

function InputRangeComponent({
  min,
  max,
  step,
  initialValue,
  onChange,
}: InputRangeComponentProps) {
  const [inputRangeValue, setInputRangeValue] = useState(initialValue);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputRangeValue(value);
    onChange(value);
  };

  return (
    <div className="p-12 rounded-lg">
      <label
        htmlFor="filterPokemons"
        className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
      >
        Trier le nombre de pokemons souhaités : {inputRangeValue}
      </label>
      <input
        type="range"
        id="filterPokemons"
        name="filterPokemons"
        min={min}
        step={step}
        max={max}
        value={inputRangeValue}
        onChange={handleRangeChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}

export default InputRangeComponent;
