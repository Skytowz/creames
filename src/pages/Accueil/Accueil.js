import React from 'react';
import BoutonAccueil from '../../components/bouton/bouton_accueil/bouton_accueil';
import Template from '../../components/template/template';
import './Accueil.css';

const Accueil = (props) => {
    return(
        <Template>
            <div className='container_accueil'>
                <BoutonAccueil to="/creer-jeu">
                    Créer
                </BoutonAccueil>
                <BoutonAccueil to="/jouer">
                    Jouer
                </BoutonAccueil>
            </div>
        </Template>
    )
}

export default Accueil;