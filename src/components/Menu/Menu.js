import React from 'react';
import './Menu.css'

import Info from './Submenus/Info';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: props.player, action: 0, subaction: 0 };
    }

    render() {
        return (
            <div className="menu">
                <Info name={this.props.player.name} />
                <div className="menu-container">
                    
                    <div onClick={this.props.attack} className="menu-title">
                        Attack
                    </div>
                   
                    <div onClick={this.props.defend} className="menu-title">
                        Defend
                    </div>
                   
                    <div className="menu-title">
                        Use Item
                    </div>

                </div>
            </div>
        );
    }
}

export default Menu; 