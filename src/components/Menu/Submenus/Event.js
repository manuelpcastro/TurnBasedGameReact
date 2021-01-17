import React from 'react';
import '../Menu.css'


function Event(props) {
    return (
        <div className='event-menu'>
            <img className='char-menu-icon' src={`./img/${props.name.toLowerCase()}.png`} alt="avatar" />
            {props.name} is {props.action}!!
        </div>
    );
}

export default Event;