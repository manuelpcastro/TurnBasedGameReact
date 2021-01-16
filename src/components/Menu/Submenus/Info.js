import React from 'react';
import '../Menu.css'


function Info(props) {

    return (
        <div className='menu-info'>
            <h3>You are currently playing as: {props.name}</h3>
        </div>
    );
}

export default Info;