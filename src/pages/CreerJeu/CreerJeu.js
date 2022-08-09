import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/template/template';
import './CreerJeu.css';

const CreerJeu = (props) => {
    return(
        <Template>
            <div className='container_creer_jeu'>
                <div className='ligne_retour'>
                    <div className='retour'>
                        <button className='button_retour'><span>Retour</span></button>
                    </div>
                </div>
                <div className='inserer_tableau'>
                    <p>
                        Insérer votre plateau
                    </p>
                </div>
                
            </div>
        </Template>
    )
}

export default CreerJeu;