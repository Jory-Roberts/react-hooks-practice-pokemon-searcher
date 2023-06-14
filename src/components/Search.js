import React, { useState } from 'react';

function Search({ searchPokemon }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
    searchPokemon(value);
  };
  return (
    <div className='ui search'>
      <div className='ui icon input'>
        <input
          className='prompt'
          value={searchText}
          onChange={handleSearch}
        />
        <i className='search icon' />
      </div>
    </div>
  );
}

export default Search;
