import React from 'react';
import './stats.css'

function Stats(props) {
    return (
        <div className='stats-container'>
            <p>HP: {props.hp} A: {props.a} </p>
        </div>
    );
}

export default Stats;