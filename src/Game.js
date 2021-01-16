import React from 'react'
import 'game.css'

import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

import Players from './assets/players.json'


function Game() {

    const [current, setCurrent] = React.useState(0);
    const [cursorPlayer1, setCursor1] = React.useState(true);
    const [cursorPlayer2, setCursor2] = React.useState(false);
    const [ending, setEnding] = React.useState(false);

    const players = Players;

    const next = () => {
        setCurrent((current + 1) % 2);
        setCursor1(!cursorPlayer1);
        setCursor2(!cursorPlayer2);
    }

    const attack = () => {
        players[(current + 1) % 2].hp -= (players[current].dmg - players[(current + 1) % 2].shield);
        next();
        if (players[current].hp <= 0) {
            setEnding(true);
        }
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
                {cursorPlayer1 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                <Character player={players[0]} />
            </div>


            <div className="enemy">
                {cursorPlayer2 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                <Character player={players[1]} />
            </div>


            {ending ?
                <div class="ending">Game Over</div>
                :
                <Menu attack={attack} defend={defend} player={players[current]} />
            }
        </div>
    );

}

export default Game;