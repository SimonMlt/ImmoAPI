import React, {useContext} from 'react';
import LeftNav from "../components/LeftNav";
import ListeHabitation from "../components/ListeHabitation";
import {UidContext} from "../components/AppContext";
import {useHistory} from "react-router-dom";

const Habitation = () => {
    const uid = useContext(UidContext);
    const {push} = useHistory();

    const addPost = () => {
        push("/addHabitation");
    }

    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <div className="home-header">
                    {uid ? <div>
                        <button className="send" onClick={addPost}>
                            Déposer une annonce
                        </button>
                    </div> : "Deco"}
                </div>
                <ListeHabitation/>
            </div>
        </div>
)
    ;
};

export default Habitation;
