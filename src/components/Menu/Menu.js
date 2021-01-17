import React, { useState} from 'react';
import './Menu.css'

import Info from './Submenus/Info';
import Event from './Submenus/Event';

function Menu(props) {

    const [action, setAction] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [useItem, usingItem] = useState(false);

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

    const item = () => {
        setAction("");
        usingItem(true);

    }

    return (
        <div>
            {action !== "" ? <Event name={playerName} action={action} /> : null}
            {useItem ? <Event name={playerName} action={action} /> : null}
            <div className="menu">
                <Info name={props.player.name} />
                <div className="menu-container">

                    <div onClick={attack} className="menu-title">
                        Attack
                    </div>

                    <div onClick={defend} className="menu-title">
                        Defend
                    </div>

                    <div onClick={item} className="menu-title">
                        Use Item
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Menu; 