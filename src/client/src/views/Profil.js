import React, {useContext} from 'react';
import Log from '../components/Log';
import {UidContext} from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";


const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {uid ? (
                <UpdateProfil/>
            ) : (
            <div className="log-container">
                <Log connexion={true} inscription={false}/>
                <div className="img-container">
                    <img src="./img/logo_js.png" alt="img-log"/>
                </div>
            </div>
            )}
        </div>
    );
};

export default Profil;
