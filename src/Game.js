import React from 'react'
import 'game.css'

import Character from './components/Character/Character'
import Menu from './components/Menu/Menu'

import Players from './assets/players.json'


function Game() {

    const [current, setCurrent] = React.useState(0);


    const players = Players;



    const next = () => setCurrent((current+1)%2);


    return (
        <div className="App">

            <div className="character">
                <Character player={players[current]}/>
            </div>

            <div className="enemy">
                <Character player={players[(current+1)%2]} />
            </div>

            <Menu player={players[current]}/>
        </div>
    );

}

export default Game;