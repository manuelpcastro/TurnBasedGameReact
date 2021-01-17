import React from 'react';
import './itemSubmenu.css'


function ItemSubmenu(props) {

    const potions = [];
    let index = 0;

    for (const potion of props.items) {
        potions.push(
            <div key={index} onClick={() => props.onClick(potion)} className='submenu-item'>
                <span>🧪 Potion {potion}</span>
            </div>);
        index++;
    }

    return (
        <div className='submenu-item-container'>
            {potions.length > 0 ? potions : <div className='submenu-item'>No items</div>}
        </div>
    );
}

export default ItemSubmenu;