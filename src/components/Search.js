import React from 'react';

function Search({ searchPokemon }) {
  return (
    <div className='ui search'>
      <div className='ui icon input'>
        <input
          className='prompt'
          onClick={(e) => searchPokemon(e.target.value)}
        />
        <i className='search icon' />
      </div>
    </div>
  );
}

export default Search;
