import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';

const HomeSearchBar = () => {
  const [inputData, setInputData] = useState({
    location: "",
    minimumBudget: 0,
    maximumBudget: 0
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === 'location') {
      setInputData({
        ...inputData,
        location: value
      });
    } else if (id === 'min-budget') {
      setInputData({
        ...inputData,
        minimumBudget: value === '' ? 0 : parseInt(value)
      });
    } else if (id === 'max-budget') {
      setInputData({
        ...inputData,
        maximumBudget: value === '' ? 0 : parseInt(value)
      });
    }
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validate inputs
    if (inputData.maximumBudget > 0 && inputData.minimumBudget > inputData.maximumBudget) {
      alert('Minimum budget cannot be greater than maximum budget');
      return;
    }

    const queryParams = new URLSearchParams({
      location: inputData.location,
      type:"any",
      property:"any",
      minimumBudget: inputData.minimumBudget.toString(),
      maximumBudget: inputData.maximumBudget.toString(),
    });

    navigate(`/list?${queryParams.toString()}`);
  };

  return (
    <div className='absolute left-1/2 transform -translate-x-1/2 bottom-10 w-11/12 md:w-10/12 lg:w-2/3 mx-auto sm:px-6 lg:px-16'>
      <div className='bg-white lg:rounded-full md:rounded-full rounded-md shadow-lg p-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
          {/* Location */}
          <div className='flex flex-col md:border-r border-gray-200 pr-4 w-full md:w-auto'>
            <label htmlFor="location" className='text-md font-medium text-gray-500'>City or Destination</label>
            <input
              id="location"
              type="text"
              className='text-sm font-semibold border-0 focus:ring-0 focus:outline-none py-1 px-2 w-full md:w-48'
              placeholder='Kathmandu, Nepal'
              value={inputData.location}
              onChange={handleInputChange}
            />
          </div>

          {/* Minimum Budget */}
          <div className='flex flex-col md:border-r border-gray-200 px-4 w-full md:w-auto'>
            <label htmlFor="min-budget" className='text-md font-medium text-gray-500'>Minimum Budget</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-sm font-semibold text-gray-700">$</span>
              <input
                id="min-budget"
                type="number"
                className='text-sm font-semibold border-0 focus:ring-0 focus:outline-none py-1 pl-4 w-full md:w-24'
                placeholder='0'
                min="0"
                value={inputData.minimumBudget === 0 ? '' : inputData.minimumBudget}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Maximum Budget */}
          <div className='flex flex-col px-4 w-full md:w-auto'>
            <label htmlFor="max-budget" className='text-md font-medium text-gray-500'>Maximum Budget</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-sm font-semibold text-gray-700">$</span>
              <input
                id="max-budget"
                type="number"
                className='text-sm font-semibold border-0 focus:ring-0 focus:outline-none py-1 pl-4 w-full md:w-24'
                placeholder='5000'
                min="0"
                value={inputData.maximumBudget === 0 ? '' : inputData.maximumBudget}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Search button */}
          <div className='ml-0 md:ml-4 w-full md:w-auto'>
            <button
              className='bg-amber-500 hover:bg-amber-600 transition-colors duration-300 text-white rounded-full p-3 w-full md:w-auto flex items-center justify-center cursor-pointer'
              onClick={handleSearch}
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchBar;