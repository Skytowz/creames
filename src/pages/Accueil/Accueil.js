import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../components/template/template';
import './Accueil.css';

const Accueil = (props) => {
    return(
        <Template>
            <div className='container'>
                <div className='bouton_accueil bouton_creer'>
                    <Link to="/creer-jeu" className='button'>
                            Créer
                    </Link>
                </div>
                <div className='bouton_accueil bouton_jouer'>
                    <Link to="/jouer" className='button'>
                            Jouer 
                    </Link>
                </div>
            </div>
        </Template>
    )
}

export default Accueil;