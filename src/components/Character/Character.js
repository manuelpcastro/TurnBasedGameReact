import React from 'react';
import Stats from './Stats/Stats';
import Avatar from './Avatar.js';
import './Character.css';

class Character extends React.Component {


    render() {
        return (
            <div className='character-container'>
                <Avatar avatar={this.props.name}/>
                <div className='character-container'>
                    <h3>{this.props.name}</h3>
                </div>
                <Stats className='stats' hp={30} dmg={40} />
            </div>
        );
    }
}

export default Character;