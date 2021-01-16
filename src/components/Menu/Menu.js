import React from 'react';
import './Menu.css'

import Info from './Submenus/Info';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: props.user, action: 0, subaction: 0 };
    }

    render() {
        return (
            <div className="menu">
                <Info name={this.props.user.name} />
                <div className="menu-container">
                    
                    <div className="menu-title">
                        Attack
                    </div>
                   
                    <div className="menu-title">
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