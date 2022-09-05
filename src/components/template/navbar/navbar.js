import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = (props) =>{
    //const user = window.sessionStorage.getItem("user");
    return(
        <> 
            <div className="navbar_div">
                <p><Link to="/">Nos jeux</Link></p>
            </div>
            <div className="navbar_div">
                <p><Link to="/">Créer un jeu</Link></p>
            </div>
        </>
    )
 
}

export default NavBar;