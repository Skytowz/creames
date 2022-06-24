import React from "react";
import NavBar from "./navbar";
import './header.css';

const Header = (props) =>{
    return(
        <header>
            <div className="image">
                <img alt='logo'  src={require("../../assets/images/logo-blanc.png")} />
            </div>
            <div className="navbar">
                <NavBar></NavBar>
            </div>        
        </header>
    )
}

export default Header;