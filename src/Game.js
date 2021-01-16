import React from 'react'
import 'game.css'

import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

import Players from './assets/players.json'


function Game() {

    const [current, setCurrent] = React.useState(0);


    const players = Players;



    const next = () => setCurrent((current + 1) % 2);

    const attack = () => {
        players[(current + 1) % 2].hp -= (players[current].dmg - players[(current + 1) % 2].shield);
        next();
        players[current].shield = 0;  
    }

    const defend = () => {
        console.log(players);
        players[current].shield = 5;
        next();
    }

    return (
        <div className="App">

            <div className="character">
                <Character player={players[0]} />
            </div>

            <div className="enemy">
                <Character player={players[1]} />
            </div>

            <Menu attack={attack} defend={defend} player={players[current]} />
        </div>
    );

}

export default Game;