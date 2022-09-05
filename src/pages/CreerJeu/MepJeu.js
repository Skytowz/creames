import React from 'react';
import { useLocation } from 'react-router-dom';
import Template from '../../components/template/template';
import Game from '../../entities/game';
import './MepJeu.css';


const MepJeu =  (props) => {

    const location = useLocation();
    
    const jeu = new Game(location.state.jeu);
    
    const test = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let style_div=e.currentTarget.lastChild.style
        if(style_div.display == "none"){
            style_div.display = 'block'
        } else {
            style_div.display = 'none'
        }       
    }

    return(
        <Template>
            <form>
                <div className='global_mep_jeu'>
                    <div className="div_map_mep_jeu">
                        <canvas>
                            
                        </canvas>
                        <img className='image_map_mep_jeu' src={jeu.plateau} />
                    </div>
                    <div className="div_map_deux_mep_jeu">
                        <div className='div_options' onClick={test}>
                            <h3>
                                Options générales
                            </h3> 
                            <div className="div_options_caches" id="div_options_caches_1" onClick={e => e.stopPropagation()}>
                                <div>
                                    <label htmlFor="nom_du_jeu">Nom du jeu :</label>
                                    <input type="text"  defaultValue={jeu._nom ?? "" }></input>
                                </div>
                                <div>
                                    <label htmlFor="nb_min">Nombre de joueur min :</label>
                                    <input type="number"  defaultValue={jeu._nbJoueurMin ?? "" }></input>
                                </div>
                                <div>
                                    <label htmlFor="nb_max">Nombre de joueur max :</label>
                                    <input type="number"  defaultValue={jeu._nbJoueurMax ?? "" }></input>
                                </div>
                                <div>
                                    <label htmlFor="description">Description :</label>
                                    <textarea className='textarea_general' defaultValue={jeu._regle ?? "" }></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='div_options' onClick={test}>
                            <h3>
                                Options du plateau
                            </h3>
                            <div className="div_options_caches" id="div_options_caches_1">
                                <p>
                                    Liste des cases du plateau :
                                </p>
                                <p>
                                    Ajouter une case à la suite
                                </p>
                            </div>
                        </div>
                        <div className='div_options' onClick={test}>
                            <h3>
                                Options des dès
                            </h3>
                            <div className="div_options_caches" id="div_options_caches_1">
                                <p>
                                    Nombre de dès
                                </p>
                                <p>
                                    Valeur mini du dè
                                </p>
                                <p>
                                    Valeur max
                                </p>
                            </div>
                        </div>
                        <div className='div_options' onClick={test}>
                            <h3>
                                Options des pions
                            </h3>
                            <div className="div_options_caches" id="div_options_caches_1">
                                <p>
                                    Test
                                </p>
                                <p>
                                    Test
                                </p>
                            </div>
                        </div>
                        <div className='div_options'>
                            <h3>
                                Sauvegarder
                            </h3>
                        </div>
                    </div>  
                </div> 
            </form>
        </Template>
    )
}

export default MepJeu;