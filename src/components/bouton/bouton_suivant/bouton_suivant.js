import React from "react";
import "./bouton_suivant.css";

const BoutonSuivant = (props) =>{
    return(
        <div className='div_suivant'>
            <div className='suivant'>
                <button className='button_suivant' type="submit">
                    <span>Suivant</span>
                </button>
            </div>
        </div>
    )
}

export default BoutonSuivant;