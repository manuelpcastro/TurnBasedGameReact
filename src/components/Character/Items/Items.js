import React from 'react';
import './items.css'


function Items(props) {

    const potions = [];
    let index = 0;
    for (const potion of props.potions) {
        potions.push(
            <div key={index}className='item'>
                <span>🧪 Potion {potion}</span>
            </div>);
        index++;
    }

    return (
        <div className='item-container'>
            <div className='item'>
                {potions}
            </div>
        </div>
    );
}

export default Items;