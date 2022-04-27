import React from "react";
import NavBar from "./navbar";
import './header.css';

const Header = (props) =>{
    return(
        <header>
            <img alt='logo' className="image" src={require("../../assets/images/logo-blanc.png")} />
            <NavBar></NavBar>
        </header>
    )
}

export default Header;