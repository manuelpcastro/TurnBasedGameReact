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

    const [heal1, setHeal1] = React.useState(false);
    const [heal2, setHeal2] = React.useState(false);

    const players = Players;

    const next = () => {
        setCurrent((current + 1) % 2);
        setCursor1(!cursorPlayer1);
        setCursor2(!cursorPlayer2);
    }

    const paintHit = () => (current === 0) ? setHit1(true) : setHit2(true);
    const paintHeal = () =>(current === 0) ? setHeal1(true) : setHeal2(true);
    
    const resetEffects = () => {
        setHit1(false);
        setHit2(false);

        setHeal1(false);
        setHeal2(false);
    }

    const checkEnding = () => {
        if (players[current].hp <= 0 || players[(current + 1) % 2].hp <= 0)
            setEnding(true);

        return ending;
    }


    const attack = () => {
        resetEffects();

        if (checkEnding())
            return;

        players[(current + 1) % 2].hp -= (players[current].dmg - players[(current + 1) % 2].shield);
        paintHit();

        checkEnding();

        next();

        players[current].defending = false;
    }

    const defend = () => {
        resetEffects();

        if (checkEnding())
            return;

        players[current].defending = true;

        checkEnding();

        next();
    }

    const heal = (potion) => {
        resetEffects();

        let heal = potion.match(/(\d+)/);
        console.log(heal);
        players[current].hp += parseInt(heal[0]);

        let index = players[current].potions.indexOf(potion);
        players[current].potions.splice(index,1);
        paintHeal();
        checkEnding();

        next();
    }

    return (
        <div className="App">

            <div className="character">
                {cursorPlayer1 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                <Character isHealing={heal1} isAttacked={hit2} player={players[0]} />
            </div>

            <div className="enemy">
                {cursorPlayer2 && <img alt="cursor" className="selected" src="./img/cursor.png" />}
                <Character isHealing={heal2} isAttacked={hit1} player={players[1]} />
            </div>

            {ending ?
                <div class="ending">Game Over</div>
                :
                <Menu attack={attack} defend={defend} heal={heal} player={players[current]} />
            }
        </div>
    );

}

export default Game;