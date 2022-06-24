import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = (props) =>{
    //const user = window.sessionStorage.getItem("user");
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Nos jeux</Link></li>
                    <li><Link to="/">Créer un jeu</Link></li>
                </ul>
            </div>
        </nav>
    )
 
}

export default NavBar;