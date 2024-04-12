import React from 'react';

const Search = ({ onOpen, onInputChange }) => {
  // Function to handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    // Call the onInputChange function provided as a prop, passing the input value
    onInputChange(value);
  };

  return (
    <div className='flex px-4'>
      <div className='relative flex flex-grow items-center'>
        {/* Search icon */}
        <img src="/search.svg" className='my-1 h-8 absolute ml-5 items-center cursor-pointer' />
        {/* Search input field */}
        <input 
          type='text' 
          className='flex-grow h-10 rounded-md border border-white bg-transparent text-white pl-40'
          onChange={handleInputChange} // Call handleInputChange function on input change
        />
        <div>
          {/* Plus icon, triggers onOpen function provided as a prop when clicked */}
          <img src="/plus.svg" onClick={onOpen} className='mx-0 h-8 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Search;
