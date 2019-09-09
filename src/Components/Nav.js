//Here I import React, and I import the NavLink component from the 'react-router-dom'
//library. NavLink will allow me to create links to different paths in my app,
//and it will also add an 'active' class to whichever link is most recently clicked.

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  //It would be possible for to call the performSearch function directly in the
  //onClick method by calling onClick={this.props.performSearch(event.target.innerText)},
  //but I think this makes for better, more streamlined code.
    performSearch = (event) => {
        this.props.performSearch(event.target.innerText);
    }

    render() {
        return (
            <nav className="main-nav" >
                <ul>
                    {/* I've noticed that Flickr has some inappropriate images.
                    So I've chosen to include default topic links for my
                    favorite animals. It seemed safest. */}
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
