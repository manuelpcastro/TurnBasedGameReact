import React, { useState, useEffect } from 'react';
import './stats.css'


function Stats(props) {
    const [isAttacked, setAttacked] = useState(false);
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setAttacked(props.isAttacked);
        isAttacked ? setAnimation("hp-animation") : setAnimation("");
    },[isAttacked, props.isAttacked]);
    
    return (
        <div key={props.hp} className='stats-container'>

            <div className={'stat ' + animation}>
                <span>❤️ HP {props.hp}</span>
            </div>

            <div className='stat'>
                <span>⚔️ DMG {props.dmg}</span>
            </div>


        </div>
    );
}

export default Stats;