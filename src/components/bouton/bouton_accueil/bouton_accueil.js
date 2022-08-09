import React from "react";
import { Link } from "react-router-dom";
import "./bouton_accueil.css";

const BoutonAccueil = (props) =>{
    return(
        <div className='bouton_accueil'>
        <Link to={props.to} className='button'>
                {props.children}
        </Link>
        </div>  
    )
}

export default BoutonAccueil;