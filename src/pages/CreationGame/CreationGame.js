import React, { useEffect, useState } from 'react';
import Template from '../../components/template/template';

const CreationGame = (props) => {
    const [plateau,setPlateau] = useState(props.plateau);
    useEffect(() => {
        document.querySelector("#sendImage")?.addEventListener('click', ()=>{
            setPlateau(document.querySelector('#urlImage').value);
        })},[]);
    return(
        <Template>
            {plateau ? (<>
                <div>
                    <img src={plateau}></img>
                </div>
            </>)
            :(<>
                <div>
                    <input id="urlImage" type="text" placeholder='image'></input>
                    <input id="sendImage" type="submit" value="Envoyer"></input>
                </div>
            </>)}
        </Template>
    )
}
export default CreationGame;