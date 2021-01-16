import React from 'react';
import './stats.css'


function Stats(props) {
    return (
        <div className='stats-container'>

            <div className='stat'>
                <span>❤️ HP {props.hp}</span> 
            </div>

            <div className='stat'>
                <span>⚔️ DMG {props.dmg}</span> 
            </div>

         
        </div>
    );
}

export default Stats;