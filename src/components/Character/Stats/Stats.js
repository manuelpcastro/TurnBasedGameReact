import React, { useState, useEffect } from 'react';
import './stats.css'


function Stats(props) {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        setAnimation("");

        if(props.isAttacked) setAnimation("dmg-animation");

        if(props.isHealing) setAnimation("heal-animation");

    },[props.isAttacked, props.isHealing]);

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