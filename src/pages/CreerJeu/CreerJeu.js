import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoutonRetour from '../../components/bouton/bouton_retour/bouton_retour';
import BoutonSuivant from '../../components/bouton/bouton_suivant/bouton_suivant';
import Template from '../../components/template/template';
import Game from '../../entities/game';
import './CreerJeu.css';

const CreerJeu = (props) => {

    const jeu = new Game();

    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        jeu.plateau = url;
        navigate("./info-jeu", {state:{jeu:jeu}})
    }

    return(
        <Template>
            <div className='container_creer_jeu'>
                <div className='div_bouton_retour'>
                    <BoutonRetour/>
                </div>
                <div className='inserer_plateau'>
                    <p>
                        Insérer votre plateau
                    </p>
                    <div className="div_input_plateau">
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="input_input_plateau" required="required" onChange={e => setUrl(e.target.value)} />
                            <span className="label_input_plateau">Entrez l'url de votre plateau</span>
                            <BoutonSuivant/>
                        </form>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default CreerJeu;