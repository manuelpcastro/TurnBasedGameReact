import React from 'react';

import Avatar from './Avatar.js';
import Stats from './Stats/Stats';
import Items from './Items/Items';

import './Character.css';

function Character(props) {
 
    //this.state = { hp: props.player.hp, dmg: props.player.dmg, potions: ['+20', '+20', '+10'] };
  const [hp, setHP] = React.useState(0);
  
  const potions= ['+20', '+20', '+10'];

  React.useEffect(() =>{
    setHP(props.player.hp);
  },[hp,props.player.hp]);

  return (
    <div key={props.player} className='character-container'>
      <Avatar avatar={props.player.name} />
      <div className='character-name'>
        <h3>{props.player.name}{props.player.shield !== 0 && '🛡️'}</h3> 
      </div>
      <Stats className='stats' hp={hp} dmg={props.player.dmg} />
      <Items potions={potions} />
    </div>
  );

}

export default Character;