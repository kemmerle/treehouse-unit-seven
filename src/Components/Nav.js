import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    performSearch = (event) => {
        this.props.performSearch(event.target.innerText);
    }

    render() {
        return (
            <nav className="main-nav" >
                <ul>
                    <li><NavLink to='/search/swans' onClick={this.performSearch}>Swans</NavLink></li>
                    <li><NavLink to='/search/otters' onClick={this.performSearch} >Otters</NavLink></li>
                    <li><NavLink to='/search/monkeys' onClick={this.performSearch}>Monkeys</NavLink></li>
                    <li><NavLink to='/search/squirrels' onClick={this.performSearch}>Squirrels</NavLink></li>

                </ul>
            </nav>
        )
    }
}

export default Nav;
