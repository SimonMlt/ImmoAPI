import React, {useState} from 'react';
import Inscription from "./Inscription";
import Connexion from "./Connexion";

const Index = (props) => {
    const [inscriptionModal, setInscriptionModal] = useState(props.inscription);
    const [connexionModal, setConnexionModal] = useState(props.connexion);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setConnexionModal(false);
            setInscriptionModal(true);
        } else if (e.target.id === "login") {
            setConnexionModal(true);
            setInscriptionModal(false);
        }
    }

return (
    <div className="connection-form">
        <div className="form-container">
            <ul>
                <li onClick={handleModals} id="login" className={connexionModal ? "active-btn" : null}>Se connecter</li>
                <li onClick={handleModals} id="register" className={inscriptionModal ? "active-btn" : null}>S'inscrire</li>
            </ul>
            {inscriptionModal && <Inscription/>}
            {connexionModal && <Connexion/>}
        </div>
    </div>
);
}
;

export default Index;
