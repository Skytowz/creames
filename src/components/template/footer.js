import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = (props) =>{
    return(
        <div className="footer">
            <div className="colonne_footer colonne_footer_un">
                <img alt='logo'  src={require("../../assets/images/logo-blanc.png")} />
            </div>
            <div className="colonne_footer colonne_footer_deux">
                <h5>COORDONNÉES</h5>
                <p>Mail : </p>
                <p>Téléphone : </p>
            </div>
            <div className="colonne_footer colonne_footer_trois">
                <h5>MENU</h5>
                <div>
                    <p>
                    <Link to="/contact">
                        Contactez nous
                    </Link>
                    </p>
                    <p>
                        <Link to="/mentions-legales">
                            Mentions légales
                        </Link>
                    </p>
                </div>
            </div>
            <div className="colonne_footer colonne_footer_quatre">
                <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%204%20Av.%20de%20l'Horizon,%2059650%20Villeneuve-d'Ascq,%20France+(Creames)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">wearable gps</a></iframe>
            </div>
        </div>    
    )
}

export default Footer;