import React, { useState} from 'react';
import './Menu.css'

import Info from './Submenus/Info';
import Event from './Submenus/Event';

function Menu(props) {

    const [action, setAction] = useState("");
    const [playerName, setPlayerName] = useState("");

    const setEvent = (selectAction) => {
        setAction(selectAction);
        setPlayerName(props.player.name);
    }

    const attack = () => {
        setEvent("attacking");
        props.attack();
    }

    const defend = () => {
        setEvent("defending");
        props.defend();
    }

    return (
        <div>
            {action !== "" ? <Event name={playerName} action={action} /> : null}
            <div className="menu">
                <Info name={props.player.name} />
                <div className="menu-container">

                    <div onClick={attack} className="menu-title">
                        Attack
                    </div>

                    <div onClick={defend} className="menu-title">
                        Defend
                    </div>

                    <div className="menu-title">
                        Use Item
                </div>

                </div>
            </div>
        </div>
    );
}


export default Menu; 