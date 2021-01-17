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
    const [animation1, setAnimation1] = React.useState("");
    const [animation2, setAnimation2] = React.useState("");

    const players = Players;



    const next = () => {
        setCurrent((current + 1) % 2);
        setCursor1(!cursorPlayer1);
        setCursor2(!cursorPlayer2);
    }

    const paintHit = () => {
        if (current === 0){ 
            setHit1(true);
            setAnimation2("animation");
            
        }
        else {
            setHit2(true);
            setAnimation1("animation");
        }
    }

    const resetHitEffect = () => {
        setHit1(false);
        setHit2(false);
        setAnimation1("");
        setAnimation2("");
    }

    const checkEnding = () => {
        if (players[current].hp <= 0 || players[(current + 1) % 2] <= 0)
            setEnding(true);

        return ending
    }


    const attack = () => {
        resetHitEffect();

        if(checkEnding())
            return;

        players[(current + 1) % 2].hp -= (players[current].dmg - players[(current + 1) % 2].shield);

        paintHit();
        
        next();

        players[current].defending = false;
    }

    const defend = () => {
        resetHitEffect();

        if(checkEnding())
            return;

        players[current].defending = true;

        next();
    }

    return (
        <div className="App">

            <div className={"character " + animation1}>
                {cursorPlayer1 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                <Character player={players[0]} />
            </div>

            <div className={"enemy " + animation2}>
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