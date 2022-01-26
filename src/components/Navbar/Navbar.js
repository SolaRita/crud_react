import React, { Component } from 'react';
import {MenuItems} from "./MenuItem";
import "./Navbar.css";

class Navbar extends Component {
    render (){
        return(
            <nav className="Navbar">
            <h1 className="navabar-logo">Eatting Places</h1>
            <ul className='NavbarItems'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key = {index}>
                            <a className= {item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )})}
            </ul>
            </nav>
        )
    }
}

export default Navbar