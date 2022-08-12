import React from 'react';
import { useLocation } from 'react-router-dom';
import Template from '../../components/template/template';
import Game from '../../entities/game';
import './MepJeu.css';

const MepJeu = (props) => {

    const location = useLocation();
    
    const jeu = new Game(location.state.jeu);
    console.log(jeu);

    return(
        <Template>
            <img src={jeu.plateau}/>
        </Template>
    )
}

export default MepJeu;