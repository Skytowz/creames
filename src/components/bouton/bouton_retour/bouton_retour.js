import React from "react";
import "./bouton_retour.css";

const BoutonRetour = (props) =>{
    return(
        <div className='ligne_retour'>
            <div className='retour'>
                <button className='button_retour'><span>Retour</span></button>
            </div>
        </div>
    )
}

export default BoutonRetour;