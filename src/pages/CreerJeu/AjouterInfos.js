import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import BoutonRetour from '../../components/bouton/bouton_retour/bouton_retour';
import BoutonSuivant from '../../components/bouton/bouton_suivant/bouton_suivant';
import Template from '../../components/template/template';
import Game from '../../entities/game';
import './AjouterInfos.css';

const AjouterInfos = (props) => {

    const location = useLocation();
    
    const jeu = new Game(location.state.jeu);

    const navigate = useNavigate();

    const [nom, setNom] = useState('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        jeu.nom = nom;
        jeu.nbJoueurMin = min;
        jeu.nbJoueurMax = max;
        jeu.regle = description;
        navigate("../mep-jeu", {state:{jeu:jeu}})
    }
    

    return(
        <Template>
            <div className='container_ajouter_infos'>
                <div className='div_bouton_retour'>
                    <BoutonRetour/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='colonne_nom_jeu'>
                        <div className='div_label_nom_jeu'>
                            <label>
                                Nom du jeu : 
                            </label>
                        </div>
                        <div className='div_input_nom_jeu'>
                            <input type="text" name="name" onChange={e => setNom(e.target.value)}/>
                        </div>
                    </div>
                    <div className='colonne_nom_jeu'>
                        <div className='div_label_nom_jeu'>
                            <label>
                                Nombre de joueurs minimun : 
                            </label>
                        </div>
                        <div className='div_input_nom_jeu'>
                            <input type="number" name="min" onChange={e => setMin(e.target.value)}/>
                        </div>
                    </div>
                    <div className='colonne_nom_jeu'>
                        <div className='div_label_nom_jeu'>
                            <label>
                                Nombre de joueurs maximum : 
                            </label>
                        </div>
                        <div className='div_input_nom_jeu'>
                            <input type="number" name="max" onChange={e => setMax(e.target.value)}/>
                        </div>
                    </div>
                    <div className='div_textarea'>
                        <h3>Règles et description du jeu :</h3>
                        <textarea rows="10" cols="60" onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className='div_suivant'>
                        <BoutonSuivant/>
                    </div>
                </form>  
            </div>
        </Template>
    )
}

export default AjouterInfos;