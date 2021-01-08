import React, {useContext} from 'react';
import LeftNav from "../components/LeftNav";
import ListeHabitation from "../components/ListeHabitation";
import NewPostForm from "../components/Post/NewPostForm";
import {UidContext} from "../components/AppContext";

const Habitation = () => {
    const uid = useContext(UidContext);

    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <div className="home-header">
                    {uid ? <NewPostForm/> : "Test"}
                </div>
                <ListeHabitation/>
            </div>
        </div>
    );
};

export default Habitation;
