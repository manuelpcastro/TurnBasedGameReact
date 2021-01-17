import React from 'react'
import 'game.css'

import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

import Players from './assets/players.json'


function Game() {

    const [current, setCurrent] = React.useState(0);
    const [ending, setEnding] = React.useState(false);

    const [cursorPlayer1, setCursor1] = React.useState(true);
    const [cursorPlayer2, setCursor2] = React.useState(false);

    const [hit1, setHit1] = React.useState(false);
    const [hit2, setHit2] = React.useState(false);



    const players = Players;
 
   

    const next = () => {
        setCurrent((current + 1) % 2);
        setCursor1(!cursorPlayer1);
        setCursor2(!cursorPlayer2);
    }

    const attack = () => {
        setHit1(false);
        setHit2(false);
        players[(current + 1) % 2].hp -= (players[current].dmg - players[(current + 1) % 2].shield);
        (current===0) ? setHit1(true) : setHit2(true);

        next();
        if (players[current].hp <= 0) {
            setEnding(true);
        }
        players[current].shield = 0;
    }

    const defend = () => {
        setHit1(false);
        setHit2(false);
        console.log(players);
        players[current].shield = 5;
        next();
        if (players[current].hp <= 0) {
            setEnding(true);
        }
    }

    return (
        <div className="App">

            <div className="character">
                {cursorPlayer1 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                {hit1 && <img alt="hit" className="hit" src="./img/hit.png" />}
                <Character player={players[0]} />
            </div>

            <div className="enemy">
                {cursorPlayer2 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                {hit2 && <img alt="hit" className="hit" src="./img/hit.png" />}
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