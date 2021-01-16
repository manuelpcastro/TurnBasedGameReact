import React from "react";
import './Character.css';

const Avatar = props => (
    <img className='char-icon' src={`./img/${props.avatar.toLowerCase()}.png`} alt="avatar" />
);

export default Avatar;