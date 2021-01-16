import React from 'react';
import './stats.css'

function Stats(props) {
    return (
        <div className='stats-container'>
            <div className='stat'>
                <span>❤</span> HP: {props.hp}
            </div>

            <div className='stat'>
                <span>⚔</span> DMG: {props.dmg}
            </div>
        </div>
    );
}

export default Stats;