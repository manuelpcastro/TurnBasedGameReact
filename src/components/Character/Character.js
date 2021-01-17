import React from 'react';

import Avatar from './Avatar.js';
import Stats from './Stats/Stats';
import Items from './Items/Items';

import './Character.css';

function Character(props) {
 
  const [hp, setHP] = React.useState(0);
  const [isAttacked, setAttacked] = React.useState(false);
  const [animation, setAnimation] = React.useState("");

  React.useEffect(() =>{
    setHP(props.player.hp);
  },[hp,props.player.hp]);

  React.useEffect(() =>{
    setAttacked(props.isAttacked);
    isAttacked ? setAnimation("animation") : setAnimation("");
  },[isAttacked,props.isAttacked]);


  return (
    <div key={props.player} className={'character-container ' + animation}>
      <Avatar avatar={props.player.name} />
      <div className='character-name'>
        <h3>{props.player.name}{props.player.defending && '🛡️'}</h3> 
      </div>
      <Stats className='stats' isHealing={props.isHealing} isAttacked={isAttacked} hp={hp} dmg={props.player.dmg} />
      <Items potions={props.player.potions} />
    </div>
  );

}

export default Character;