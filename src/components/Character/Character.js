import React from 'react';

import Avatar from './Avatar.js';
import Stats from './Stats/Stats';
import Items from './Items/Items';

import './Character.css';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hp: 100, dmg: 10 , potions: ['+20', '+20', '+10']};
  }

  render() {
    return (
      <div className='character-container'>
        <Avatar avatar={this.props.name} />
        <div className='character-name'>
          <h3>{this.props.name}</h3>
        </div>
        <Stats className='stats' hp={this.state.hp} dmg={this.state.hp} />
        <Items potions={this.state.potions}/>
      </div>
    );
  }
}

export default Character;