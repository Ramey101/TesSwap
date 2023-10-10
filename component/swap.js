import React, { useState } from 'react';
import Select from 'react-select';

function Swap() {
  const [tokenA, setTokenA] = useState(null);
  const [tokenB, setTokenB] = useState(null);
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');

  const tokens = [
    { value: 'tokenA', label: 'Token A' },
    { value: 'tokenB', label: 'Token B' },
    // Add more token options as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
    }),
    singleValue: (provided) => ({
      ...provided,
      marginLeft: '8px', // Adjust the margin as needed
    }),
  };

  const handleSwap = () => {
    // Perform the swap logic here
    console.log(`Swapping ${amountA} ${tokenA.label} for ${amountB} ${tokenB.label}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl">

      <div className='mx-auto flex align-middle'>
        <div>
          {/* Token Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Tokens</label>
        <div className="w-full">
          <Select
            options={tokens}
            value={tokenA}
            onChange={(selectedOption) => setTokenA(selectedOption)}
            placeholder="Select Token A"
            styles={customStyles}
          />
        </div>
        <div className="w-full mt-2">
          <Select
            options={tokens}
            value={tokenB}
            onChange={(selectedOption) => setTokenB(selectedOption)}
            placeholder="Select Token B"
            styles={customStyles}
          />
        </div>
      </div>
        </div>
 
      <div className='mt-2'>
        {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          type="text"
          value={amountA}
          onChange={(e) => setAmountA(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          type="text"
          value={amountB}
          onChange={(e) => setAmountB(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      </div>
      </div>

      

     
      {/* Swap Button */}
      <button
        onClick={handleSwap}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-semibold focus:outline-none"
      >
        Swap
      </button>
    </div>
  );
}

export default Swap;
