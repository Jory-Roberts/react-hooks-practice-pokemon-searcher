import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import Search from './Search';
import { Container } from 'semantic-ui-react';

function PokemonPage({ showPokemon, searchPokemon, addPokemon }) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search searchPokemon={searchPokemon} />
      <br />
      <PokemonCollection showPokemon={showPokemon} />
    </Container>
  );
}

export default PokemonPage;
