import React from "react";
import LeftNav from "../LeftNav";
import {useSelector} from "react-redux";


const UpdateProfil = () => {
    const userData = useSelector((state) => state.userReducer);

    return (
        <div className="profil-container">
            <LeftNav/>
            <h1> Profil de {userData.pseudo}</h1><br/>
            <h1>Email : {userData.email}</h1><br/>
        </div>
    );
};

export default UpdateProfil;
