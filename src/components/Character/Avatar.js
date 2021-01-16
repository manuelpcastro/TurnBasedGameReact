import React from "react";
import './Character.css';

const Avatar = props => (
  <div>
    <img className='char-icon' src={`../img/${props.avatar}.png`} alt="avatar" />
  </div>
);

export default Avatar;