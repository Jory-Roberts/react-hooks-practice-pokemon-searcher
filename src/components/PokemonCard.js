import React from 'react';
import { Card } from 'semantic-ui-react';

//state to manage user being able to see data on back when clicked

function PokemonCard({ name, hp, image }) {
  return (
    <Card>
      <div>
        <div className='image'>
          <img
            alt={name}
            src={image}
          />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
        </div>
        <div className='extra content'>
          <span>
            <i className='icon heartbeat red' />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
